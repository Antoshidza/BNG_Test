using System;
using UnityEngine;

[CreateAssetMenu(menuName = "Hex Merge/Color Palette Config")]
public sealed class HexColorPaletteConfig : ScriptableObject
{
    [SerializeField] private Color[] _colors;

    public Color[] Colors => _colors;

    public Color GetColor(HexColor color)
    {
        int index = (int)color;

        if (index < 0 || index >= _colors.Length)
        {
            throw new IndexOutOfRangeException($"Color {color} is not configured in the palette.");
        }

        return _colors[index];
    }
}
