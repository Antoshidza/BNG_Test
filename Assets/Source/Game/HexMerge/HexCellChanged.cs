public readonly struct HexCellChanged
{
    public HexCoord Coord { get; }
    public HexCellModel Cell { get; }
    
    public HexCellChanged(HexCoord coord, HexCellModel cell)
    {
        Coord = coord;
        Cell = cell;
    }
}
