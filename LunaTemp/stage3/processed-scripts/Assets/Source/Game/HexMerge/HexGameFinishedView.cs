using System;
using UnityEngine;
using UnityEngine.UI;
using Tweens;

namespace Source.Game.HexMerge
{
    public sealed class HexGameFinishedView : MonoBehaviour
    {
        [SerializeField] private CanvasGroup _canvasGroup;
        [SerializeField] private Button _button;
        [Min(0.01f)]
        [SerializeField] private float _fadeDuration = 0.25f;

        public event Action Clicked;

        private void Awake()
        {
            _button.onClick.AddListener(OnButtonClicked);
            gameObject.SetActive(false);
        }

        private void OnDestroy()
        {
            _button.onClick.RemoveListener(OnButtonClicked);
        }

        public void Activate()
        {
            gameObject.SetActive(true);
            _canvasGroup.alpha = 0f;

            gameObject.AddTween(new FloatTween
            {
                from = 0f,
                to = 1f,
                duration = _fadeDuration,
                easeType = EaseType.SineInOut,
                onUpdate = (_, value) =>
                {
                    _canvasGroup.alpha = value;
                },
                onFinally = _ =>
                {
                    _canvasGroup.alpha = 1f;
                }
            });
        }

        private void OnButtonClicked()
        {
            Clicked?.Invoke();
        }
    }
}
