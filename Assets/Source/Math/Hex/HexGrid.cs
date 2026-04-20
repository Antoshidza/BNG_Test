using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public sealed class HexGrid<T> : IEnumerable<T>
{
    private readonly T[] _items;

    public HexGrid(int width, int height)
    {
        if (width <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(width));
        }

        if (height <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(height));
        }

        Width = width;
        Height = height;
        Count = width * height;
        _items = new T[Count];
    }

    public int Width { get; }

    public int Height { get; }

    public int Count { get; }

    public ref T this[int index] => ref _items[index];

    public ref T this[HexCoord coord]
    {
        get
        {
            return ref _items[GetIndex(coord)];
        }
    }

    public bool Contains(HexCoord coord)
    {
        Vector2Int offset = HexMath.ToOffset(coord);
        return offset.x >= 0 && offset.x < Width && offset.y >= 0 && offset.y < Height;
    }

    public bool ContainsIndex(int index)
    {
        return index >= 0 && index < Count;
    }

    public int GetIndex(HexCoord coord)
    {
        if (!TryGetIndex(coord, out int index))
        {
            throw new ArgumentOutOfRangeException(nameof(coord), $"Coordinate {coord} is outside grid bounds.");
        }

        return index;
    }

    public bool TryGetIndex(HexCoord coord, out int index)
    {
        Vector2Int offset = HexMath.ToOffset(coord);

        if (offset.x < 0 || offset.x >= Width || offset.y < 0 || offset.y >= Height)
        {
            index = -1;
            return false;
        }

        index = offset.x + (offset.y * Width);
        return true;
    }

    public HexCoord CoordAt(int index)
    {
        if (!ContainsIndex(index))
        {
            throw new ArgumentOutOfRangeException(nameof(index));
        }

        int x = index % Width;
        int y = index / Width;
        return HexMath.FromOffset(x, y);
    }

    public bool TryGet(HexCoord coord, out T value)
    {
        if (TryGetIndex(coord, out int index))
        {
            value = _items[index];
            return true;
        }

        value = default;
        return false;
    }

    public bool TrySet(HexCoord coord, T value)
    {
        if (TryGetIndex(coord, out int index))
        {
            _items[index] = value;
            return true;
        }

        return false;
    }

    public bool TryGetNeighbor(HexCoord coord, HexDirection direction, out HexCoord neighbor)
    {
        neighbor = HexMath.Neighbor(coord, direction);
        return Contains(neighbor);
    }

    public void Clear()
    {
        Array.Clear(_items, 0, _items.Length);
    }

    public void Fill(T value)
    {
        for (int i = 0; i < _items.Length; i++)
        {
            _items[i] = value;
        }
    }

    public CoordEnumerator EnumerateCoords()
    {
        return new CoordEnumerator(this);
    }

    public Enumerator GetEnumerator()
    {
        return new Enumerator(_items);
    }

    IEnumerator<T> IEnumerable<T>.GetEnumerator()
    {
        return new Enumerator(_items);
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return new Enumerator(_items);
    }

    public struct CoordEnumerator
    {
        private readonly HexGrid<T> _grid;
        private int _index;

        internal CoordEnumerator(HexGrid<T> grid)
        {
            _grid = grid;
            _index = -1;
        }

        public HexCoord Current => _grid.CoordAt(_index);

        public bool MoveNext()
        {
            int next = _index + 1;
            if (next >= _grid.Count)
            {
                return false;
            }

            _index = next;
            return true;
        }
    }

    public struct Enumerator : IEnumerator<T>
    {
        private readonly T[] _items;
        private int _index;

        internal Enumerator(T[] items)
        {
            _items = items;
            _index = -1;
        }

        public T Current => _items[_index];

        object IEnumerator.Current => Current;

        public bool MoveNext()
        {
            int next = _index + 1;
            if (next >= _items.Length)
            {
                return false;
            }

            _index = next;
            return true;
        }

        public void Reset()
        {
            _index = -1;
        }

        public void Dispose()
        {
        }
    }
}
