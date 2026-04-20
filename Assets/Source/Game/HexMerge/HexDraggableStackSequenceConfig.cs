using System;
using UnityEngine;

[CreateAssetMenu(menuName = "Hex Merge/Draggable Stack Sequence Config")]
public sealed class HexDraggableStackSequenceConfig : ScriptableObject
{
    [SerializeField] private HexDraggableStackSetup[] _stacks;

    public HexDraggableStackSetup[] Stacks => _stacks;

    public int Count => _stacks.Length;
}

[Serializable]
public struct HexDraggableStackSetup
{
    [SerializeField] private HexDraggableTileGroupSetup[] _groups;

    public HexDraggableTileGroupSetup[] Groups => _groups;
}

[Serializable]
public struct HexDraggableTileGroupSetup
{
    [field: SerializeField] public HexColor Color { get; private set; }
    [field: SerializeField] public int Amount { get; private set; }
}
