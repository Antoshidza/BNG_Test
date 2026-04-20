using System.Collections;
using System.Collections.Generic;
using System;
using UnityEngine;
using Tweens;
using Source.Pooling;

#if UNITY_EDITOR
using UnityEditor;
#endif

namespace Source.Game.HexMerge
{
    public sealed class HexGamePresenter : MonoBehaviour
    {
        private static readonly int BaseColorId = Shader.PropertyToID("_BaseColor");

        [Header("References")]
        [SerializeField] private HexColorPaletteConfig _hexColorPaletteConfig;
        [SerializeField] private HexGame _hexGame;
        [SerializeField] private Camera _camera;
        [SerializeField] private GameObject _cellPrefab;
        [SerializeField] private HexTileView _tilePrefab;
        [SerializeField] private TileCollapseVfxView _collapseVfxPrefab;
        [SerializeField] private HexDraggableStackSequenceConfig _draggableStackSequenceConfig;
        [SerializeField] private HexGameFinishedView _hexGameFinishedView;

        [Header("Layout")]
        [Min(0.01f)]
        [SerializeField] private float _hexSize = 1f;

        [Min(0f)]
        [SerializeField] private float _stackHeightStep = 0.25f;

        [Min(0f)]
        [SerializeField] private float _tileBaseHeight = 0.37f;

        [Header("Merge Animation")]
        [Min(0.01f)]
        [SerializeField] private float _mergeDuration = 0.25f;

        [Min(0f)]
        [SerializeField] private float _mergeTileStartDelay = 0.04f;

        [Min(0f)]
        [SerializeField] private float _mergeArcHeight = 0.9f;

        [Min(0f)]
        [SerializeField] private float _mergeArcDistanceFactor = 0.35f;

        [Header("Collapse Animation")]
        [Min(0.01f)]
        [SerializeField] private float _collapseDuration = 0.2f;

        [Min(0f)]
        [SerializeField] private float _collapseTileStartDelay = 0.03f;

        [Min(0f)]
        [SerializeField] private float _collapseVfxLeadTime = 0.08f;

        [Header("Draggable Tiles")]
        [SerializeField] private Transform[] _draggableSpawnSpots;
        [SerializeField] private GameObject _dragCellMarker;

        [Min(0f)]
        [SerializeField] private float _draggablePickRadius = 1f;

        [Min(0.01f)]
        [SerializeField] private float _draggableSnapDuration = 0.18f;

        [Min(0f)]
        [SerializeField] private float _dragLiftHeight = 0.35f;

        [Header("Audio")]
        [SerializeField] private AudioSource _tileAudioSource;
        [SerializeField] private AudioCue _mergeAudio;
        [SerializeField] private AudioCue _collapseAudio;

#if UNITY_EDITOR
        [Header("Debug")]
        [SerializeField] private bool _showCellCoords = true;
        [SerializeField] private float _coordLabelHeight = 0.1f;
#endif

        private readonly Dictionary<HexCoord, List<HexTileView>> _tilesByCoord = new Dictionary<HexCoord, List<HexTileView>>();
        private readonly Queue<AnimationEvent> _animationQueue = new Queue<AnimationEvent>();

        private Material[] _tileMaterialsByColor;
        private MonoPool<HexTileView> _tilePool;
        private MonoPool<TileCollapseVfxView> _collapseVfxPool;
        private Transform _boardRoot;
        private Coroutine _animationQueueRoutine;
        private int _activeMergeTweens;
        private int _nextDraggableStackIndex;
        private DraggableStackRuntime _draggedStack;
        private Vector3 _dragOffset;
        private float _dragBaseY;
        private float _animationSpeedModifier = 1f;
        private readonly List<DraggableStackRuntime> _draggableStacks = new List<DraggableStackRuntime>();
        private readonly DraggableStackRuntime[] _draggableStacksBySlot = new DraggableStackRuntime[3];
        private readonly bool[] _draggableEnabledBySlot = { true, true, true };

        public Func<int, HexCoord, bool> CanPlaceDraggedStack { get; set; }

        public event Action<int> DragStarted;
        public event Action<int> DragCancelled;
        public event Action<int, HexCoord> DragPlaced;

        private void Start()
        {
            BuildTileMaterials();
            BuildTilePool();
            BuildCollapseVfxPool();
            CenterCamera(_hexGame.BoardModel);
            ReplaceBoardRoot();
            SpawnBoard(_hexGame.BoardModel);
            SubscribeToBoard();
            SpawnInitialDraggableStacks();
            _dragCellMarker.SetActive(false);
        }

        private void Update()
        {
            HandleDragging();
        }

