using System;
using System.Collections.Generic;

public sealed class HexBoardModel
{
    private const int CollapseThreshold = 10;

    private readonly HexGrid<HexCellModel> _cells;
    private readonly Queue<HexCoord> _mergeQueue = new Queue<HexCoord>();
    private readonly HashSet<HexCoord> _queuedCoords = new HashSet<HexCoord>();

    private int _batchDepth;
    private bool _isProcessingMerges;
    
    public int Width { get; }
    public int Height { get; }

    public HexCellModel this[HexCoord coord] => _cells[coord];
    
    public event Action<HexCellChanged> CellChanged;
    public event Action<HexTileAdded> TileAdded;
    public event Action<HexMergePlan> Merged;
    public event Action<HexCollapsed> Collapsed;

    public HexBoardModel(int width, int height)
    {
        Width = width;
        Height = height;
        _cells = new HexGrid<HexCellModel>(width, height);

        var coords = _cells.EnumerateCoords();

        while (coords.MoveNext()) 
            _cells[coords.Current] = new HexCellModel();
    }

    public bool Exist(HexCoord coord)
    {
        var offset = HexMath.ToOffset(coord);
        return offset.x >= 0 && offset.x < Width && offset.y >= 0 && offset.y < Height;
    }

    public bool TryGetTopTile(HexCoord coord, out HexTile tile)
    {
        if (!_cells.Contains(coord))
        {
            tile = default;
            return false;
        }

        return _cells[coord].TryPeekTop(out tile);
    }

    public bool TryGetNeighborCoord(HexCoord coord, HexDirection direction, out HexCoord neighbor) => 
        _cells.TryGetNeighbor(coord, direction, out neighbor);

    public void BeginBatchUpdate()
    {
        _batchDepth++;
    }

    public void EndBatchUpdate(bool processMerges = false)
    {
        if (_batchDepth <= 0)
        {
            throw new InvalidOperationException("Batch update was not started.");
        }

        _batchDepth--;

        if (_batchDepth > 0)
        {
            return;
        }

        if (processMerges)
        {
            ProcessPendingMerges();
            return;
        }

        _mergeQueue.Clear();
        _queuedCoords.Clear();
    }

    public void AddTile(HexCoord coord, HexTile tile, int amount = 1)
    {
        if (amount <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(amount), "Amount must be greater than zero.");
        }

        HexCellModel cell = GetCellOrThrow(coord);

        for (int i = 0; i < amount; i++)
        {
            cell.Push(tile);
            TileAdded?.Invoke(new HexTileAdded(coord, tile, cell.Count - 1));
        }

