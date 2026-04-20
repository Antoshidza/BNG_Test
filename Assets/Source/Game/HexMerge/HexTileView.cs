using UnityEngine;

namespace Source.Game.HexMerge
{
    public class HexTileView : MonoBehaviour
    {
        [field: SerializeField] public Renderer Renderer { get; private set; }
    }
}