        public void SetDraggableEnabled(int draggableIndex, bool isEnabled)
        {
            if (draggableIndex < 0 || draggableIndex >= _draggableEnabledBySlot.Length)
            {
                return;
            }

            _draggableEnabledBySlot[draggableIndex] = isEnabled;
            DraggableStackRuntime stack = GetDraggableStackByIndex(draggableIndex);

            if (stack != null)
            {
                stack.IsEnabled = isEnabled;
            }
        }

        public bool TryGetDraggableWorldPosition(int draggableIndex, out Vector3 worldPosition)
        {
            DraggableStackRuntime stack = GetDraggableStackByIndex(draggableIndex);

            if (stack == null)
            {
                worldPosition = default;
                return false;
            }

            worldPosition = stack.Root.position;
            return true;
        }

        public Vector3 GetGridCellWorldPosition(Vector2Int offsetCoord) => 
            GetCellWorldPosition(HexMath.FromOffset(offsetCoord));

        private void SpawnBoard(HexBoardModel boardModel)
        {
            var layout = new HexLayout(_hexSize, transform.position);
            _tilesByCoord.Clear();

            for (int y = 0; y < boardModel.Height; y++)
            {
                for (int x = 0; x < boardModel.Width; x++)
                {
                    var coord = HexMath.FromOffset(x, y);
                    var cell = boardModel[coord];
                    var tiles = new List<HexTileView>(cell.Count);
                    _tilesByCoord[coord] = tiles;

                    // spawn cell basement
                    Instantiate(_cellPrefab, layout.HexToWorld(coord), Quaternion.identity, _boardRoot)
                        .name = $"Hex Cell {coord} [{x},{y}]";

                    for (int tileIndex = 0; tileIndex < cell.Count; tileIndex++)
                    {
                        var worldPosition = layout.HexToWorld(coord, _tileBaseHeight + tileIndex * _stackHeightStep);
                        var tileInstance = GetTileFromPool(worldPosition, Quaternion.identity);
                        ApplyTileColor(tileInstance, cell.Tiles[tileIndex].Color);
                        tiles.Add(tileInstance);
                        
                        #if UNITY_EDITOR
                        tileInstance.name = $"Hex Tile {coord} [{tileIndex}]";
                        #endif
                    }
                }
            }
        }

        private void CenterCamera(HexBoardModel boardModel)
        {
            if (!_camera) 
                return;

            var layout = new HexLayout(_hexSize, transform.position);
            var bottomCoord = HexMath.FromOffset(0, 0);
            var topCoord = HexMath.FromOffset(boardModel.Width - 1, boardModel.Height - 1);
            var bottomWorld = layout.HexToWorld(bottomCoord);
            var topWorld = layout.HexToWorld(topCoord);

            var cameraPosition = _camera.transform.position;
            cameraPosition.z = (bottomWorld.z + topWorld.z) * 0.5f;
            _camera.transform.position = cameraPosition;
        }

        private void ApplyTileColor(HexTileView tileInstance, in HexColor colorId) => 
            tileInstance.Renderer.sharedMaterial = _tileMaterialsByColor[(int)colorId];

        private void BuildTileMaterials()
        {
            var baseMaterial = _tilePrefab.Renderer.sharedMaterial;

            var colors = _hexColorPaletteConfig.Colors;
            _tileMaterialsByColor = new Material[colors.Length];

            for (int i = 0; i < colors.Length; i++)
            {
                var material = new Material(baseMaterial) { name = $"{baseMaterial.name}_{(HexColor)i}" };
                material.SetColor(BaseColorId, colors[i]);
                _tileMaterialsByColor[i] = material;
            }
        }

        private void BuildTilePool()
        {
            _tilePool = new MonoPool<HexTileView>(_tilePrefab);
        }

        private void BuildCollapseVfxPool()
        {
            _collapseVfxPool = new MonoPool<TileCollapseVfxView>(_collapseVfxPrefab);
        }

        private void OnDestroy()
        {
            if (_hexGame != null && _hexGame.BoardModel != null)
            {
                _hexGame.BoardModel.TileAdded -= OnBoardTileAdded;
                _hexGame.BoardModel.Merged -= OnBoardMerged;
                _hexGame.BoardModel.Collapsed -= OnBoardCollapsed;
            }

            if (_hexGame != null)
            {
                _hexGame.GameFinished -= OnGameFinished;
            }

            if (_animationQueueRoutine != null)
                StopCoroutine(_animationQueueRoutine);

            if (_boardRoot != null)
            {
                ClearBoardRoot();
            }

            if (_tileMaterialsByColor == null)
            {
                return;
            }

            for (int i = 0; i < _tileMaterialsByColor.Length; i++)
            {
                var material = _tileMaterialsByColor[i];

                if (Application.isPlaying)
                    Destroy(material);
                else
                    DestroyImmediate(material);
            }

            _tileMaterialsByColor = null;
        }

