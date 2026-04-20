using UnityEngine;

public readonly struct HexLayout
{
    private const float Sqrt3 = 1.7320508075688772f;

    public HexLayout(float hexSize, in Vector3 origin)
    {
        HexSize = hexSize;
        Origin = origin;
    }

    public float HexSize { get; }

    public Vector3 Origin { get; }

    public Vector3 HexToWorld(in HexCoord coord, float y = 0f) => 
        Origin + new Vector3(HexSize * Sqrt3 * (coord.Q + coord.R * 0.5f), y, HexSize * 1.5f * coord.R);

    public HexCoord WorldToHex(in Vector3 position)
    {
        var local = position - Origin;
        return HexMath.RoundAxial((Sqrt3 / 3f * local.x - 1f / 3f * local.z) / HexSize, 2f / 3f * local.z / HexSize);
    }
}
