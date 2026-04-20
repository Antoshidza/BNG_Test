using System;

public readonly struct HexMergePlan
{
    public HexMergePlan(HexTile tile, HexCoord from, HexCoord to, HexCoord[] path)
    {
        if (path == null)
        {
            throw new ArgumentNullException(nameof(path));
        }

        if (path.Length < 2)
        {
            throw new ArgumentException("Path must contain at least two cells.", nameof(path));
        }

        Tile = tile;
        From = from;
        To = to;
        Path = path;
    }

    public HexTile Tile { get; }

    public HexCoord From { get; }

    public HexCoord To { get; }

    public HexCoord[] Path { get; }
}