        private void SubscribeToBoard()
        {
            if (_hexGame == null || _hexGame.BoardModel == null)
            {
                return;
            }

            _hexGame.BoardModel.TileAdded -= OnBoardTileAdded;
            _hexGame.BoardModel.Merged -= OnBoardMerged;
            _hexGame.BoardModel.Collapsed -= OnBoardCollapsed;
            _hexGame.BoardModel.TileAdded += OnBoardTileAdded;
            _hexGame.BoardModel.Merged += OnBoardMerged;
            _hexGame.BoardModel.Collapsed += OnBoardCollapsed;
            _hexGame.GameFinished -= OnGameFinished;
            _hexGame.GameFinished += OnGameFinished;
        }

        private void OnGameFinished(EGameFinish _)
        {
            Luna.Unity.LifeCycle.GameEnded();
            _hexGameFinishedView.Activate();
            _hexGameFinishedView.Clicked += () => Luna.Unity.Playable.InstallFullGame();
        }

        private void ReplaceBoardRoot()
        {
            if (_boardRoot != null)
            {
                ReleaseAllTiles();
                if (Application.isPlaying)
                    Destroy(_boardRoot.gameObject);
                else
                    DestroyImmediate(_boardRoot.gameObject);
            }

            var boardRoot = new GameObject("BoardView");
            boardRoot.transform.SetParent(transform, false);
            _boardRoot = boardRoot.transform;
        }

        private void ClearBoardRoot()
        {
            if (_boardRoot == null)
            {
                return;
            }

            for (int i = _boardRoot.childCount - 1; i >= 0; i--)
            {
                var child = _boardRoot.GetChild(i).gameObject;

                if (Application.isPlaying)
                    Destroy(child);
                else
                    DestroyImmediate(child);
            }
        }

        private void OnBoardTileAdded(HexTileAdded added)
        {
            _animationQueue.Enqueue(AnimationEvent.CreateTileAdded(added));
            TryStartAnimationQueue();
        }

        private void OnBoardMerged(HexMergePlan plan)
        {
            _animationQueue.Enqueue(AnimationEvent.CreateMerged(plan));
            TryStartAnimationQueue();
        }

        private void OnBoardCollapsed(HexCollapsed collapse)
        {
            _animationQueue.Enqueue(AnimationEvent.CreateCollapsed(collapse));
            TryStartAnimationQueue();
        }

        private void HandleDragging()
        {
            if (Input.GetMouseButtonDown(0))
            {
                TryBeginDrag();
            }

            if (_draggedStack == null)
            {
                return;
            }

            if (Input.GetMouseButton(0))
            {
                UpdateDraggedStackPosition();
            }

            if (Input.GetMouseButtonUp(0))
            {
                EndDrag();
            }
        }

        private void TryBeginDrag()
        {
            if (_animationQueueRoutine != null || _activeMergeTweens > 0)
            {
                return;
            }

            if (!TryGetPointerWorldPoint(_tileBaseHeight, out Vector3 pointerWorld))
            {
                return;
            }

            float bestDistanceSqr = _draggablePickRadius * _draggablePickRadius;
            DraggableStackRuntime bestStack = null;

            for (int i = 0; i < _draggableStacks.Count; i++)
            {
                DraggableStackRuntime stack = _draggableStacks[i];

                if (stack.IsAnimating || !stack.IsEnabled)
                {
                    continue;
                }

                Vector3 stackPosition = stack.Root.position;
                float distanceSqr = new Vector2(stackPosition.x - pointerWorld.x, stackPosition.z - pointerWorld.z).sqrMagnitude;

                if (distanceSqr > bestDistanceSqr)
                {
                    continue;
                }

                bestDistanceSqr = distanceSqr;
                bestStack = stack;
            }

            if (bestStack == null)
            {
                return;
            }

            _draggedStack = bestStack;
            _dragOffset = bestStack.Root.position - pointerWorld;
            _dragOffset.y = 0f;
            _dragBaseY = bestStack.Root.position.y;
            Vector3 liftedPosition = bestStack.Root.position;
            liftedPosition.y = _dragBaseY + _dragLiftHeight;
            bestStack.Root.position = liftedPosition;
            DragStarted?.Invoke(bestStack.SlotIndex);
        }

        private void UpdateDraggedStackPosition()
        {
            if (!TryGetPointerWorldPoint(_draggedStack.Root.position.y, out Vector3 pointerWorld))
            {
                _dragCellMarker.SetActive(false);
                return;
            }

            Vector3 targetPosition = pointerWorld + _dragOffset;
            targetPosition.y = _dragBaseY + _dragLiftHeight;
            _draggedStack.Root.position = targetPosition;

            UpdateDragCellMarker(targetPosition);
        }

