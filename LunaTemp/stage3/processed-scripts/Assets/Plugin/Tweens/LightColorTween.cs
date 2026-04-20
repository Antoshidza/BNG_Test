using Tweens.Core;
using UnityEngine;

namespace Tweens {
  public sealed class LightColorTween : Tween<Light, Color> {
    internal sealed override Color Current(Light component) {
      return component.color;
    }

    internal sealed override Color Lerp([Bridge.Ref] Color from, [Bridge.Ref] Color to, float time) {
      return Color.LerpUnclamped(from, to, time);
    }

    internal sealed override void Apply(Light component, [Bridge.Ref] Color value) {
      component.color = value;
    }
  }
}