using UnityEngine;

[CreateAssetMenu(menuName = "Hex Merge/DragTutorialConfig")]
public sealed class HexDragTutorialConfig : ScriptableObject
{
    [SerializeField] public int EnabledDraggableIndex;
    [SerializeField] public Vector2Int TargetCellOffset;
    [SerializeField] public float HandShowDelay;
    [SerializeField] public float HandMoveDuration;
    [SerializeField] public float HandLoopDelay;
}