        private void EndDrag()
        {
            DraggableStackRuntime draggedStack = _draggedStack;
            _draggedStack = null;
            _dragCellMarker.SetActive(false);

            if (TryGetDropCoord(draggedStack.Root.position, out HexCoord coord))
            {
                if (CanPlaceDraggedStack != null && !CanPlaceDraggedStack.Invoke(draggedStack.SlotIndex, coord))
                {
                    DragCancelled?.Invoke(draggedStack.SlotIndex);
                    ReturnDraggedStackToSpawn(draggedStack);
                    return;
                }

                PlaceDraggedStack(draggedStack, coord);
                return;
            }

            DragCancelled?.Invoke(draggedStack.SlotIndex);
            ReturnDraggedStackToSpawn(draggedStack);
        }

        private void TryStartAnimationQueue()
        {
            if (_animationQueueRoutine != null || !isActiveAndEnabled)
            {
                return;
            }

            _animationQueueRoutine = StartCoroutine(ProcessAnimationQueue());
        }

        private IEnumerator ProcessAnimationQueue()
        {
            // Allow all model events emitted in the current frame to be enqueued
            // before we batch contiguous merge events.
            yield return null;

            while (_animationQueue.Count > 0)
            {
                AnimationEvent animationEvent = _animationQueue.Dequeue();

                if (animationEvent.Kind == AnimationEventKind.TileAdded)
                {
                    ApplyTileAdded(animationEvent.TileAdded);
                    continue;
                }

                if (animationEvent.Kind == AnimationEventKind.Merged)
                {
                    var mergeBatch = new List<HexMergePlan> { animationEvent.Merge };

                    while (_animationQueue.Count > 0 && _animationQueue.Peek().Kind == AnimationEventKind.Merged)
                    {
                        mergeBatch.Add(_animationQueue.Dequeue().Merge);
                    }

                    StartMergeBatchAnimation(mergeBatch);

                    while (_activeMergeTweens > 0)
                    {
                        yield return null;
                    }
                }
                else
                {
                    var collapseBatch = new List<HexCollapsed> { animationEvent.Collapse };

                    while (_animationQueue.Count > 0 && _animationQueue.Peek().Kind == AnimationEventKind.Collapsed)
                    {
                        collapseBatch.Add(_animationQueue.Dequeue().Collapse);
                    }

                    yield return AnimateCollapseBatch(collapseBatch);
                    _animationSpeedModifier += 0.3f * collapseBatch.Count;
                }
            }

            _animationQueueRoutine = null;
        }

        private void ApplyTileAdded(HexTileAdded added)
        {
            if (!_tilesByCoord.TryGetValue(added.Coord, out var tiles))
            {
                tiles = new List<HexTileView>();
                _tilesByCoord[added.Coord] = tiles;
            }

            int index = Mathf.Clamp(added.Index, 0, tiles.Count);
            var tileInstance = GetTileFromPool(GetTileWorldPosition(added.Coord, index), Quaternion.identity);
            ApplyTileColor(tileInstance, added.Tile.Color);
            tiles.Insert(index, tileInstance);
            RepositionCellTiles(added.Coord, tiles);
        }

        private void SpawnInitialDraggableStacks()
        {
            int slotCount = Mathf.Min(_draggableStacksBySlot.Length, _draggableSpawnSpots.Length);

            for (int slotIndex = 0; slotIndex < slotCount; slotIndex++)
            {
                TrySpawnNextDraggableStack(slotIndex);
            }
        }

        private void TrySpawnNextDraggableStack(int slotIndex)
        {
            HexDraggableStackSetup[] stackSetups = _draggableStackSequenceConfig.Stacks;

            if (_nextDraggableStackIndex >= stackSetups.Length)
            {
                return;
            }

            Transform spawnSpot = _draggableSpawnSpots[slotIndex];
            HexDraggableStackSetup stackSetup = stackSetups[_nextDraggableStackIndex++];
            DraggableStackRuntime stackRuntime = CreateDraggableStackRuntime(stackSetup, slotIndex, spawnSpot.position);
            stackRuntime.IsEnabled = _draggableEnabledBySlot[slotIndex];
            _draggableStacks.Add(stackRuntime);
            _draggableStacksBySlot[slotIndex] = stackRuntime;
        }

