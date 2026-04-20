using System;

public readonly struct HexTile : IEquatable<HexTile>
{
    public HexColor Color { get; }
    
    public HexTile(HexColor color) => 
        Color = color;

    public bool Equals(HexTile other) => 
        Color == other.Color;

    public override bool Equals(object obj) => 
        obj is HexTile other && Equals(other);

    public override int GetHashCode() => 
        (int)Color;

    public override string ToString() => 
        Color.ToString();

    public static bool operator ==(HexTile left, HexTile right) => 
        left.Equals(right);

    public static bool operator !=(HexTile left, HexTile right) => 
        !left.Equals(right);
}
