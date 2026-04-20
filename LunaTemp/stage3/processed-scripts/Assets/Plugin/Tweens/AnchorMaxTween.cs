using Tweens.Core;
using UnityEngine;

namespace Tweens {
  public sealed class AnchorMaxTween : Tween<RectTransform, Vector2> {
    internal sealed override Vector2 Current(RectTransform component) {
      return component.anchorMax;
    }

    internal sealed override Vector2 Lerp([Bridge.Ref] Vector2 from, [Bridge.Ref] Vector2 to, float time) {
      return Vector2.LerpUnclamped(from, to, time);
    }

    internal sealed override void Apply(RectTransform component, [Bridge.Ref] Vector2 value) {
      component.anchorMax = value;
    }
  }
}