        private DraggableStackRuntime CreateDraggableStackRuntime(HexDraggableStackSetup stackSetup, int slotIndex, Vector3 position)
        {
            GameObject stackRoot = new GameObject($"DraggableStack_{slotIndex}_{_nextDraggableStackIndex - 1}");
            Transform stackTransform = stackRoot.transform;
            stackTransform.SetParent(transform, false);
            stackTransform.position = position;

            List<HexTileView> tiles = new List<HexTileView>();
            HexDraggableTileGroupSetup[] groups = stackSetup.Groups;
            int tileIndex = 0;

            for (int groupIndex = 0; groupIndex < groups.Length; groupIndex++)
            {
                HexDraggableTileGroupSetup group = groups[groupIndex];

                for (int i = 0; i < group.Amount; i++)
                {
                    HexTileView tile = GetTileFromPool(position, Quaternion.identity);
                    ApplyTileColor(tile, group.Color);
                    tile.transform.SetParent(stackTransform, false);
                    tile.transform.localPosition = new Vector3(0f, tileIndex * _stackHeightStep, 0f);
                    tile.transform.localRotation = Quaternion.identity;
                    tile.transform.localScale = Vector3.one;
                    tiles.Add(tile);
                    tileIndex++;
                }
            }

            return new DraggableStackRuntime(stackSetup, slotIndex, position, stackTransform, tiles);
        }

        private bool TryGetPointerWorldPoint(float planeY, out Vector3 pointerWorld)
        {
            Ray pointerRay = _camera.ScreenPointToRay(Input.mousePosition);
            Plane plane = new Plane(Vector3.up, new Vector3(0f, planeY, 0f));

            if (!plane.Raycast(pointerRay, out float enter))
            {
                pointerWorld = default;
                return false;
            }

            pointerWorld = pointerRay.GetPoint(enter);
            return true;
        }

        private bool TryGetDropCoord(Vector3 stackPosition, out HexCoord coord)
        {
            HexLayout layout = new HexLayout(_hexSize, transform.position);
            coord = layout.WorldToHex(stackPosition);

            if (!_hexGame.BoardModel.Exist(coord))
            {
                return false;
            }

            return _hexGame.BoardModel[coord].IsEmpty;
        }

        private void UpdateDragCellMarker(Vector3 stackPosition)
        {
            if (!TryGetDropCoord(stackPosition, out HexCoord coord))
            {
                _dragCellMarker.SetActive(false);
                return;
            }

            _dragCellMarker.SetActive(true);
            _dragCellMarker.transform.position = GetCellWorldPosition(coord);
        }

        private void PlaceDraggedStack(DraggableStackRuntime stack, HexCoord coord)
        {
            stack.IsAnimating = true;

            if (_draggableStacksBySlot[stack.SlotIndex] == stack)
            {
                _draggableStacksBySlot[stack.SlotIndex] = null;
                TrySpawnNextDraggableStack(stack.SlotIndex);
            }

            Vector3 startPosition = stack.Root.position;
            Vector3 destination = GetDraggableStackWorldPosition(coord);

            stack.Root.gameObject.AddTween(new FloatTween
            {
                from = 0f,
                to = 1f,
                duration = _draggableSnapDuration,
                easeType = EaseType.SineInOut,
                onUpdate = (_, progress) =>
                {
                    stack.Root.position = Vector3.LerpUnclamped(startPosition, destination, progress);
                },
                onFinally = _ =>
                {
                    stack.Root.position = destination;
                    DragPlaced?.Invoke(stack.SlotIndex, coord);
                    ReleaseDraggableStack(stack);
                    _hexGame.PlaceDraggableStack(coord, stack.Setup);
                }
            });
        }

        private void ReturnDraggedStackToSpawn(DraggableStackRuntime stack)
        {
            stack.IsAnimating = true;
            Vector3 startPosition = stack.Root.position;
            Vector3 destination = stack.HomePosition;

            stack.Root.gameObject.AddTween(new FloatTween
            {
                from = 0f,
                to = 1f,
                duration = _draggableSnapDuration,
                easeType = EaseType.SineInOut,
                onUpdate = (_, progress) =>
                {
                    stack.Root.position = Vector3.LerpUnclamped(startPosition, destination, progress);
                },
                onFinally = _ =>
                {
                    stack.Root.position = destination;
                    stack.IsAnimating = false;
                }
            });
        }

        private Vector3 GetDraggableStackWorldPosition(HexCoord coord)
        {
            HexLayout layout = new HexLayout(_hexSize, transform.position);
            return layout.HexToWorld(coord, _tileBaseHeight);
        }

        private Vector3 GetCellWorldPosition(HexCoord coord)
        {
            HexLayout layout = new HexLayout(_hexSize, transform.position);
            return layout.HexToWorld(coord);
        }

        private void StartMergeBatchAnimation(List<HexMergePlan> mergeBatch)
        {
            for (int batchIndex = 0; batchIndex < mergeBatch.Count; batchIndex++)
            {
                StartMergeAnimation(mergeBatch[batchIndex], batchIndex * _mergeTileStartDelay);
            }
        }

