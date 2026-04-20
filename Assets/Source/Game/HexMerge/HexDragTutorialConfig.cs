using UnityEngine;

[CreateAssetMenu(menuName = "Hex Merge/Drag Tutorial Config")]
public sealed class HexDragTutorialConfig : ScriptableObject
{
    [field: SerializeField] public int EnabledDraggableIndex { get; private set; }
    [field: SerializeField] public Vector2Int TargetCellOffset { get; private set; }
    [field: SerializeField] public float HandShowDelay { get; private set; } = 1f;
    [field: SerializeField] public float HandMoveDuration { get; private set; } = 0.9f;
    [field: SerializeField] public float HandLoopDelay { get; private set; } = 0.2f;
}
