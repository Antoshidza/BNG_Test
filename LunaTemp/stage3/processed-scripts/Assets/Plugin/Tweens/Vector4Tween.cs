using Tweens.Core;
using UnityEngine;

namespace Tweens {
  public sealed class Vector4Tween : Tween<Transform, Vector4> {
    internal sealed override Vector4 Current(Transform component) {
      return Vector4.zero;
    }

    internal sealed override Vector4 Lerp([Bridge.Ref] Vector4 from, [Bridge.Ref] Vector4 to, float time) {
      return Vector4.LerpUnclamped(from, to, time);
    }

    internal sealed override void Apply(Transform component, [Bridge.Ref] Vector4 value) { }
  }
}