        private void StartMergeAnimation(HexMergePlan plan, float batchDelay)
        {
            if (!_tilesByCoord.TryGetValue(plan.From, out var fromTiles))
            {
                return;
            }

            fromTiles.RemoveAll(tile => tile == null);

            if (fromTiles.Count == 0)
            {
                return;
            }

            if (!_tilesByCoord.TryGetValue(plan.To, out var toTiles))
            {
                toTiles = new List<HexTileView>();
                _tilesByCoord[plan.To] = toTiles;
            }

            toTiles.RemoveAll(tile => tile == null);

            var movingTiles = new List<HexTileView> { fromTiles[^1] };
            fromTiles.RemoveAt(fromTiles.Count - 1);
            toTiles.AddRange(movingTiles);
            float mergeDuration = GetAdjustedDuration(_mergeDuration);

            for (int i = 0; i < movingTiles.Count; i++)
            {
                HexTileView tile = movingTiles[i];
                Vector3 start = tile.transform.position;
                Vector3 destination = GetTileWorldPosition(plan.To, toTiles.Count + i);
                float delay = batchDelay + (i * _mergeTileStartDelay);
                Quaternion startRotation = tile.transform.rotation;
                Vector3 mergeDirection = (destination - start);
                mergeDirection.y = 0f;
                Vector3 flipAxis = mergeDirection.sqrMagnitude > 0.0001f
                    ? Vector3.Cross(Vector3.up, mergeDirection.normalized)
                    : Vector3.right;
                _activeMergeTweens++;

                tile.gameObject.AddTween(new FloatTween
                {
                    from = 0f,
                    to = 1f,
                    duration = mergeDuration,
                    delay = delay,
                    easeType = EaseType.SineInOut,
                    onStart = _ =>
                    {
                        PlayTileAudio(_mergeAudio);
                    },
                    onUpdate = (_, progress) =>
                    {
                        tile.transform.position = EvaluateArc(start, destination, progress);
                        float flipAngle = progress * 180f;
                        tile.transform.rotation = Quaternion.AngleAxis(flipAngle, flipAxis) * startRotation;
                    },
                    onFinally = _ =>
                    {
                        tile.transform.position = destination;
                        tile.transform.rotation = Quaternion.AngleAxis(180f, flipAxis) * startRotation;
                        _activeMergeTweens--;
                    }
                });
            }
        }

        private IEnumerator AnimateCollapseBatch(List<HexCollapsed> collapseBatch)
        {
            List<CollapseAnimation> animations = new List<CollapseAnimation>(collapseBatch.Count);
            List<CollapseVfxRequest> collapseVfxRequests = new List<CollapseVfxRequest>(collapseBatch.Count);
            float collapseDuration = GetAdjustedDuration(_collapseDuration);

            for (int batchIndex = 0; batchIndex < collapseBatch.Count; batchIndex++)
            {
                HexCollapsed collapse = collapseBatch[batchIndex];

                if (!_tilesByCoord.TryGetValue(collapse.Coord, out var tiles))
                {
                    continue;
                }

                tiles.RemoveAll(tile => tile == null);

                int startIndex = Mathf.Clamp(collapse.StartIndex, 0, tiles.Count);
                int count = Mathf.Min(collapse.Count, tiles.Count - startIndex);

                if (count <= 0)
                {
                    continue;
                }

                List<HexTileView> collapseTiles = tiles.GetRange(startIndex, count);
                animations.Add(new CollapseAnimation(collapse.Coord, startIndex, count, collapse.Color, collapseTiles));
                Vector3 lastCollapseFxPosition = default;
                float lastCollapseFxTime = -1f;

                for (int i = 0; i < collapseTiles.Count; i++)
                {
                    int topToBottomIndex = collapseTiles.Count - 1 - i;
                    HexTileView tile = collapseTiles[topToBottomIndex];
                    float finishTime = (i * _collapseTileStartDelay) + collapseDuration;

                    if (finishTime >= lastCollapseFxTime)
                    {
                        lastCollapseFxTime = finishTime;
                        lastCollapseFxPosition = tile.transform.position;
                    }
                }

                float vfxDelay = Mathf.Max(0f, lastCollapseFxTime - _collapseVfxLeadTime);
                collapseVfxRequests.Add(new CollapseVfxRequest(lastCollapseFxPosition, _hexColorPaletteConfig.GetColor(collapse.Color), vfxDelay));
            }

            for (int i = 0; i < collapseVfxRequests.Count; i++)
            {
                StartCoroutine(PlayCollapseVfx(collapseVfxRequests[i]));
            }

            int completedTweens = 0;
            int totalTweens = 0;

            for (int animationIndex = 0; animationIndex < animations.Count; animationIndex++)
            {
                CollapseAnimation animation = animations[animationIndex];

                for (int i = 0; i < animation.Tiles.Count; i++)
                {
                    int topToBottomIndex = animation.Tiles.Count - 1 - i;
                    HexTileView tile = animation.Tiles[topToBottomIndex];
                    float delay = i * _collapseTileStartDelay;
                    totalTweens++;

                    tile.gameObject.AddTween(new LocalScaleTween
                    {
                        to = Vector3.zero,
                        duration = collapseDuration,
                        delay = delay,
                        easeType = EaseType.SineInOut,
                        onStart = _ =>
                        {
                            PlayTileAudio(_collapseAudio);
                        },
                        onFinally = _ =>
                        {
                            if (tile != null)
                            {
                                ReleaseTile(tile);
                            }
                            completedTweens++;
                        }
                    });
                }
            }

            while (completedTweens < totalTweens)
            {
                yield return null;
            }

            Dictionary<HexCoord, List<CollapseAnimation>> removalsByCoord = new Dictionary<HexCoord, List<CollapseAnimation>>();

            for (int i = 0; i < animations.Count; i++)
            {
                CollapseAnimation animation = animations[i];

                if (!removalsByCoord.TryGetValue(animation.Coord, out List<CollapseAnimation> removals))
                {
                    removals = new List<CollapseAnimation>();
                    removalsByCoord[animation.Coord] = removals;
                }

                removals.Add(animation);
            }

            foreach (KeyValuePair<HexCoord, List<CollapseAnimation>> pair in removalsByCoord)
            {
                List<HexTileView> tiles = _tilesByCoord[pair.Key];
                pair.Value.Sort((left, right) => right.StartIndex.CompareTo(left.StartIndex));

                for (int i = 0; i < pair.Value.Count; i++)
                {
                    CollapseAnimation animation = pair.Value[i];
                    tiles.RemoveRange(animation.StartIndex, animation.Count);
                }

                RepositionCellTiles(pair.Key, tiles);
            }
        }

