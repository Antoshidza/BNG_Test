using System;
using System.Collections.Generic;
using UnityEngine;

public static class HexMergeResolver
{
    private static readonly HexLayout PreferenceLayout = new HexLayout(1f, Vector3.zero);

    private static readonly AxisDefinition[] Axes =
    {
        new AxisDefinition(HexDirection.Left, HexDirection.Right, 0),
        new AxisDefinition(HexDirection.BottomLeft, HexDirection.TopRight, 1),
        new AxisDefinition(HexDirection.TopLeft, HexDirection.BottomRight, 2)
    };

    public static bool TryResolve(HexBoardModel board, HexCoord pivot, out HexMergePlan plan)
    {
        if (board == null)
        {
            throw new ArgumentNullException(nameof(board));
        }

        if (!board.TryGetTopTile(pivot, out HexTile tile))
        {
            plan = default;
            return false;
        }

        List<HexCoord> bestLine = null;
        float bestHighestWorldX = float.NegativeInfinity;
        int bestLength = 0;
        int bestAxisOrder = int.MaxValue;

        for (int i = 0; i < Axes.Length; i++)
        {
            List<HexCoord> line = BuildLine(board, pivot, tile.Color, Axes[i]);

            if (line.Count < 2)
            {
                continue;
            }

            SortLineInMergeOrder(line);

            float highestWorldX = GetWorldX(line[line.Count - 1]);
            int length = line.Count;

            if (highestWorldX > bestHighestWorldX ||
                (Mathf.Approximately(highestWorldX, bestHighestWorldX) && length > bestLength) ||
                (Mathf.Approximately(highestWorldX, bestHighestWorldX) && length == bestLength && Axes[i].Order < bestAxisOrder))
            {
                bestLine = line;
                bestHighestWorldX = highestWorldX;
                bestLength = length;
                bestAxisOrder = Axes[i].Order;
            }
        }

        if (bestLine == null)
        {
            plan = default;
            return false;
        }

        HexCoord from = bestLine[0];
        HexCoord to = bestLine[1];
        plan = new HexMergePlan(tile, from, to, bestLine.ToArray());
        return true;
    }

    private static List<HexCoord> BuildLine(HexBoardModel board, HexCoord pivot, HexColor color, AxisDefinition axis)
    {
        List<HexCoord> line = new List<HexCoord>(4);

        CollectDirection(board, pivot, axis.NegativeDirection, color, line);
        line.Reverse();
        line.Add(pivot);
        CollectDirection(board, pivot, axis.PositiveDirection, color, line);

        return line;
    }

    private static void CollectDirection(HexBoardModel board, HexCoord start, HexDirection direction, HexColor color, List<HexCoord> results)
    {
        HexCoord current = start;

        while (board.TryGetNeighborCoord(current, direction, out HexCoord neighbor) &&
               board.TryGetTopTile(neighbor, out HexTile tile) &&
               tile.Color == color)
        {
            results.Add(neighbor);
            current = neighbor;
        }
    }

    private static void SortLineInMergeOrder(List<HexCoord> line)
    {
        line.Sort(SortLines);
    }

    private static int SortLines(HexCoord left, HexCoord right)
    {
        int byWorldX = GetWorldX(left).CompareTo(GetWorldX(right));

        if (byWorldX != 0)
        {
            return byWorldX;
        }

        int byRow = left.R.CompareTo(right.R);
        return byRow != 0 ? byRow : left.Q.CompareTo(right.Q);
    }

    private static float GetWorldX(HexCoord coord)
    {
        return PreferenceLayout.HexToWorld(coord).x;
    }

    private readonly struct AxisDefinition
    {
        public AxisDefinition(HexDirection negativeDirection, HexDirection positiveDirection, int order)
        {
            NegativeDirection = negativeDirection;
            PositiveDirection = positiveDirection;
            Order = order;
        }

        public HexDirection NegativeDirection { get; }

        public HexDirection PositiveDirection { get; }

        public int Order { get; }
    }
}
