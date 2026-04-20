using System;
using System.Collections.Generic;
using Source.Optional;

public sealed class HexCellModel
{
    private readonly List<HexTile> _tiles = new List<HexTile>();

    public int Count => _tiles.Count;

    public bool IsEmpty => _tiles.Count == 0;

    public IReadOnlyList<HexTile> Tiles => _tiles;

    public Option<HexTile> PeekTop()
    {
        if (_tiles.Count == 0)
        {
            return Option<HexTile>.None;
        }

        return Option<HexTile>.Some(_tiles[_tiles.Count - 1]);
    }

    public HexColor PeekTopColor()
    {
        Option<HexTile> tile = PeekTop();
        return !tile.IsSome ? throw new InvalidOperationException("Cell is empty.") : tile.Value.Color;
    }

    public void Push(HexTile tile) => 
        _tiles.Add(tile);

    public HexTile Pop()
    {
        Option<HexTile> tile = PopOption();
        return !tile.IsSome ? throw new InvalidOperationException("Cell is empty.") : tile.Value;
    }

    public Option<HexTile> PopOption()
    {
        int lastIndex = _tiles.Count - 1;

        if (lastIndex < 0)
        {
            return Option<HexTile>.None;
        }

        HexTile tile = _tiles[lastIndex];
        _tiles.RemoveAt(lastIndex);
        return Option<HexTile>.Some(tile);
    }

    public void RemoveRange(int index, int count)
    {
        _tiles.RemoveRange(index, count);
    }
}
