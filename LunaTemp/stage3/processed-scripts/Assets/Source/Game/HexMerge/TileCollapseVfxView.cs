using System;
using UnityEngine;

namespace Source.Game.HexMerge
{
    public sealed class TileCollapseVfxView : MonoBehaviour
    {
        [SerializeField] private ParticleSystem _particleSystem;
        [SerializeField] private ParticleSystem _subParticleSystem;

        private bool _isPlaying;

        public event Action<TileCollapseVfxView> Completed;

        public void Play([Bridge.Ref] Color color)
        {
            ParticleSystemSetColor(_particleSystem, color);
            ParticleSystemSetColor(_subParticleSystem, color);

            _isPlaying = true;
            _particleSystem.Play(true);
            _subParticleSystem.Play(true);
        }

        private static void ParticleSystemSetColor(ParticleSystem ps, [Bridge.Ref] Color color)
        {
            var main = ps.main;
            main.startColor = color;
        }

        private void Update()
        {
            if (!_isPlaying || _particleSystem.IsAlive(true))
                return;

            _isPlaying = false;
            Completed?.Invoke(this);
        }
    }
}
