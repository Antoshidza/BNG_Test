public readonly struct HexTileAdded
{
    public HexTileAdded(HexCoord coord, HexTile tile, int index)
    {
        Coord = coord;
        Tile = tile;
        Index = index;
    }

    public HexCoord Coord { get; }

    public HexTile Tile { get; }

    public int Index { get; }
}