        NotifyCellChanged(coord);
        EnqueueForMerge(coord);
        TryProcessPendingMerges();
    }

    public void AddTiles(params HexTileAddition[] additions)
    {
        if (additions == null)
        {
            throw new ArgumentNullException(nameof(additions));
        }

        BeginBatchUpdate();

        try
        {
            for (int i = 0; i < additions.Length; i++)
            {
                HexTileAddition addition = additions[i];
                AddTile(addition.Coord, addition.Tile, addition.Amount);
            }
        }
        finally
        {
            EndBatchUpdate(true);
        }
    }

    public bool TryRemoveTopTile(HexCoord coord, out HexTile tile)
    {
        if (!_cells.Contains(coord))
        {
            tile = default;
            return false;
        }

        HexCellModel cell = _cells[coord];

        if (!cell.TryPop(out tile))
        {
            return false;
        }

        NotifyCellChanged(coord);
        EnqueueForMerge(coord);
        TryProcessPendingMerges();
        return true;
    }

    public void ProcessPendingMerges()
    {
        if (_isProcessingMerges)
        {
            return;
        }

        _isProcessingMerges = true;

        try
        {
            while (true)
            {
                ProcessMergePhase();

                List<HexCollapsed> collapses = CollectCollapses();

                if (collapses.Count == 0)
                {
                    break;
                }

                ApplyCollapsePhase(collapses);
            }
        }
        finally
        {
            _isProcessingMerges = false;
        }
    }

    private void ProcessMergePhase()
    {
        while (_mergeQueue.Count > 0)
        {
            HexCoord pivot = _mergeQueue.Dequeue();
            _queuedCoords.Remove(pivot);

            if (!HexMergeResolver.TryResolve(this, pivot, out HexMergePlan plan))
            {
                continue;
            }

            ApplyMerge(plan);
        }
    }

    private void ApplyMerge(HexMergePlan plan)
    {
        HexCellModel fromCell = GetCellOrThrow(plan.From);
        HexCellModel toCell = GetCellOrThrow(plan.To);

        if (!fromCell.TryPop(out HexTile tile))
        {
            return;
        }

        toCell.Push(tile);

        NotifyCellChanged(plan.From);
        NotifyCellChanged(plan.To);
        Merged?.Invoke(new HexMergePlan(tile, plan.From, plan.To, plan.Path));

        EnqueueForMerge(plan.From);
        EnqueueForMerge(plan.To);
    }

    private List<HexCollapsed> CollectCollapses()
    {
        List<HexCollapsed> collapses = new List<HexCollapsed>();
        HexGrid<HexCellModel>.CoordEnumerator coords = _cells.EnumerateCoords();

        while (coords.MoveNext())
        {
            CollectCellCollapses(coords.Current, _cells[coords.Current], collapses);
        }

        return collapses;
    }

    private void ApplyCollapsePhase(List<HexCollapsed> collapses)
    {
        HashSet<HexCoord> affectedCoords = new HashSet<HexCoord>();

        for (int i = 0; i < collapses.Count; i++)
        {
            HexCollapsed collapse = collapses[i];
            GetCellOrThrow(collapse.Coord).RemoveRange(collapse.StartIndex, collapse.Count);
            affectedCoords.Add(collapse.Coord);
        }

        foreach (HexCoord coord in affectedCoords)
        {
            NotifyCellChanged(coord);
            EnqueueForMerge(coord);
        }

        for (int i = 0; i < collapses.Count; i++)
        {
            Collapsed?.Invoke(collapses[i]);
        }
    }

    private static void CollectCellCollapses(HexCoord coord, HexCellModel cell, List<HexCollapsed> collapses)
    {
        if (cell.Count < CollapseThreshold)
        {
            return;
        }

        List<HexCollapsed> cellCollapses = new List<HexCollapsed>();
        int runStart = 0;

        while (runStart < cell.Count)
        {
            HexColor runColor = cell.Tiles[runStart].Color;
            int runEnd = runStart + 1;

            while (runEnd < cell.Count && cell.Tiles[runEnd].Color == runColor)
            {
                runEnd++;
            }

            int runCount = runEnd - runStart;

            if (runCount >= CollapseThreshold)
            {
                cellCollapses.Add(new HexCollapsed(coord, runColor, runStart, runCount));
            }

            runStart = runEnd;
        }

        for (int i = cellCollapses.Count - 1; i >= 0; i--)
        {
            collapses.Add(cellCollapses[i]);
        }
    }

    private void EnqueueForMerge(HexCoord coord)
    {
        if (_queuedCoords.Add(coord))
        {
            _mergeQueue.Enqueue(coord);
        }
    }

    private void TryProcessPendingMerges()
    {
        if (_batchDepth > 0)
        {
            return;
        }

        ProcessPendingMerges();
    }

    private HexCellModel GetCellOrThrow(HexCoord coord)
    {
        if (!_cells.Contains(coord))
        {
            throw new ArgumentOutOfRangeException(nameof(coord), $"Coordinate {coord} is outside grid bounds.");
        }

        return _cells[coord];
    }

    private void NotifyCellChanged(HexCoord coord)
    {
        CellChanged?.Invoke(new HexCellChanged(coord, _cells[coord]));
    }
}
