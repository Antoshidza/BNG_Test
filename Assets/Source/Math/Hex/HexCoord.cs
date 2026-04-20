using System;

public struct HexCoord : IEquatable<HexCoord>
{
    public HexCoord(int q, int r)
    {
        Q = q;
        R = r;
    }

    public int Q { get; }

    public int R { get; }

    public int S => -Q - R;

    public bool Equals(HexCoord other)
    {
        return Q == other.Q && R == other.R;
    }

    public override bool Equals(object obj)
    {
        return obj is HexCoord other && Equals(other);
    }

    public override int GetHashCode()
    {
        unchecked
        {
            return (Q * 397) ^ R;
        }
    }

    public override string ToString()
    {
        return $"({Q}, {R}, {S})";
    }

    public static HexCoord operator +(HexCoord left, HexCoord right)
    {
        return new HexCoord(left.Q + right.Q, left.R + right.R);
    }

    public static HexCoord operator -(HexCoord left, HexCoord right)
    {
        return new HexCoord(left.Q - right.Q, left.R - right.R);
    }

    public static HexCoord operator *(HexCoord coord, int scale)
    {
        return new HexCoord(coord.Q * scale, coord.R * scale);
    }

    public static bool operator ==(HexCoord left, HexCoord right)
    {
        return left.Equals(right);
    }

    public static bool operator !=(HexCoord left, HexCoord right)
    {
        return !left.Equals(right);
    }
}
