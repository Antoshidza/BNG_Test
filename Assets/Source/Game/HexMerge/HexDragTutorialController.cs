using System.Collections;
using UnityEngine;
using Source.Optional;

namespace Source.Game.HexMerge
{
    public sealed class HexDragTutorialController : MonoBehaviour
    {
        [SerializeField] private HexGamePresenter _hexGamePresenter;
        [SerializeField] private Camera _worldCamera;
        [SerializeField] private Canvas _canvas;
        [SerializeField] private RectTransform _hand;
        [SerializeField] private HexDragTutorialConfig _config;

        private Coroutine _handRoutine;
        private Coroutine _showHandDelayRoutine;
        private bool _isCompleted;

        private void Start()
        {
            _hand.gameObject.SetActive(false);

            if (_isCompleted)
            {
                EnableAllDraggables();
                enabled = false;
                return;
            }

            _hexGamePresenter.CanPlaceDraggedStack = CanPlaceDraggedStack;
            _hexGamePresenter.DragStarted += OnDragStarted;
            _hexGamePresenter.DragCancelled += OnDragCancelled;
            _hexGamePresenter.DragPlaced += OnDragPlaced;

            for (int i = 0; i < 3; i++)
            {
                _hexGamePresenter.SetDraggableEnabled(i, i == _config.EnabledDraggableIndex);
            }

            StartShowHandDelay();
        }

        private void OnDestroy()
        {
            if (_hexGamePresenter != null)
            {
                _hexGamePresenter.DragStarted -= OnDragStarted;
                _hexGamePresenter.DragCancelled -= OnDragCancelled;
                _hexGamePresenter.DragPlaced -= OnDragPlaced;

                if (_hexGamePresenter.CanPlaceDraggedStack == CanPlaceDraggedStack)
                {
                    _hexGamePresenter.CanPlaceDraggedStack = null;
                }
            }
        }

        private bool CanPlaceDraggedStack(int draggableIndex, HexCoord coord)
        {
            if (_isCompleted)
            {
                return true;
            }

            if (draggableIndex != _config.EnabledDraggableIndex)
            {
                return false;
            }

            HexCoord targetCoord = HexMath.FromOffset(_config.TargetCellOffset);
            return coord == targetCoord;
        }

        private void OnDragStarted(int draggableIndex)
        {
            if (_isCompleted || draggableIndex != _config.EnabledDraggableIndex)
            {
                return;
            }

            StopHandPresentation();
        }

        private void OnDragCancelled(int draggableIndex)
        {
            if (_isCompleted || draggableIndex != _config.EnabledDraggableIndex)
            {
                return;
            }

            StartShowHandDelay();
        }

        private void OnDragPlaced(int draggableIndex, HexCoord coord)
        {
            if (_isCompleted || draggableIndex != _config.EnabledDraggableIndex)
            {
                return;
            }

            HexCoord targetCoord = HexMath.FromOffset(_config.TargetCellOffset);

            if (coord != targetCoord)
            {
                StartShowHandDelay();
                return;
            }

            CompleteTutorial();
        }

        private void CompleteTutorial()
        {
            _isCompleted = true;
            StopHandPresentation();
            EnableAllDraggables();
            _hexGamePresenter.CanPlaceDraggedStack = null;
            enabled = false;
        }

        private void EnableAllDraggables()
        {
            for (int i = 0; i < 3; i++)
            {
                _hexGamePresenter.SetDraggableEnabled(i, true);
            }
        }

        private void StartShowHandDelay()
        {
            if (_showHandDelayRoutine != null)
            {
                StopCoroutine(_showHandDelayRoutine);
            }

            _showHandDelayRoutine = StartCoroutine(ShowHandAfterDelay());
        }

        private IEnumerator ShowHandAfterDelay()
        {
            yield return new WaitForSeconds(_config.HandShowDelay);
            _showHandDelayRoutine = null;

            if (_handRoutine != null)
            {
                StopCoroutine(_handRoutine);
            }

            _handRoutine = StartCoroutine(AnimateHandLoop());
        }

        private IEnumerator AnimateHandLoop()
        {
            while (!_isCompleted)
            {
                Option<Vector3> draggableWorld = _hexGamePresenter.GetDraggableWorldPosition(_config.EnabledDraggableIndex);

                if (!draggableWorld.IsSome)
                {
                    yield return null;
                    continue;
                }

                Vector3 targetWorld = _hexGamePresenter.GetGridCellWorldPosition(_config.TargetCellOffset);
                Vector2 start = WorldToCanvasPosition(draggableWorld.Value);
                Vector2 end = WorldToCanvasPosition(targetWorld);
                _hand.anchoredPosition = start;
                _hand.gameObject.SetActive(true);

                float elapsed = 0f;

                while (elapsed < _config.HandMoveDuration)
                {
                    elapsed += Time.deltaTime;
                    float progress = Mathf.Clamp01(elapsed / _config.HandMoveDuration);
                    _hand.anchoredPosition = Vector2.LerpUnclamped(start, end, progress);
                    yield return null;
                }

                _hand.anchoredPosition = end;
                yield return new WaitForSeconds(_config.HandLoopDelay);
            }
        }

        private Vector2 WorldToCanvasPosition(Vector3 worldPosition)
        {
            RectTransform canvasRect = (RectTransform)_canvas.transform;
            Vector3 screenPoint = _worldCamera.WorldToScreenPoint(worldPosition);
            Camera eventCamera = _canvas.renderMode == RenderMode.ScreenSpaceOverlay ? null : _worldCamera;
            RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, screenPoint, eventCamera, out Vector2 localPoint);
            return localPoint;
        }

        private void StopHandPresentation()
        {
            if (_showHandDelayRoutine != null)
            {
                StopCoroutine(_showHandDelayRoutine);
                _showHandDelayRoutine = null;
            }

            if (_handRoutine != null)
            {
                StopCoroutine(_handRoutine);
                _handRoutine = null;
            }

            _hand.gameObject.SetActive(false);
        }
    }
}