        private void RepositionCellTiles(HexCoord coord, List<HexTileView> tiles)
        {
            for (int i = 0; i < tiles.Count; i++)
            {
                HexTileView tile = tiles[i];

                if (tile == null)
                {
                    continue;
                }

                tile.transform.position = GetTileWorldPosition(coord, i);
                tile.transform.localScale = Vector3.one;
            }
        }

        private Vector3 GetTileWorldPosition(HexCoord coord, int tileIndex)
        {
            var layout = new HexLayout(_hexSize, transform.position);
            return layout.HexToWorld(coord, _tileBaseHeight + tileIndex * _stackHeightStep);
        }

        private HexTileView GetTileFromPool(Vector3 position, Quaternion rotation)
        {
            HexTileView tile = _tilePool.Get();
            Transform tileTransform = tile.transform;
            tileTransform.SetParent(_boardRoot, false);
            tileTransform.SetPositionAndRotation(position, rotation);
            tileTransform.localScale = Vector3.one;
            return tile;
        }

        private void ReleaseTile(HexTileView tile)
        {
            tile.transform.SetParent(transform, false);
            tile.transform.localScale = Vector3.one;
            _tilePool.Release(tile);
        }

        private void ReleaseDraggableStack(DraggableStackRuntime stack)
        {
            for (int i = 0; i < stack.Tiles.Count; i++)
            {
                ReleaseTile(stack.Tiles[i]);
            }

            _draggableStacks.Remove(stack);

            if (_draggableStacksBySlot[stack.SlotIndex] == stack)
            {
                _draggableStacksBySlot[stack.SlotIndex] = null;
            }

            if (Application.isPlaying)
                Destroy(stack.Root.gameObject);
            else
                DestroyImmediate(stack.Root.gameObject);
        }

        private IEnumerator PlayCollapseVfx(CollapseVfxRequest collapseVfxRequest)
        {
            yield return new WaitForSeconds(collapseVfxRequest.Delay);

            TileCollapseVfxView collapseVfx = _collapseVfxPool.Get();
            Transform collapseVfxTransform = collapseVfx.transform;
            collapseVfxTransform.SetParent(transform, false);
            collapseVfxTransform.position = collapseVfxRequest.Position + new Vector3(0f, 0.1f, 0f);

            void OnViewCompleted(TileCollapseVfxView view)
            {
                view.Completed -= OnViewCompleted;
                view.transform.SetParent(transform, false);
                _collapseVfxPool.Release(view);
            }

            collapseVfx.Completed += OnViewCompleted;
            collapseVfx.Play(collapseVfxRequest.Color);
        }

        private void ReleaseAllTiles()
        {
            foreach (KeyValuePair<HexCoord, List<HexTileView>> pair in _tilesByCoord)
            {
                List<HexTileView> tiles = pair.Value;

                for (int i = 0; i < tiles.Count; i++)
                {
                    HexTileView tile = tiles[i];

                    if (tile != null)
                    {
                        ReleaseTile(tile);
                    }
                }
            }

            _tilesByCoord.Clear();
        }

