using System;
using System.Collections.Generic;

public sealed class HexCellModel
{
    private readonly List<HexTile> _tiles = new List<HexTile>();

    public int Count => _tiles.Count;

    public bool IsEmpty => _tiles.Count == 0;

    public IReadOnlyList<HexTile> Tiles => _tiles;

    public bool TryPeekTop(out HexTile tile)
    {
        if (_tiles.Count == 0)
        {
            tile = default;
            return false;
        }

        tile = _tiles[^1];
        return true;
    }

    public HexColor PeekTopColor() => 
        !TryPeekTop(out var tile) ? throw new InvalidOperationException("Cell is empty.") : tile.Color;

    public void Push(HexTile tile) => 
        _tiles.Add(tile);

    public HexTile Pop() => 
        !TryPop(out var tile) ? throw new InvalidOperationException("Cell is empty.") : tile;

    public bool TryPop(out HexTile tile)
    {
        int lastIndex = _tiles.Count - 1;

        if (lastIndex < 0)
        {
            tile = default;
            return false;
        }

        tile = _tiles[lastIndex];
        _tiles.RemoveAt(lastIndex);
        return true;
    }

    public void RemoveRange(int index, int count)
    {
        _tiles.RemoveRange(index, count);
    }
}
