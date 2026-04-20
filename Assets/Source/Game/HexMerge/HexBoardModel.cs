using System;
using System.Collections.Generic;
using Source.Optional;

public sealed class HexBoardModel
{
    private const int CollapseThreshold = 10;

    private HexGrid<HexCellModel> _cells;
    private Queue<HexCoord> _mergeQueue = new Queue<HexCoord>();
    private HashSet<HexCoord> _queuedCoords = new HashSet<HexCoord>();

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
            _cells.Set(coords.Current, new HexCellModel());
    }

    public bool Exist(HexCoord coord)
    {
        var offset = HexMath.ToOffset(coord);
        return offset.x >= 0 && offset.x < Width && offset.y >= 0 && offset.y < Height;
    }

    public Option<HexTile> GetTopTile(HexCoord coord)
    {
        if (!_cells.Contains(coord))
        {
            return Option<HexTile>.None;
        }

        return _cells[coord].PeekTop();
    }

    public Option<HexCoord> GetNeighborCoord(HexCoord coord, HexDirection direction) => 
        _cells.GetNeighborCoord(coord, direction);

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

    public Option<HexTile> RemoveTopTile(HexCoord coord)
    {
        if (!_cells.Contains(coord))
        {
            return Option<HexTile>.None;
        }

        HexCellModel cell = _cells[coord];
        Option<HexTile> tile = cell.PopOption();
        
        if (!tile.IsSome)
        {
            return Option<HexTile>.None;
        }

        NotifyCellChanged(coord);
        EnqueueForMerge(coord);
        TryProcessPendingMerges();
        return tile;
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

            Option<HexMergePlan> plan = HexMergeResolver.Resolve(this, pivot);

            if (!plan.IsSome)
            {
                continue;
            }

            ApplyMerge(plan.Value);
        }
    }

    private void ApplyMerge(HexMergePlan plan)
    {
        HexCellModel fromCell = GetCellOrThrow(plan.From);
        HexCellModel toCell = GetCellOrThrow(plan.To);

        Option<HexTile> tile = fromCell.PopOption();

        if (!tile.IsSome)
        {
            return;
        }

        toCell.Push(tile.Value);

        NotifyCellChanged(plan.From);
        NotifyCellChanged(plan.To);
        Merged?.Invoke(new HexMergePlan(tile.Value, plan.From, plan.To, plan.Path));

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
