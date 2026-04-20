using System;
using UnityEngine;

[CreateAssetMenu(menuName = "Hex Merge/BoardSetupConfig")]
public sealed class HexBoardSetupConfig : ScriptableObject
{
    [Min(1)]
    [SerializeField] private int _width = 1;

    [Min(1)]
    [SerializeField] private int _height = 1;

    [SerializeField] private HexCellStackSetup[] _cells;

    public int Width => _width;

    public int Height => _height;

    public HexCellStackSetup[] Cells => _cells;
}

[Serializable]
public struct HexCellStackSetup
{
    [SerializeField] private Vector2Int _position;
    [SerializeField] private HexColor _color;
    [Min(1)]
    [SerializeField] private int _amount;

    public Vector2Int Position => _position;

    public HexColor Color => _color;

    public int Amount => _amount;
}
