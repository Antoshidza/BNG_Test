using Tweens.Core;
using UnityEngine;

namespace Tweens {
  public sealed class SpriteRendererColorTween : Tween<SpriteRenderer, Color> {
    internal sealed override Color Current(SpriteRenderer component) {
      return component.color;
    }

    internal sealed override Color Lerp([Bridge.Ref] Color from, [Bridge.Ref] Color to, float time) {
      return Color.LerpUnclamped(from, to, time);
    }

    internal sealed override void Apply(SpriteRenderer component, [Bridge.Ref] Color value) {
      component.color = value;
    }
  }
}