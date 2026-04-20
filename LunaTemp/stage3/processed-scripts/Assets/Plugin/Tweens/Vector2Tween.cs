using Tweens.Core;
using UnityEngine;

namespace Tweens {
  public sealed class Vector2Tween : Tween<Transform, Vector2> {
    internal sealed override Vector2 Current(Transform component) {
      return Vector2.zero;
    }

    internal sealed override Vector2 Lerp([Bridge.Ref] Vector2 from, [Bridge.Ref] Vector2 to, float time) {
      return Vector2.LerpUnclamped(from, to, time);
    }

    internal sealed override void Apply(Transform component, [Bridge.Ref] Vector2 value) { }
  }
}