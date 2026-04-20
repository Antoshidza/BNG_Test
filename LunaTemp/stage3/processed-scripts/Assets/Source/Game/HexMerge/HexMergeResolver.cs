using System;
using System.Collections.Generic;
using UnityEngine;
using Source.Optional;

public static class HexMergeResolver
{
    private static readonly HexLayout PreferenceLayout = new HexLayout(1f, Vector3.zero);

    private static readonly AxisDefinition[] Axes =
    {
        new AxisDefinition(HexDirection.Left, HexDirection.Right, 0),
        new AxisDefinition(HexDirection.BottomLeft, HexDirection.TopRight, 1),
        new AxisDefinition(HexDirection.TopLeft, HexDirection.BottomRight, 2)
    };

    public static Option<HexMergePlan> Resolve(HexBoardModel board, [Bridge.Ref] HexCoord pivot)
    {
        if (board == null)
        {
            throw new ArgumentNullException(nameof(board));
        }

        Option<HexTile> tile = board.GetTopTile(pivot);

        if (!tile.IsSome)
        {
            return Option<HexMergePlan>.None;
        }

        List<HexCoord> bestLine = null;
        float bestHighestWorldX = float.NegativeInfinity;
        int bestLength = 0;
        int bestAxisOrder = int.MaxValue;

        for (int i = 0; i < Axes.Length; i++)
        {
            List<HexCoord> line = BuildLine(board, pivot, tile.Value.Color, Axes[i]);

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
            return Option<HexMergePlan>.None;
        }

        HexCoord from = bestLine[0];
        HexCoord to = bestLine[1];
        return Option<HexMergePlan>.Some(new HexMergePlan(tile.Value, from, to, bestLine.ToArray()));
    }

    private static List<HexCoord> BuildLine(HexBoardModel board, [Bridge.Ref] HexCoord pivot, HexColor color, [Bridge.Ref] AxisDefinition axis)
    {
        List<HexCoord> line = new List<HexCoord>(4);

        CollectDirection(board, pivot, axis.NegativeDirection, color, line);
        line.Reverse();
        line.Add(pivot);
        CollectDirection(board, pivot, axis.PositiveDirection, color, line);

        return line;
    }

    private static void CollectDirection(HexBoardModel board, [Bridge.Ref] HexCoord start, HexDirection direction, HexColor color, List<HexCoord> results)
    {
        HexCoord current = start;

        while (true)
        {
            Option<HexCoord> neighbor = board.GetNeighborCoord(current, direction);

            if (!neighbor.IsSome)
            {
                return;
            }

            Option<HexTile> tile = board.GetTopTile(neighbor.Value);

            if (!tile.IsSome || tile.Value.Color != color)
            {
                return;
            }

            results.Add(neighbor.Value);
            current = neighbor.Value;
        }
    }

    private static void SortLineInMergeOrder(List<HexCoord> line)
    {
        line.Sort(SortLines);
    }

    private static int SortLines([Bridge.Ref] HexCoord left, [Bridge.Ref] HexCoord right)
    {
        int byWorldX = GetWorldX(left).CompareTo(GetWorldX(right));

        if (byWorldX != 0)
        {
            return byWorldX;
        }

        int byRow = left.R.CompareTo(right.R);
        return byRow != 0 ? byRow : left.Q.CompareTo(right.Q);
    }

    private static float GetWorldX([Bridge.Ref] HexCoord coord)
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