        private void ReleaseAllDraggableStacks()
        {
            for (int i = _draggableStacks.Count - 1; i >= 0; i--)
            {
                ReleaseDraggableStack(_draggableStacks[i]);
            }

            for (int i = 0; i < _draggableStacksBySlot.Length; i++)
            {
                _draggableStacksBySlot[i] = null;
            }
        }

        private DraggableStackRuntime GetDraggableStackByIndex(int draggableIndex)
        {
            if (draggableIndex < 0 || draggableIndex >= _draggableStacksBySlot.Length)
            {
                return null;
            }

            return _draggableStacksBySlot[draggableIndex];
        }

        private Vector3 EvaluateArc(Vector3 start, Vector3 destination, float progress)
        {
            Vector3 control = (start + destination) * 0.5f;
            float horizontalDistance = Vector2.Distance(new Vector2(start.x, start.z), new Vector2(destination.x, destination.z));
            control.y = Mathf.Max(start.y, destination.y) + _mergeArcHeight + (horizontalDistance * _mergeArcDistanceFactor);

            float oneMinusT = 1f - progress;
            return (oneMinusT * oneMinusT * start) +
                   (2f * oneMinusT * progress * control) +
                   (progress * progress * destination);
        }

        private void PlayTileAudio(AudioCue audioCue)
        {
            _tileAudioSource.pitch = audioCue.Pitch;
            _tileAudioSource.PlayOneShot(audioCue.Clip);
        }

        private float GetAdjustedDuration(float baseDuration) => 
            baseDuration / _animationSpeedModifier;

        private enum AnimationEventKind
        {
            TileAdded,
            Merged,
            Collapsed
        }

        private readonly struct AnimationEvent
        {
            private AnimationEvent(AnimationEventKind kind, HexTileAdded tileAdded, HexMergePlan merge, HexCollapsed collapse)
            {
                Kind = kind;
                TileAdded = tileAdded;
                Merge = merge;
                Collapse = collapse;
            }

            public AnimationEventKind Kind { get; }

            public HexTileAdded TileAdded { get; }

            public HexMergePlan Merge { get; }

            public HexCollapsed Collapse { get; }

            public static AnimationEvent CreateTileAdded(HexTileAdded tileAdded)
            {
                return new AnimationEvent(AnimationEventKind.TileAdded, tileAdded, default, default);
            }

            public static AnimationEvent CreateMerged(HexMergePlan merge)
            {
                return new AnimationEvent(AnimationEventKind.Merged, default, merge, default);
            }

            public static AnimationEvent CreateCollapsed(HexCollapsed collapse)
            {
                return new AnimationEvent(AnimationEventKind.Collapsed, default, default, collapse);
            }
        }

        private readonly struct CollapseAnimation
        {
            public CollapseAnimation(HexCoord coord, int startIndex, int count, HexColor color, List<HexTileView> tiles)
            {
                Coord = coord;
                StartIndex = startIndex;
                Count = count;
                Color = color;
                Tiles = tiles;
            }

            public HexCoord Coord { get; }

            public int StartIndex { get; }

            public int Count { get; }

            public HexColor Color { get; }

            public List<HexTileView> Tiles { get; }
        }

        private sealed class DraggableStackRuntime
        {
            public DraggableStackRuntime(HexDraggableStackSetup setup, int slotIndex, Vector3 homePosition, Transform root, List<HexTileView> tiles)
            {
                Setup = setup;
                SlotIndex = slotIndex;
                HomePosition = homePosition;
                Root = root;
                Tiles = tiles;
            }

            public HexDraggableStackSetup Setup { get; }

            public int SlotIndex { get; }

            public Vector3 HomePosition { get; }

            public Transform Root { get; }

            public List<HexTileView> Tiles { get; }

            public bool IsAnimating { get; set; }

            public bool IsEnabled { get; set; } = true;
        }

        private readonly struct CollapseVfxRequest
        {
            public CollapseVfxRequest(Vector3 position, Color color, float delay)
            {
                Position = position;
                Color = color;
                Delay = delay;
            }

            public Vector3 Position { get; }

            public Color Color { get; }

            public float Delay { get; }
        }

        [System.Serializable]
        private struct AudioCue
        {
            [field: SerializeField] public AudioClip Clip { get; private set; }
            [field: SerializeField] public float Pitch { get; private set; }
        }

#if UNITY_EDITOR
        private void OnDrawGizmos()
        {
            if (!_showCellCoords || !_hexGame)
                return;

            var boardModel = _hexGame.BoardModel;

            if (boardModel == null)
                return;

            var layout = new HexLayout(_hexSize, transform.position);

            for (int y = 0; y < boardModel.Height; y++)
                for (int x = 0; x < boardModel.Width; x++) 
                    Handles.Label(layout.HexToWorld(HexMath.FromOffset(x, y), _coordLabelHeight), $"({x},{y})");
        }
#endif
    }
}
