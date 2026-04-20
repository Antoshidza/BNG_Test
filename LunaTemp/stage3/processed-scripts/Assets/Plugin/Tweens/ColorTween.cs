using Tweens.Core;
using UnityEngine;

namespace Tweens {
  public sealed class ColorTween : Tween<Transform, Color> {
    internal sealed override Color Current(Transform component) {
      return Color.clear;
    }

    internal sealed override Color Lerp([Bridge.Ref] Color from, [Bridge.Ref] Color to, float time) {
      return Color.LerpUnclamped(from, to, time);
    }

    internal sealed override void Apply(Transform component, [Bridge.Ref] Color value) { }
  }
}