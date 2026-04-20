public readonly struct HexCollapsed
{
    public HexCollapsed(HexCoord coord, HexColor color, int startIndex, int count)
    {
        Coord = coord;
        Color = color;
        StartIndex = startIndex;
        Count = count;
    }

    public HexCoord Coord { get; }

    public HexColor Color { get; }

    public int StartIndex { get; }

    public int Count { get; }
}
