using System;

public readonly struct HexTileAddition
{
    public HexTileAddition(HexCoord coord, HexTile tile, int amount = 1)
    {
        if (amount <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(amount), "Amount must be greater than zero.");
        }

        Coord = coord;
        Tile = tile;
        Amount = amount;
    }

    public HexCoord Coord { get; }

    public HexTile Tile { get; }

    public int Amount { get; }
}
