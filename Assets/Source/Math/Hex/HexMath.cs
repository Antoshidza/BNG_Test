using System;
using System.Collections.Generic;
using UnityEngine;

public static class HexMath
{
    private static readonly HexCoord[] Directions =
    {
        new HexCoord(1, 0),
        new HexCoord(1, -1),
        new HexCoord(0, -1),
        new HexCoord(-1, 0),
        new HexCoord(-1, 1),
        new HexCoord(0, 1)
    };

    public static HexCoord Neighbor(HexCoord coord, HexDirection direction)
    {
        return coord + Directions[(int)direction];
    }

    public static int Distance(HexCoord a, HexCoord b)
    {
        var dq = Math.Abs(a.Q - b.Q);
        var dr = Math.Abs(a.R - b.R);
        var ds = Math.Abs(a.S - b.S);
        return (dq + dr + ds) / 2;
    }

    public static Vector2Int ToOffset(HexCoord coord)
    {
        return new Vector2Int(coord.Q + (coord.R - (coord.R & 1)) / 2, coord.R);
    }

    public static HexCoord FromOffset(int x, int y)
    {
        return new HexCoord(x - (y - (y & 1)) / 2, y);
    }

    public static HexCoord FromOffset(Vector2Int offset)
    {
        return FromOffset(offset.x, offset.y);
    }

    public static HexCoord RoundAxial(float q, float r)
    {
        var s = -q - r;

        var roundedQ = RoundToInt(q);
        var roundedR = RoundToInt(r);
        var roundedS = RoundToInt(s);

        var qDiff = Abs(roundedQ - q);
        var rDiff = Abs(roundedR - r);
        var sDiff = Abs(roundedS - s);

        if (qDiff > rDiff && qDiff > sDiff)
            roundedQ = -roundedR - roundedS;
        else if (rDiff > sDiff) 
            roundedR = -roundedQ - roundedS;

        return new HexCoord(roundedQ, roundedR);
    }

    public static void FillRange(HexCoord center, int range, List<HexCoord> results)
    {
        if (results == null)
            throw new ArgumentNullException(nameof(results));

        if (range < 0)
            throw new ArgumentOutOfRangeException(nameof(range));

        results.Clear();

        for (int dq = -range; dq <= range; dq++)
        {
            var minDr = Math.Max(-range, -dq - range);
            var maxDr = Math.Min(range, -dq + range);

            for (int dr = minDr; dr <= maxDr; dr++) 
                results.Add(new HexCoord(center.Q + dq, center.R + dr));
        }
    }

    public static void FillRing(HexCoord center, int radius, List<HexCoord> results)
    {
        if (results == null)
            throw new ArgumentNullException(nameof(results));

        if (radius < 0)
            throw new ArgumentOutOfRangeException(nameof(radius));

        results.Clear();

        if (radius == 0)
        {
            results.Add(center);
            return;
        }

        var current = center + (Directions[(int)HexDirection.BottomLeft] * radius);

        for (int side = 0; side < Directions.Length; side++)
        {
            for (int step = 0; step < radius; step++)
            {
                results.Add(current);
                current += Directions[side];
            }
        }
    }

    private static int RoundToInt(float value)
    {
        return value >= 0f ? (int)(value + 0.5f) : (int)(value - 0.5f);
    }

    private static float Abs(float value)
    {
        return value >= 0f ? value : -value;
    }
}
