using Tweens.Core;
using UnityEngine;

namespace Tweens {
  public sealed class QuaternionTween : Tween<Transform, Quaternion> {
    internal sealed override Quaternion Current(Transform component) {
      return Quaternion.identity;
    }

    internal sealed override Quaternion Lerp([Bridge.Ref] Quaternion from, [Bridge.Ref] Quaternion to, float time) {
      return Quaternion.LerpUnclamped(from, to, time);
    }

    internal sealed override void Apply(Transform component, [Bridge.Ref] Quaternion value) { }
  }
}