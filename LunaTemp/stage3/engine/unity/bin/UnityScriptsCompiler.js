if ( TRACE ) { TRACE( JSON.parse( '["HexBoardModel#init","HexBoardModel#CollectCellCollapses","HexBoardModel#init","HexBoardModel#ctor","HexBoardModel#getItem","HexBoardModel#Exist","HexBoardModel#GetTopTile","HexBoardModel#GetNeighborCoord","HexBoardModel#BeginBatchUpdate","HexBoardModel#EndBatchUpdate","HexBoardModel#AddTile","HexBoardModel#AddTiles","HexBoardModel#RemoveTopTile","HexBoardModel#ProcessPendingMerges","HexBoardModel#ProcessMergePhase","HexBoardModel#ApplyMerge","HexBoardModel#CollectCollapses","HexBoardModel#ApplyCollapsePhase","HexBoardModel#EnqueueForMerge","HexBoardModel#TryProcessPendingMerges","HexBoardModel#GetCellOrThrow","HexBoardModel#NotifyCellChanged","HexBoardSetupConfig#Width#get","HexBoardSetupConfig#Height#get","HexBoardSetupConfig#Cells#get","HexBoardSetupConfig#init","HexCellChanged#getDefaultValue","HexCellChanged#init","HexCellChanged#$ctor1","HexCellChanged#ctor","HexCellChanged#getHashCode","HexCellChanged#equals","HexCellChanged#$clone","HexCellModel#Count#get","HexCellModel#IsEmpty#get","HexCellModel#Tiles#get","HexCellModel#init","HexCellModel#PeekTop","HexCellModel#PeekTopColor","HexCellModel#Push","HexCellModel#Pop","HexCellModel#PopOption","HexCellModel#RemoveRange","HexCellStackSetup#getDefaultValue","HexCellStackSetup#Position#get","HexCellStackSetup#Color#get","HexCellStackSetup#Amount#get","HexCellStackSetup#init","HexCellStackSetup#ctor","HexCellStackSetup#getHashCode","HexCellStackSetup#equals","HexCellStackSetup#$clone","HexCollapsed#getDefaultValue","HexCollapsed#init","HexCollapsed#$ctor1","HexCollapsed#ctor","HexCollapsed#getHashCode","HexCollapsed#equals","HexCollapsed#$clone","HexColorPaletteConfig#Colors#get","HexColorPaletteConfig#GetColor","HexCoord#inherits","HexCoord#op_Addition","HexCoord#op_Subtraction","HexCoord#op_Multiply","HexCoord#op_Equality","HexCoord#op_Inequality","HexCoord#getDefaultValue","HexCoord#S#get","HexCoord#$ctor1","HexCoord#ctor","HexCoord#equalsT","HexCoord#equals","HexCoord#getHashCode","HexCoord#toString","HexCoord#$clone","HexDraggableStackSequenceConfig#Stacks#get","HexDraggableStackSequenceConfig#Count#get","HexDraggableStackSetup#getDefaultValue","HexDraggableStackSetup#Groups#get","HexDraggableStackSetup#ctor","HexDraggableStackSetup#getHashCode","HexDraggableStackSetup#equals","HexDraggableStackSetup#$clone","HexDraggableTileGroupSetup#getDefaultValue","HexDraggableTileGroupSetup#ctor","HexDraggableTileGroupSetup#getHashCode","HexDraggableTileGroupSetup#equals","HexDraggableTileGroupSetup#$clone","HexDragTutorialConfig#init","HexGame#BuildTileAdditions","HexGame#Awake","HexGame#Start","HexGame#CreateBoardModel","HexGame#PlaceDraggableStack","HexGame#RestartGameState","HexGame#OnBoardCollapsed","HexGame#EvaluateFinishState","HexGame#IsBoardEmpty","HexGame#Finish","HexGrid$1#ctor","HexGrid$1#getItem","HexGrid$1#getItem$1","HexGrid$1#Set$1","HexGrid$1#Set","HexGrid$1#Contains","HexGrid$1#ContainsIndex","HexGrid$1#GetIndex","HexGrid$1#GetIndexOption","HexGrid$1#CoordAt","HexGrid$1#GetOption","HexGrid$1#TrySet","HexGrid$1#GetNeighborCoord","HexGrid$1#Clear","HexGrid$1#Fill","HexGrid$1#EnumerateCoords","HexGrid$1#GetEnumerator","HexGrid$1#System$Collections$Generic$IEnumerable$1$GetEnumerator","HexGrid$1#System$Collections$IEnumerable$GetEnumerator","HexGrid$1.CoordEnumerator#getDefaultValue","HexGrid$1.CoordEnumerator#Current#get","HexGrid$1.CoordEnumerator#$ctor1","HexGrid$1.CoordEnumerator#ctor","HexGrid$1.CoordEnumerator#MoveNext","HexGrid$1.CoordEnumerator#getHashCode","HexGrid$1.CoordEnumerator#equals","HexGrid$1.CoordEnumerator#$clone","HexGrid$1.Enumerator#getDefaultValue","HexGrid$1.Enumerator#Current#get","HexGrid$1.Enumerator#System$Collections$IEnumerator$Current#get","HexGrid$1.Enumerator#$ctor1","HexGrid$1.Enumerator#ctor","HexGrid$1.Enumerator#moveNext","HexGrid$1.Enumerator#reset","HexGrid$1.Enumerator#Dispose","HexGrid$1.Enumerator#getHashCode","HexGrid$1.Enumerator#equals","HexGrid$1.Enumerator#$clone","HexLayout#init","HexLayout#getDefaultValue","HexLayout#init","HexLayout#$ctor1","HexLayout#ctor","HexLayout#HexToWorld","HexLayout#WorldToHex","HexLayout#getHashCode","HexLayout#equals","HexLayout#$clone","HexMath#init","HexMath#Neighbor","HexMath#Distance","HexMath#ToOffset","HexMath#FromOffset","HexMath#FromOffset$1","HexMath#RoundAxial","HexMath#FillRange","HexMath#FillRing","HexMath#RoundToInt","HexMath#Abs","HexMergePlan#getDefaultValue","HexMergePlan#init","HexMergePlan#$ctor1","HexMergePlan#ctor","HexMergePlan#getHashCode","HexMergePlan#equals","HexMergePlan#$clone","HexMergeResolver#init","HexMergeResolver#Resolve","HexMergeResolver#BuildLine","HexMergeResolver#CollectDirection","HexMergeResolver#SortLineInMergeOrder","HexMergeResolver#SortLines","HexMergeResolver#GetWorldX","HexMergeResolver.AxisDefinition#getDefaultValue","HexMergeResolver.AxisDefinition#$ctor1","HexMergeResolver.AxisDefinition#ctor","HexMergeResolver.AxisDefinition#getHashCode","HexMergeResolver.AxisDefinition#equals","HexMergeResolver.AxisDefinition#$clone","HexTile#inherits","HexTile#op_Equality","HexTile#op_Inequality","HexTile#getDefaultValue","HexTile#$ctor1","HexTile#ctor","HexTile#equalsT","HexTile#equals","HexTile#getHashCode","HexTile#toString","HexTile#$clone","HexTileAdded#getDefaultValue","HexTileAdded#init","HexTileAdded#$ctor1","HexTileAdded#ctor","HexTileAdded#getHashCode","HexTileAdded#equals","HexTileAdded#$clone","HexTileAddition#getDefaultValue","HexTileAddition#init","HexTileAddition#$ctor1","HexTileAddition#ctor","HexTileAddition#getHashCode","HexTileAddition#equals","HexTileAddition#$clone","Source.Game.HexMerge.HexDragTutorialController#Start","Source.Game.HexMerge.HexDragTutorialController#OnDestroy","Source.Game.HexMerge.HexDragTutorialController#CanPlaceDraggedStack","Source.Game.HexMerge.HexDragTutorialController#OnDragStarted","Source.Game.HexMerge.HexDragTutorialController#OnDragCancelled","Source.Game.HexMerge.HexDragTutorialController#OnDragPlaced","Source.Game.HexMerge.HexDragTutorialController#CompleteTutorial","Source.Game.HexMerge.HexDragTutorialController#EnableAllDraggables","Source.Game.HexMerge.HexDragTutorialController#StartShowHandDelay","Source.Game.HexMerge.HexDragTutorialController#ShowHandAfterDelay","Source.Game.HexMerge.HexDragTutorialController#AnimateHandLoop","Source.Game.HexMerge.HexDragTutorialController#WorldToCanvasPosition","Source.Game.HexMerge.HexDragTutorialController#StopHandPresentation","Source.Game.HexMerge.HexGameFinishedView#init","Source.Game.HexMerge.HexGameFinishedView#Awake","Source.Game.HexMerge.HexGameFinishedView#OnDestroy","Source.Game.HexMerge.HexGameFinishedView#Activate","Source.Game.HexMerge.HexGameFinishedView#OnButtonClicked","Source.Game.HexMerge.HexGamePresenter#init","Source.Game.HexMerge.HexGamePresenter#init","Source.Game.HexMerge.HexGamePresenter#Start","Source.Game.HexMerge.HexGamePresenter#Update","Source.Game.HexMerge.HexGamePresenter#SetDraggableEnabled","Source.Game.HexMerge.HexGamePresenter#GetDraggableWorldPosition","Source.Game.HexMerge.HexGamePresenter#GetGridCellWorldPosition","Source.Game.HexMerge.HexGamePresenter#SpawnBoard","Source.Game.HexMerge.HexGamePresenter#CenterCamera","Source.Game.HexMerge.HexGamePresenter#ApplyTileColor","Source.Game.HexMerge.HexGamePresenter#BuildTileMaterials","Source.Game.HexMerge.HexGamePresenter#BuildTilePool","Source.Game.HexMerge.HexGamePresenter#BuildCollapseVfxPool","Source.Game.HexMerge.HexGamePresenter#OnDestroy","Source.Game.HexMerge.HexGamePresenter#SubscribeToBoard","Source.Game.HexMerge.HexGamePresenter#OnGameFinished","Source.Game.HexMerge.HexGamePresenter#ReplaceBoardRoot","Source.Game.HexMerge.HexGamePresenter#ClearBoardRoot","Source.Game.HexMerge.HexGamePresenter#OnBoardTileAdded","Source.Game.HexMerge.HexGamePresenter#OnBoardMerged","Source.Game.HexMerge.HexGamePresenter#OnBoardCollapsed","Source.Game.HexMerge.HexGamePresenter#HandleDragging","Source.Game.HexMerge.HexGamePresenter#TryBeginDrag","Source.Game.HexMerge.HexGamePresenter#UpdateDraggedStackPosition","Source.Game.HexMerge.HexGamePresenter#EndDrag","Source.Game.HexMerge.HexGamePresenter#TryStartAnimationQueue","Source.Game.HexMerge.HexGamePresenter#ProcessAnimationQueue","Source.Game.HexMerge.HexGamePresenter#ApplyTileAdded","Source.Game.HexMerge.HexGamePresenter#SpawnInitialDraggableStacks","Source.Game.HexMerge.HexGamePresenter#TrySpawnNextDraggableStack","Source.Game.HexMerge.HexGamePresenter#CreateDraggableStackRuntime","Source.Game.HexMerge.HexGamePresenter#GetPointerWorldPoint","Source.Game.HexMerge.HexGamePresenter#GetDropCoord","Source.Game.HexMerge.HexGamePresenter#UpdateDragCellMarker","Source.Game.HexMerge.HexGamePresenter#PlaceDraggedStack","Source.Game.HexMerge.HexGamePresenter#ReturnDraggedStackToSpawn","Source.Game.HexMerge.HexGamePresenter#GetDraggableStackWorldPosition","Source.Game.HexMerge.HexGamePresenter#GetCellWorldPosition","Source.Game.HexMerge.HexGamePresenter#StartMergeBatchAnimation","Source.Game.HexMerge.HexGamePresenter#StartMergeAnimation","Source.Game.HexMerge.HexGamePresenter#AnimateCollapseBatch","Source.Game.HexMerge.HexGamePresenter#RepositionCellTiles","Source.Game.HexMerge.HexGamePresenter#GetTileWorldPosition","Source.Game.HexMerge.HexGamePresenter#GetTileFromPool","Source.Game.HexMerge.HexGamePresenter#ReleaseTile","Source.Game.HexMerge.HexGamePresenter#ReleaseDraggableStack","Source.Game.HexMerge.HexGamePresenter#PlayCollapseVfx","Source.Game.HexMerge.HexGamePresenter#ReleaseAllTiles","Source.Game.HexMerge.HexGamePresenter#ReleaseAllDraggableStacks","Source.Game.HexMerge.HexGamePresenter#GetDraggableStackByIndex","Source.Game.HexMerge.HexGamePresenter#EvaluateArc","Source.Game.HexMerge.HexGamePresenter#PlayTileAudio","Source.Game.HexMerge.HexGamePresenter#GetAdjustedDuration","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#CreateTileAdded","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#CreateMerged","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#CreateCollapsed","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#getDefaultValue","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#init","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#$ctor1","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#ctor","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#getHashCode","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#equals","Source.Game.HexMerge.HexGamePresenter.AnimationEvent#$clone","Source.Game.HexMerge.HexGamePresenter.AudioCue#getDefaultValue","Source.Game.HexMerge.HexGamePresenter.AudioCue#ctor","Source.Game.HexMerge.HexGamePresenter.AudioCue#getHashCode","Source.Game.HexMerge.HexGamePresenter.AudioCue#equals","Source.Game.HexMerge.HexGamePresenter.AudioCue#$clone","Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#getDefaultValue","Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#init","Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#$ctor1","Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#ctor","Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#getHashCode","Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#equals","Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#$clone","Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#getDefaultValue","Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#init","Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#$ctor1","Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#ctor","Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#getHashCode","Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#equals","Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#$clone","Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime#init","Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime#ctor","Source.Game.HexMerge.TileCollapseVfxView#ParticleSystemSetColor","Source.Game.HexMerge.TileCollapseVfxView#Play","Source.Game.HexMerge.TileCollapseVfxView#Update","Source.Optional.Option$1#None#get","Source.Optional.Option$1#Some","Source.Optional.Option$1#getDefaultValue","Source.Optional.Option$1#init","Source.Optional.Option$1#ctor","Source.Optional.Option$1#getHashCode","Source.Optional.Option$1#equals","Source.Optional.Option$1#$clone","Source.Pooling.MonoPool$1#$ctor1","Source.Pooling.MonoPool$1#ctor","Source.Pooling.MonoPool$1#Get","Source.Pooling.MonoPool$1#Release","Tweens.Core.Tween#init","Tweens.Core.EaseFunctions#init","Tweens.Core.EaseFunctions#GetFunction","Tweens.Core.EaseFunctions#Linear","Tweens.Core.EaseFunctions#SineIn","Tweens.Core.EaseFunctions#SineOut","Tweens.Core.EaseFunctions#SineInOut","Tweens.Core.EaseFunctions#QuadIn","Tweens.Core.EaseFunctions#QuadOut","Tweens.Core.EaseFunctions#QuadInOut","Tweens.Core.EaseFunctions#CubicIn","Tweens.Core.EaseFunctions#CubicOut","Tweens.Core.EaseFunctions#CubicInOut","Tweens.Core.EaseFunctions#QuartIn","Tweens.Core.EaseFunctions#QuartOut","Tweens.Core.EaseFunctions#QuartInOut","Tweens.Core.EaseFunctions#QuintIn","Tweens.Core.EaseFunctions#QuintOut","Tweens.Core.EaseFunctions#QuintInOut","Tweens.Core.EaseFunctions#ExpoIn","Tweens.Core.EaseFunctions#ExpoOut","Tweens.Core.EaseFunctions#ExpoInOut","Tweens.Core.EaseFunctions#CircIn","Tweens.Core.EaseFunctions#CircOut","Tweens.Core.EaseFunctions#CircInOut","Tweens.Core.EaseFunctions#BackIn","Tweens.Core.EaseFunctions#BackOut","Tweens.Core.EaseFunctions#BackInOut","Tweens.Core.EaseFunctions#ElasticIn","Tweens.Core.EaseFunctions#ElasticOut","Tweens.Core.EaseFunctions#ElasticInOut","Tweens.Core.EaseFunctions#BounceIn","Tweens.Core.EaseFunctions#BounceOut","Tweens.Core.EaseFunctions#BounceInOut","Tweens.Core.Nullable$1#op_Implicit","Tweens.Core.Nullable$1#op_Implicit$1","Tweens.Core.Nullable$1#init","Tweens.Core.Nullable$1#ctor","Tweens.Core.Nullable$1#$ctor1","Tweens.Core.Nullable$1#$ctor2","Tweens.Core.Nullable$1#Unset","Tweens.Core.TweenEngine#init","Tweens.Core.TweenEngine#Initialize","Tweens.Core.TweenEngine#Update","Tweens.Core.TweenEngine.TweenBehaviour#LateUpdate","Tweens.Core.TweenEngine.TweenBehaviour#OnDestroy","Tweens.TweenExtension#AddTween$2","Tweens.TweenExtension#AddTween","Tweens.TweenExtension#AddTween$1","Tweens.TweenExtension#CancelTweens","Tweens.TweenInstance#init","Tweens.TweenInstance#ctor","Tweens.TweenInstance$2#init","Tweens.TweenInstance$2#ctor","Tweens.TweenInstance$2#Update","Tweens.TweenInstance$2#Cancel","Tweens.TweenInstance$2#AwaitDecommission","Tweens.AnchoredPositionTween#Current","Tweens.AnchoredPositionTween#Lerp","Tweens.AnchoredPositionTween#Apply","Tweens.AnchoredPositionXTween#Current","Tweens.AnchoredPositionXTween#Lerp","Tweens.AnchoredPositionXTween#Apply","Tweens.AnchoredPositionYTween#Current","Tweens.AnchoredPositionYTween#Lerp","Tweens.AnchoredPositionYTween#Apply","Tweens.AnchorMaxTween#Current","Tweens.AnchorMaxTween#Lerp","Tweens.AnchorMaxTween#Apply","Tweens.AnchorMinTween#Current","Tweens.AnchorMinTween#Lerp","Tweens.AnchorMinTween#Apply","Tweens.ColorTween#Current","Tweens.ColorTween#Lerp","Tweens.ColorTween#Apply","Tweens.EulerAnglesTween#Current","Tweens.EulerAnglesTween#Lerp","Tweens.EulerAnglesTween#Apply","Tweens.EulerAnglesXTween#Current","Tweens.EulerAnglesXTween#Lerp","Tweens.EulerAnglesXTween#Apply","Tweens.EulerAnglesYTween#Current","Tweens.EulerAnglesYTween#Lerp","Tweens.EulerAnglesYTween#Apply","Tweens.EulerAnglesZTween#Current","Tweens.EulerAnglesZTween#Lerp","Tweens.EulerAnglesZTween#Apply","Tweens.FloatTween#Current","Tweens.FloatTween#Lerp","Tweens.FloatTween#Apply","Tweens.LightColorTween#Current","Tweens.LightColorTween#Lerp","Tweens.LightColorTween#Apply","Tweens.LightIntensityTween#Current","Tweens.LightIntensityTween#Lerp","Tweens.LightIntensityTween#Apply","Tweens.LightRangeTween#Current","Tweens.LightRangeTween#Lerp","Tweens.LightRangeTween#Apply","Tweens.LightSpotAngleTween#Current","Tweens.LightSpotAngleTween#Lerp","Tweens.LightSpotAngleTween#Apply","Tweens.LocalEulerAnglesTween#Current","Tweens.LocalEulerAnglesTween#Lerp","Tweens.LocalEulerAnglesTween#Apply","Tweens.LocalEulerAnglesXTween#Current","Tweens.LocalEulerAnglesXTween#Lerp","Tweens.LocalEulerAnglesXTween#Apply","Tweens.LocalEulerAnglesYTween#Current","Tweens.LocalEulerAnglesYTween#Lerp","Tweens.LocalEulerAnglesYTween#Apply","Tweens.LocalEulerAnglesZTween#Current","Tweens.LocalEulerAnglesZTween#Lerp","Tweens.LocalEulerAnglesZTween#Apply","Tweens.LocalPositionTween#Current","Tweens.LocalPositionTween#Lerp","Tweens.LocalPositionTween#Apply","Tweens.LocalPositionXTween#Current","Tweens.LocalPositionXTween#Lerp","Tweens.LocalPositionXTween#Apply","Tweens.LocalPositionYTween#Current","Tweens.LocalPositionYTween#Lerp","Tweens.LocalPositionYTween#Apply","Tweens.LocalPositionZTween#Current","Tweens.LocalPositionZTween#Lerp","Tweens.LocalPositionZTween#Apply","Tweens.LocalRotationTween#Current","Tweens.LocalRotationTween#Lerp","Tweens.LocalRotationTween#Apply","Tweens.LocalScaleTween#Current","Tweens.LocalScaleTween#Lerp","Tweens.LocalScaleTween#Apply","Tweens.LocalScaleXTween#Current","Tweens.LocalScaleXTween#Lerp","Tweens.LocalScaleXTween#Apply","Tweens.LocalScaleYTween#Current","Tweens.LocalScaleYTween#Lerp","Tweens.LocalScaleYTween#Apply","Tweens.LocalScaleZTween#Current","Tweens.LocalScaleZTween#Lerp","Tweens.LocalScaleZTween#Apply","Tweens.PositionTween#Current","Tweens.PositionTween#Lerp","Tweens.PositionTween#Apply","Tweens.PositionXTween#Current","Tweens.PositionXTween#Lerp","Tweens.PositionXTween#Apply","Tweens.PositionYTween#Current","Tweens.PositionYTween#Lerp","Tweens.PositionYTween#Apply","Tweens.PositionZTween#Current","Tweens.PositionZTween#Lerp","Tweens.PositionZTween#Apply","Tweens.QuaternionTween#Current","Tweens.QuaternionTween#Lerp","Tweens.QuaternionTween#Apply","Tweens.RectTween#Current","Tweens.RectTween#Lerp","Tweens.RectTween#Apply","Tweens.RotationTween#Current","Tweens.RotationTween#Lerp","Tweens.RotationTween#Apply","Tweens.SpriteRendererAlphaTween#Current","Tweens.SpriteRendererAlphaTween#Lerp","Tweens.SpriteRendererAlphaTween#Apply","Tweens.SpriteRendererColorTween#Current","Tweens.SpriteRendererColorTween#Lerp","Tweens.SpriteRendererColorTween#Apply","Tweens.Vector2Tween#Current","Tweens.Vector2Tween#Lerp","Tweens.Vector2Tween#Apply","Tweens.Vector3Tween#Current","Tweens.Vector3Tween#Lerp","Tweens.Vector3Tween#Apply","Tweens.Vector4Tween#Current","Tweens.Vector4Tween#Lerp","Tweens.Vector4Tween#Apply"]' ) ); }
/**
 * @version 1.0.9606.29791
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*EGameFinish start.*/
    Bridge.define("EGameFinish", {
        $kind: 6,
        statics: {
            fields: {
                Win: 0,
                Lose: 1
            }
        }
    });
    /*EGameFinish end.*/

    /*HexBoardModel start.*/
    Bridge.define("HexBoardModel", {
        statics: {
            fields: {
                CollapseThreshold: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexBoardModel#init", this ); }

                    this.CollapseThreshold = 10;
                }
            },
            methods: {
                /*HexBoardModel.CollectCellCollapses:static start.*/
                CollectCellCollapses: function (coord, cell, collapses) {
if ( TRACE ) { TRACE( "HexBoardModel#CollectCellCollapses", this ); }

                    if (cell.Count < HexBoardModel.CollapseThreshold) {
                        return;
                    }

                    var cellCollapses = new (System.Collections.Generic.List$1(HexCollapsed)).ctor();
                    var runStart = 0;

                    while (runStart < cell.Count) {
                        var runColor = System.Array.getItem(cell.Tiles, runStart, HexTile).Color;
                        var runEnd = (runStart + 1) | 0;

                        while (runEnd < cell.Count && System.Array.getItem(cell.Tiles, runEnd, HexTile).Color === runColor) {
                            runEnd = (runEnd + 1) | 0;
                        }

                        var runCount = (runEnd - runStart) | 0;

                        if (runCount >= HexBoardModel.CollapseThreshold) {
                            cellCollapses.add(new HexCollapsed.$ctor1(coord, runColor, runStart, runCount));
                        }

                        runStart = runEnd;
                    }

                    for (var i = (cellCollapses.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        collapses.add(cellCollapses.getItem(i));
                    }
                },
                /*HexBoardModel.CollectCellCollapses:static end.*/


            }
        },
        fields: {
            _cells: null,
            _mergeQueue: null,
            _queuedCoords: null,
            _batchDepth: 0,
            _isProcessingMerges: false,
            Width: 0,
            Height: 0
        },
        events: {
            CellChanged: null,
            TileAdded: null,
            Merged: null,
            Collapsed: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexBoardModel#init", this ); }

                this._mergeQueue = new (System.Collections.Generic.Queue$1(HexCoord)).ctor();
                this._queuedCoords = new (System.Collections.Generic.HashSet$1(HexCoord)).ctor();
            },
            ctor: function (width, height) {
if ( TRACE ) { TRACE( "HexBoardModel#ctor", this ); }

                this.$initialize();
                this.Width = width;
                this.Height = height;
                this._cells = new (HexGrid$1(HexCellModel))(width, height);

                var coords = this._cells.EnumerateCoords();

                while (coords.MoveNext()) {
                    this._cells.Set(coords.Current, new HexCellModel());
                }
            }
        },
        methods: {
            getItem: function (coord) {
if ( TRACE ) { TRACE( "HexBoardModel#getItem", this ); }

                return this._cells.getItem$1(coord);
            },
            /*HexBoardModel.Exist start.*/
            Exist: function (coord) {
if ( TRACE ) { TRACE( "HexBoardModel#Exist", this ); }

                var offset = HexMath.ToOffset(coord);
                return offset.x >= 0 && offset.x < this.Width && offset.y >= 0 && offset.y < this.Height;
            },
            /*HexBoardModel.Exist end.*/

            /*HexBoardModel.GetTopTile start.*/
            GetTopTile: function (coord) {
if ( TRACE ) { TRACE( "HexBoardModel#GetTopTile", this ); }

                if (!this._cells.Contains(coord)) {
                    return Source.Optional.Option$1(HexTile).None.$clone();
                }

                return this._cells.getItem$1(coord).PeekTop();
            },
            /*HexBoardModel.GetTopTile end.*/

            /*HexBoardModel.GetNeighborCoord start.*/
            GetNeighborCoord: function (coord, direction) {
if ( TRACE ) { TRACE( "HexBoardModel#GetNeighborCoord", this ); }

                return this._cells.GetNeighborCoord(coord, direction);
            },
            /*HexBoardModel.GetNeighborCoord end.*/

            /*HexBoardModel.BeginBatchUpdate start.*/
            BeginBatchUpdate: function () {
if ( TRACE ) { TRACE( "HexBoardModel#BeginBatchUpdate", this ); }

                this._batchDepth = (this._batchDepth + 1) | 0;
            },
            /*HexBoardModel.BeginBatchUpdate end.*/

            /*HexBoardModel.EndBatchUpdate start.*/
            EndBatchUpdate: function (processMerges) {
if ( TRACE ) { TRACE( "HexBoardModel#EndBatchUpdate", this ); }

                if (processMerges === void 0) { processMerges = false; }
                if (this._batchDepth <= 0) {
                    throw new System.InvalidOperationException.$ctor1("Batch update was not started.");
                }

                this._batchDepth = (this._batchDepth - 1) | 0;

                if (this._batchDepth > 0) {
                    return;
                }

                if (processMerges) {
                    this.ProcessPendingMerges();
                    return;
                }

                this._mergeQueue.Clear();
                this._queuedCoords.clear();
            },
            /*HexBoardModel.EndBatchUpdate end.*/

            /*HexBoardModel.AddTile start.*/
            AddTile: function (coord, tile, amount) {
if ( TRACE ) { TRACE( "HexBoardModel#AddTile", this ); }

                if (amount === void 0) { amount = 1; }
                if (amount <= 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("amount", "Amount must be greater than zero.");
                }

                var cell = this.GetCellOrThrow(coord);

                for (var i = 0; i < amount; i = (i + 1) | 0) {
                    cell.Push(tile);
                    !Bridge.staticEquals(this.TileAdded, null) ? this.TileAdded(new HexTileAdded.$ctor1(coord, tile, ((cell.Count - 1) | 0))) : null;
                }

                this.NotifyCellChanged(coord);
                this.EnqueueForMerge(coord);
                this.TryProcessPendingMerges();
            },
            /*HexBoardModel.AddTile end.*/

            /*HexBoardModel.AddTiles start.*/
            AddTiles: function (additions) {
if ( TRACE ) { TRACE( "HexBoardModel#AddTiles", this ); }

                if (additions === void 0) { additions = []; }
                if (additions == null) {
                    throw new System.ArgumentNullException.$ctor1("additions");
                }

                this.BeginBatchUpdate();

                try {
                    for (var i = 0; i < additions.length; i = (i + 1) | 0) {
                        var addition = additions[i];
                        this.AddTile(addition.Coord, addition.Tile, addition.Amount);
                    }
                } finally {
                    this.EndBatchUpdate(true);
                }
            },
            /*HexBoardModel.AddTiles end.*/

            /*HexBoardModel.RemoveTopTile start.*/
            RemoveTopTile: function (coord) {
if ( TRACE ) { TRACE( "HexBoardModel#RemoveTopTile", this ); }

                if (!this._cells.Contains(coord)) {
                    return Source.Optional.Option$1(HexTile).None.$clone();
                }

                var cell = this._cells.getItem$1(coord);
                var tile = cell.PopOption();

                if (!tile.IsSome) {
                    return Source.Optional.Option$1(HexTile).None.$clone();
                }

                this.NotifyCellChanged(coord);
                this.EnqueueForMerge(coord);
                this.TryProcessPendingMerges();
                return tile.$clone();
            },
            /*HexBoardModel.RemoveTopTile end.*/

            /*HexBoardModel.ProcessPendingMerges start.*/
            ProcessPendingMerges: function () {
if ( TRACE ) { TRACE( "HexBoardModel#ProcessPendingMerges", this ); }

                if (this._isProcessingMerges) {
                    return;
                }

                this._isProcessingMerges = true;

                try {
                    while (true) {
                        this.ProcessMergePhase();

                        var collapses = this.CollectCollapses();

                        if (collapses.Count === 0) {
                            break;
                        }

                        this.ApplyCollapsePhase(collapses);
                    }
                } finally {
                    this._isProcessingMerges = false;
                }
            },
            /*HexBoardModel.ProcessPendingMerges end.*/

            /*HexBoardModel.ProcessMergePhase start.*/
            ProcessMergePhase: function () {
if ( TRACE ) { TRACE( "HexBoardModel#ProcessMergePhase", this ); }

                while (this._mergeQueue.Count > 0) {
                    var pivot = this._mergeQueue.Dequeue();
                    this._queuedCoords.remove(pivot);

                    var plan = HexMergeResolver.Resolve(this, pivot);

                    if (!plan.IsSome) {
                        continue;
                    }

                    this.ApplyMerge(plan.Value);
                }
            },
            /*HexBoardModel.ProcessMergePhase end.*/

            /*HexBoardModel.ApplyMerge start.*/
            ApplyMerge: function (plan) {
if ( TRACE ) { TRACE( "HexBoardModel#ApplyMerge", this ); }

                var fromCell = this.GetCellOrThrow(plan.From);
                var toCell = this.GetCellOrThrow(plan.To);

                var tile = fromCell.PopOption();

                if (!tile.IsSome) {
                    return;
                }

                toCell.Push(tile.Value);

                this.NotifyCellChanged(plan.From);
                this.NotifyCellChanged(plan.To);
                !Bridge.staticEquals(this.Merged, null) ? this.Merged(new HexMergePlan.$ctor1(tile.Value, plan.From, plan.To, plan.Path)) : null;

                this.EnqueueForMerge(plan.From);
                this.EnqueueForMerge(plan.To);
            },
            /*HexBoardModel.ApplyMerge end.*/

            /*HexBoardModel.CollectCollapses start.*/
            CollectCollapses: function () {
if ( TRACE ) { TRACE( "HexBoardModel#CollectCollapses", this ); }

                var collapses = new (System.Collections.Generic.List$1(HexCollapsed)).ctor();
                var coords = this._cells.EnumerateCoords();

                while (coords.MoveNext()) {
                    HexBoardModel.CollectCellCollapses(coords.Current, this._cells.getItem$1(coords.Current), collapses);
                }

                return collapses;
            },
            /*HexBoardModel.CollectCollapses end.*/

            /*HexBoardModel.ApplyCollapsePhase start.*/
            ApplyCollapsePhase: function (collapses) {
if ( TRACE ) { TRACE( "HexBoardModel#ApplyCollapsePhase", this ); }

                var $t;
                var affectedCoords = new (System.Collections.Generic.HashSet$1(HexCoord)).ctor();

                for (var i = 0; i < collapses.Count; i = (i + 1) | 0) {
                    var collapse = collapses.getItem(i);
                    this.GetCellOrThrow(collapse.Coord).RemoveRange(collapse.StartIndex, collapse.Count);
                    affectedCoords.add(collapse.Coord);
                }

                $t = Bridge.getEnumerator(affectedCoords);
                try {
                    while ($t.moveNext()) {
                        var coord = $t.Current;
                        this.NotifyCellChanged(coord);
                        this.EnqueueForMerge(coord);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                for (var i1 = 0; i1 < collapses.Count; i1 = (i1 + 1) | 0) {
                    !Bridge.staticEquals(this.Collapsed, null) ? this.Collapsed(collapses.getItem(i1)) : null;
                }
            },
            /*HexBoardModel.ApplyCollapsePhase end.*/

            /*HexBoardModel.EnqueueForMerge start.*/
            EnqueueForMerge: function (coord) {
if ( TRACE ) { TRACE( "HexBoardModel#EnqueueForMerge", this ); }

                if (this._queuedCoords.add(coord)) {
                    this._mergeQueue.Enqueue(coord);
                }
            },
            /*HexBoardModel.EnqueueForMerge end.*/

            /*HexBoardModel.TryProcessPendingMerges start.*/
            TryProcessPendingMerges: function () {
if ( TRACE ) { TRACE( "HexBoardModel#TryProcessPendingMerges", this ); }

                if (this._batchDepth > 0) {
                    return;
                }

                this.ProcessPendingMerges();
            },
            /*HexBoardModel.TryProcessPendingMerges end.*/

            /*HexBoardModel.GetCellOrThrow start.*/
            GetCellOrThrow: function (coord) {
if ( TRACE ) { TRACE( "HexBoardModel#GetCellOrThrow", this ); }

                if (!this._cells.Contains(coord)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("coord", System.String.format("Coordinate {0} is outside grid bounds.", [coord]));
                }

                return this._cells.getItem$1(coord);
            },
            /*HexBoardModel.GetCellOrThrow end.*/

            /*HexBoardModel.NotifyCellChanged start.*/
            NotifyCellChanged: function (coord) {
if ( TRACE ) { TRACE( "HexBoardModel#NotifyCellChanged", this ); }

                !Bridge.staticEquals(this.CellChanged, null) ? this.CellChanged(new HexCellChanged.$ctor1(coord, this._cells.getItem$1(coord))) : null;
            },
            /*HexBoardModel.NotifyCellChanged end.*/


        }
    });
    /*HexBoardModel end.*/

    /*HexBoardSetupConfig start.*/
    Bridge.define("HexBoardSetupConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            _width: 0,
            _height: 0,
            _cells: null
        },
        props: {
            Width: {
                get: function () {
if ( TRACE ) { TRACE( "HexBoardSetupConfig#Width#get", this ); }

                    return this._width;
                }
            },
            Height: {
                get: function () {
if ( TRACE ) { TRACE( "HexBoardSetupConfig#Height#get", this ); }

                    return this._height;
                }
            },
            Cells: {
                get: function () {
if ( TRACE ) { TRACE( "HexBoardSetupConfig#Cells#get", this ); }

                    return this._cells;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexBoardSetupConfig#init", this ); }

                this._width = 1;
                this._height = 1;
            }
        }
    });
    /*HexBoardSetupConfig end.*/

    /*HexCellChanged start.*/
    Bridge.define("HexCellChanged", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexCellChanged#getDefaultValue", this ); }
 return new HexCellChanged(); }
            }
        },
        fields: {
            Coord: null,
            Cell: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexCellChanged#init", this ); }

                this.Coord = new HexCoord();
            },
            $ctor1: function (coord, cell) {
if ( TRACE ) { TRACE( "HexCellChanged#$ctor1", this ); }

                this.$initialize();
                this.Coord = coord;
                this.Cell = cell;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexCellChanged#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexCellChanged#getHashCode", this ); }

                var h = Bridge.addHash([3998455674, this.Coord, this.Cell]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexCellChanged#equals", this ); }

                if (!Bridge.is(o, HexCellChanged)) {
                    return false;
                }
                return Bridge.equals(this.Coord, o.Coord) && Bridge.equals(this.Cell, o.Cell);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexCellChanged#$clone", this ); }
 return this; }
        }
    });
    /*HexCellChanged end.*/

    /*HexCellModel start.*/
    Bridge.define("HexCellModel", {
        fields: {
            _tiles: null
        },
        props: {
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "HexCellModel#Count#get", this ); }

                    return this._tiles.Count;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "HexCellModel#IsEmpty#get", this ); }

                    return this._tiles.Count === 0;
                }
            },
            Tiles: {
                get: function () {
if ( TRACE ) { TRACE( "HexCellModel#Tiles#get", this ); }

                    return this._tiles;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexCellModel#init", this ); }

                this._tiles = new (System.Collections.Generic.List$1(HexTile)).ctor();
            }
        },
        methods: {
            /*HexCellModel.PeekTop start.*/
            PeekTop: function () {
if ( TRACE ) { TRACE( "HexCellModel#PeekTop", this ); }

                if (this._tiles.Count === 0) {
                    return Source.Optional.Option$1(HexTile).None.$clone();
                }

                return Source.Optional.Option$1(HexTile).Some(this._tiles.getItem(((this._tiles.Count - 1) | 0)));
            },
            /*HexCellModel.PeekTop end.*/

            /*HexCellModel.PeekTopColor start.*/
            PeekTopColor: function () {
if ( TRACE ) { TRACE( "HexCellModel#PeekTopColor", this ); }

                var tile = this.PeekTop();
                return !tile.IsSome ? (function () {
                    throw new System.InvalidOperationException.$ctor1("Cell is empty.");
                })() : tile.Value.Color;
            },
            /*HexCellModel.PeekTopColor end.*/

            /*HexCellModel.Push start.*/
            Push: function (tile) {
if ( TRACE ) { TRACE( "HexCellModel#Push", this ); }

                this._tiles.add(tile);
            },
            /*HexCellModel.Push end.*/

            /*HexCellModel.Pop start.*/
            Pop: function () {
if ( TRACE ) { TRACE( "HexCellModel#Pop", this ); }

                var tile = this.PopOption();
                return !tile.IsSome ? (function () {
                    throw new System.InvalidOperationException.$ctor1("Cell is empty.");
                })() : tile.Value;
            },
            /*HexCellModel.Pop end.*/

            /*HexCellModel.PopOption start.*/
            PopOption: function () {
if ( TRACE ) { TRACE( "HexCellModel#PopOption", this ); }

                var lastIndex = (this._tiles.Count - 1) | 0;

                if (lastIndex < 0) {
                    return Source.Optional.Option$1(HexTile).None.$clone();
                }

                var tile = this._tiles.getItem(lastIndex);
                this._tiles.removeAt(lastIndex);
                return Source.Optional.Option$1(HexTile).Some(tile);
            },
            /*HexCellModel.PopOption end.*/

            /*HexCellModel.RemoveRange start.*/
            RemoveRange: function (index, count) {
if ( TRACE ) { TRACE( "HexCellModel#RemoveRange", this ); }

                this._tiles.RemoveRange(index, count);
            },
            /*HexCellModel.RemoveRange end.*/


        }
    });
    /*HexCellModel end.*/

    /*HexCellStackSetup start.*/
    Bridge.define("HexCellStackSetup", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexCellStackSetup#getDefaultValue", this ); }
 return new HexCellStackSetup(); }
            }
        },
        fields: {
            _position: null,
            _color: 0,
            _amount: 0
        },
        props: {
            Position: {
                get: function () {
if ( TRACE ) { TRACE( "HexCellStackSetup#Position#get", this ); }

                    return this._position.$clone();
                }
            },
            Color: {
                get: function () {
if ( TRACE ) { TRACE( "HexCellStackSetup#Color#get", this ); }

                    return this._color;
                }
            },
            Amount: {
                get: function () {
if ( TRACE ) { TRACE( "HexCellStackSetup#Amount#get", this ); }

                    return this._amount;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexCellStackSetup#init", this ); }

                this._position = new UnityEngine.Vector2Int();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexCellStackSetup#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexCellStackSetup#getHashCode", this ); }

                var h = Bridge.addHash([6303815908, this._position, this._color, this._amount]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexCellStackSetup#equals", this ); }

                if (!Bridge.is(o, HexCellStackSetup)) {
                    return false;
                }
                return Bridge.equals(this._position, o._position) && Bridge.equals(this._color, o._color) && Bridge.equals(this._amount, o._amount);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexCellStackSetup#$clone", this ); }

                var s = to || new HexCellStackSetup();
                s._position = this._position.$clone();
                s._color = this._color;
                s._amount = this._amount;
                return s;
            }
        }
    });
    /*HexCellStackSetup end.*/

    /*HexCollapsed start.*/
    Bridge.define("HexCollapsed", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexCollapsed#getDefaultValue", this ); }
 return new HexCollapsed(); }
            }
        },
        fields: {
            Coord: null,
            Color: 0,
            StartIndex: 0,
            Count: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexCollapsed#init", this ); }

                this.Coord = new HexCoord();
            },
            $ctor1: function (coord, color, startIndex, count) {
if ( TRACE ) { TRACE( "HexCollapsed#$ctor1", this ); }

                this.$initialize();
                this.Coord = coord;
                this.Color = color;
                this.StartIndex = startIndex;
                this.Count = count;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexCollapsed#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexCollapsed#getHashCode", this ); }

                var h = Bridge.addHash([4450829607, this.Coord, this.Color, this.StartIndex, this.Count]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexCollapsed#equals", this ); }

                if (!Bridge.is(o, HexCollapsed)) {
                    return false;
                }
                return Bridge.equals(this.Coord, o.Coord) && Bridge.equals(this.Color, o.Color) && Bridge.equals(this.StartIndex, o.StartIndex) && Bridge.equals(this.Count, o.Count);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexCollapsed#$clone", this ); }
 return this; }
        }
    });
    /*HexCollapsed end.*/

    /*HexColor start.*/
    Bridge.define("HexColor", {
        $kind: 6,
        statics: {
            fields: {
                Red: 0,
                Green: 1,
                Blue: 2,
                Yellow: 3,
                Cyan: 4,
                Magenta: 5,
                Black: 6,
                White: 7
            }
        }
    });
    /*HexColor end.*/

    /*HexColorPaletteConfig start.*/
    Bridge.define("HexColorPaletteConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            _colors: null
        },
        props: {
            Colors: {
                get: function () {
if ( TRACE ) { TRACE( "HexColorPaletteConfig#Colors#get", this ); }

                    return this._colors;
                }
            }
        },
        methods: {
            /*HexColorPaletteConfig.GetColor start.*/
            GetColor: function (color) {
if ( TRACE ) { TRACE( "HexColorPaletteConfig#GetColor", this ); }

                var index = color;

                if (index < 0 || index >= this._colors.length) {
                    throw new System.IndexOutOfRangeException.$ctor1(System.String.format("Color {0} is not configured in the palette.", [Bridge.box(color, HexColor, System.Enum.toStringFn(HexColor))]));
                }

                return this._colors[index].$clone();
            },
            /*HexColorPaletteConfig.GetColor end.*/


        }
    });
    /*HexColorPaletteConfig end.*/

    /*HexCoord start.*/
    Bridge.define("HexCoord", {
        inherits: function () {
if ( TRACE ) { TRACE( "HexCoord#inherits", this ); }
 return [System.IEquatable$1(HexCoord)]; },
        $kind: 4,
        statics: {
            methods: {
                op_Addition: function (left, right) {
if ( TRACE ) { TRACE( "HexCoord#op_Addition", this ); }

                    return new HexCoord.$ctor1(((left.Q + right.Q) | 0), ((left.R + right.R) | 0));
                },
                op_Subtraction: function (left, right) {
if ( TRACE ) { TRACE( "HexCoord#op_Subtraction", this ); }

                    return new HexCoord.$ctor1(((left.Q - right.Q) | 0), ((left.R - right.R) | 0));
                },
                op_Multiply: function (coord, scale) {
if ( TRACE ) { TRACE( "HexCoord#op_Multiply", this ); }

                    return new HexCoord.$ctor1(Bridge.Int.mul(coord.Q, scale), Bridge.Int.mul(coord.R, scale));
                },
                op_Equality: function (left, right) {
if ( TRACE ) { TRACE( "HexCoord#op_Equality", this ); }

                    return left.equalsT(right);
                },
                op_Inequality: function (left, right) {
if ( TRACE ) { TRACE( "HexCoord#op_Inequality", this ); }

                    return !left.equalsT(right);
                },
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexCoord#getDefaultValue", this ); }
 return new HexCoord(); }
            }
        },
        fields: {
            Q: 0,
            R: 0
        },
        props: {
            S: {
                get: function () {
if ( TRACE ) { TRACE( "HexCoord#S#get", this ); }

                    return ((((-this.Q) | 0) - this.R) | 0);
                }
            }
        },
        alias: ["equalsT", "System$IEquatable$1$HexCoord$equalsT"],
        ctors: {
            $ctor1: function (q, r) {
if ( TRACE ) { TRACE( "HexCoord#$ctor1", this ); }

                this.$initialize();
                this.Q = q;
                this.R = r;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexCoord#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*HexCoord.equalsT start.*/
            equalsT: function (other) {
if ( TRACE ) { TRACE( "HexCoord#equalsT", this ); }

                return this.Q === other.Q && this.R === other.R;
            },
            /*HexCoord.equalsT end.*/

            /*HexCoord.equals start.*/
            equals: function (obj) {
if ( TRACE ) { TRACE( "HexCoord#equals", this ); }

                var other = new HexCoord();
                return System.Nullable.liftne(HexCoord.op_Inequality, ((other = Bridge.is(obj, HexCoord) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, HexCoord), HexCoord)) : null)), null) && this.equalsT(other);
            },
            /*HexCoord.equals end.*/

            /*HexCoord.getHashCode start.*/
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexCoord#getHashCode", this ); }

                return (Bridge.Int.mul(this.Q, 397)) ^ this.R;
            },
            /*HexCoord.getHashCode end.*/

            /*HexCoord.toString start.*/
            toString: function () {
if ( TRACE ) { TRACE( "HexCoord#toString", this ); }

                return System.String.format("({0}, {1}, {2})", Bridge.box(this.Q, System.Int32), Bridge.box(this.R, System.Int32), Bridge.box(this.S, System.Int32));
            },
            /*HexCoord.toString end.*/

            $clone: function (to) {
if ( TRACE ) { TRACE( "HexCoord#$clone", this ); }
 return this; }
        },
        overloads: {
            "Equals(HexCoord)": "equalsT",
            "Equals(object)": "equals",
            "GetHashCode()": "getHashCode",
            "ToString()": "toString"
        }
    });
    /*HexCoord end.*/

    /*HexDirection start.*/
    Bridge.define("HexDirection", {
        $kind: 6,
        statics: {
            fields: {
                Right: 0,
                TopRight: 1,
                TopLeft: 2,
                Left: 3,
                BottomLeft: 4,
                BottomRight: 5
            }
        }
    });
    /*HexDirection end.*/

    /*HexDraggableStackSequenceConfig start.*/
    Bridge.define("HexDraggableStackSequenceConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            _stacks: null
        },
        props: {
            Stacks: {
                get: function () {
if ( TRACE ) { TRACE( "HexDraggableStackSequenceConfig#Stacks#get", this ); }

                    return this._stacks;
                }
            },
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "HexDraggableStackSequenceConfig#Count#get", this ); }

                    return this._stacks.length;
                }
            }
        }
    });
    /*HexDraggableStackSequenceConfig end.*/

    /*HexDraggableStackSetup start.*/
    Bridge.define("HexDraggableStackSetup", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexDraggableStackSetup#getDefaultValue", this ); }
 return new HexDraggableStackSetup(); }
            }
        },
        fields: {
            _groups: null
        },
        props: {
            Groups: {
                get: function () {
if ( TRACE ) { TRACE( "HexDraggableStackSetup#Groups#get", this ); }

                    return this._groups;
                }
            }
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "HexDraggableStackSetup#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexDraggableStackSetup#getHashCode", this ); }

                var h = Bridge.addHash([8205328718, this._groups]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexDraggableStackSetup#equals", this ); }

                if (!Bridge.is(o, HexDraggableStackSetup)) {
                    return false;
                }
                return Bridge.equals(this._groups, o._groups);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexDraggableStackSetup#$clone", this ); }

                var s = to || new HexDraggableStackSetup();
                s._groups = this._groups;
                return s;
            }
        }
    });
    /*HexDraggableStackSetup end.*/

    /*HexDraggableTileGroupSetup start.*/
    Bridge.define("HexDraggableTileGroupSetup", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexDraggableTileGroupSetup#getDefaultValue", this ); }
 return new HexDraggableTileGroupSetup(); }
            }
        },
        fields: {
            Color: 0,
            Amount: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "HexDraggableTileGroupSetup#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexDraggableTileGroupSetup#getHashCode", this ); }

                var h = Bridge.addHash([10209839259, this.Color, this.Amount]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexDraggableTileGroupSetup#equals", this ); }

                if (!Bridge.is(o, HexDraggableTileGroupSetup)) {
                    return false;
                }
                return Bridge.equals(this.Color, o.Color) && Bridge.equals(this.Amount, o.Amount);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexDraggableTileGroupSetup#$clone", this ); }

                var s = to || new HexDraggableTileGroupSetup();
                s.Color = this.Color;
                s.Amount = this.Amount;
                return s;
            }
        }
    });
    /*HexDraggableTileGroupSetup end.*/

    /*HexDragTutorialConfig start.*/
    Bridge.define("HexDragTutorialConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            EnabledDraggableIndex: 0,
            TargetCellOffset: null,
            HandShowDelay: 0,
            HandMoveDuration: 0,
            HandLoopDelay: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexDragTutorialConfig#init", this ); }

                this.TargetCellOffset = new UnityEngine.Vector2Int();
            }
        }
    });
    /*HexDragTutorialConfig end.*/

    /*HexGame start.*/
    Bridge.define("HexGame", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*HexGame.BuildTileAdditions:static start.*/
                BuildTileAdditions: function (coord, stackSetup) {
if ( TRACE ) { TRACE( "HexGame#BuildTileAdditions", this ); }

                    var groups = stackSetup.Groups;
                    var additions = System.Array.init(groups.length, function (){
                        return new HexTileAddition();
                    }, HexTileAddition);

                    for (var i = 0; i < groups.length; i = (i + 1) | 0) {
                        additions[i] = new HexTileAddition.$ctor1(coord, new HexTile.$ctor1(groups[i].Color), groups[i].Amount);
                    }

                    return additions;
                },
                /*HexGame.BuildTileAdditions:static end.*/


            }
        },
        fields: {
            _boardSetup: null,
            _draggableStackSequenceConfig: null,
            _usedDraggableStackCount: 0,
            _isFinished: false,
            BoardModel: null
        },
        events: {
            GameFinished: null
        },
        methods: {
            /*HexGame.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexGame#Awake", this ); }

                this.CreateBoardModel();
            },
            /*HexGame.Awake end.*/

            /*HexGame.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HexGame#Start", this ); }

                this.RestartGameState();
            },
            /*HexGame.Start end.*/

            /*HexGame.CreateBoardModel start.*/
            CreateBoardModel: function () {
if ( TRACE ) { TRACE( "HexGame#CreateBoardModel", this ); }

                if (this.BoardModel != null) {
                    this.BoardModel.removeCollapsed(Bridge.fn.cacheBind(this, this.OnBoardCollapsed));
                }

                if (!UnityEngine.Object.op_Implicit(this._boardSetup)) {
                    UnityEngine.Debug.LogError$2("Hex board setup config is not assigned.", this);
                    this.BoardModel = null;
                    return;
                }

                var boardModel = new HexBoardModel(this._boardSetup.Width, this._boardSetup.Height);
                boardModel.BeginBatchUpdate();

                var cells = this._boardSetup.Cells;

                for (var i = 0; i < cells.length; i = (i + 1) | 0) {
                    var cellSetup = cells[i].$clone();

                    if (cellSetup.Amount <= 0) {
                        UnityEngine.Debug.LogWarning$1(System.String.format("Skipped board setup entry {0} because amount must be positive.", [Bridge.box(i, System.Int32)]), this);
                        continue;
                    }

                    var coord = HexMath.FromOffset$1(cellSetup.Position);

                    if (!boardModel.Exist(coord)) {
                        UnityEngine.Debug.LogWarning$1(System.String.format("Skipped board setup entry {0} because position {1} is outside board bounds.", Bridge.box(i, System.Int32), cellSetup.Position.$clone()), this);
                        continue;
                    }

                    boardModel.AddTile(coord, new HexTile.$ctor1(cellSetup.Color), cellSetup.Amount);
                }

                boardModel.EndBatchUpdate(false);

                this.BoardModel = boardModel;
                this.BoardModel.addCollapsed(Bridge.fn.cacheBind(this, this.OnBoardCollapsed));
            },
            /*HexGame.CreateBoardModel end.*/

            /*HexGame.PlaceDraggableStack start.*/
            PlaceDraggableStack: function (coord, stackSetup) {
if ( TRACE ) { TRACE( "HexGame#PlaceDraggableStack", this ); }

                if (this._isFinished) {
                    return;
                }

                this._usedDraggableStackCount = (this._usedDraggableStackCount + 1) | 0;
                this.BoardModel.AddTiles(HexGame.BuildTileAdditions(coord, stackSetup));
                this.EvaluateFinishState();
            },
            /*HexGame.PlaceDraggableStack end.*/

            /*HexGame.RestartGameState start.*/
            RestartGameState: function () {
if ( TRACE ) { TRACE( "HexGame#RestartGameState", this ); }

                this._isFinished = false;
                this._usedDraggableStackCount = 0;

                this.EvaluateFinishState();
            },
            /*HexGame.RestartGameState end.*/

            /*HexGame.OnBoardCollapsed start.*/
            OnBoardCollapsed: function (_) {
if ( TRACE ) { TRACE( "HexGame#OnBoardCollapsed", this ); }

                this.EvaluateFinishState();
            },
            /*HexGame.OnBoardCollapsed end.*/

            /*HexGame.EvaluateFinishState start.*/
            EvaluateFinishState: function () {
if ( TRACE ) { TRACE( "HexGame#EvaluateFinishState", this ); }

                if (this._isFinished || this.BoardModel == null) {
                    return;
                }

                if (this.IsBoardEmpty()) {
                    this.Finish(EGameFinish.Win);
                    return;
                }

                if (this._usedDraggableStackCount >= this._draggableStackSequenceConfig.Count) {
                    this.Finish(EGameFinish.Lose);
                }
            },
            /*HexGame.EvaluateFinishState end.*/

            /*HexGame.IsBoardEmpty start.*/
            IsBoardEmpty: function () {
if ( TRACE ) { TRACE( "HexGame#IsBoardEmpty", this ); }

                for (var y = 0; y < this.BoardModel.Height; y = (y + 1) | 0) {
                    for (var x = 0; x < this.BoardModel.Width; x = (x + 1) | 0) {
                        if (!this.BoardModel.getItem(HexMath.FromOffset(x, y)).IsEmpty) {
                            return false;
                        }
                    }
                }

                return true;
            },
            /*HexGame.IsBoardEmpty end.*/

            /*HexGame.Finish start.*/
            Finish: function (finish) {
if ( TRACE ) { TRACE( "HexGame#Finish", this ); }

                if (this._isFinished) {
                    return;
                }

                this._isFinished = true;

                !Bridge.staticEquals(this.GameFinished, null) ? this.GameFinished(finish) : null;
            },
            /*HexGame.Finish end.*/


        }
    });
    /*HexGame end.*/

    /*HexGrid$1 start.*/
    Bridge.define("HexGrid$1", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T)],
        fields: {
            _items: null,
            Width: 0,
            Height: 0,
            Count: 0
        },
        alias: ["System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator"],
        ctors: {
            ctor: function (width, height) {
if ( TRACE ) { TRACE( "HexGrid$1#ctor", this ); }

                this.$initialize();
                if (width <= 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("width");
                }

                if (height <= 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("height");
                }

                this.Width = width;
                this.Height = height;
                this.Count = Bridge.Int.mul(width, height);
                this._items = System.Array.init(this.Count, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
            }
        },
        methods: {
            getItem: function (index) {
if ( TRACE ) { TRACE( "HexGrid$1#getItem", this ); }

                return Bridge.rValue(this._items[index]);
            },
            getItem$1: function (coord) {
if ( TRACE ) { TRACE( "HexGrid$1#getItem$1", this ); }

                return Bridge.rValue(this._items[this.GetIndex(coord)]);
            },
            /*HexGrid$1.Set$1 start.*/
            Set$1: function (index, value) {
if ( TRACE ) { TRACE( "HexGrid$1#Set$1", this ); }

                this._items[index] = Bridge.rValue(value);
            },
            /*HexGrid$1.Set$1 end.*/

            /*HexGrid$1.Set start.*/
            Set: function (coord, value) {
if ( TRACE ) { TRACE( "HexGrid$1#Set", this ); }

                this.Set$1(this.GetIndex(coord), Bridge.rValue(value));
            },
            /*HexGrid$1.Set end.*/

            /*HexGrid$1.Contains start.*/
            Contains: function (coord) {
if ( TRACE ) { TRACE( "HexGrid$1#Contains", this ); }

                var offset = HexMath.ToOffset(coord);
                return offset.x >= 0 && offset.x < this.Width && offset.y >= 0 && offset.y < this.Height;
            },
            /*HexGrid$1.Contains end.*/

            /*HexGrid$1.ContainsIndex start.*/
            ContainsIndex: function (index) {
if ( TRACE ) { TRACE( "HexGrid$1#ContainsIndex", this ); }

                return index >= 0 && index < this.Count;
            },
            /*HexGrid$1.ContainsIndex end.*/

            /*HexGrid$1.GetIndex start.*/
            GetIndex: function (coord) {
if ( TRACE ) { TRACE( "HexGrid$1#GetIndex", this ); }

                var index = this.GetIndexOption(coord);

                if (!index.IsSome) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("coord", System.String.format("Coordinate {0} is outside grid bounds.", [coord]));
                }

                return index.Value;
            },
            /*HexGrid$1.GetIndex end.*/

            /*HexGrid$1.GetIndexOption start.*/
            GetIndexOption: function (coord) {
if ( TRACE ) { TRACE( "HexGrid$1#GetIndexOption", this ); }

                var offset = HexMath.ToOffset(coord);

                if (offset.x < 0 || offset.x >= this.Width || offset.y < 0 || offset.y >= this.Height) {
                    return Source.Optional.Option$1(System.Int32).None.$clone();
                }

                return Source.Optional.Option$1(System.Int32).Some(((offset.x + (Bridge.Int.mul(offset.y, this.Width))) | 0));
            },
            /*HexGrid$1.GetIndexOption end.*/

            /*HexGrid$1.CoordAt start.*/
            CoordAt: function (index) {
if ( TRACE ) { TRACE( "HexGrid$1#CoordAt", this ); }

                if (!this.ContainsIndex(index)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                var x = index % this.Width;
                var y = (Bridge.Int.div(index, this.Width)) | 0;
                return HexMath.FromOffset(x, y);
            },
            /*HexGrid$1.CoordAt end.*/

            /*HexGrid$1.GetOption start.*/
            GetOption: function (coord) {
if ( TRACE ) { TRACE( "HexGrid$1#GetOption", this ); }

                var index = this.GetIndexOption(coord);

                if (index.IsSome) {
                    return Source.Optional.Option$1(T).Some(Bridge.rValue(this._items[index.Value]));
                }

                return Source.Optional.Option$1(T).None.$clone();
            },
            /*HexGrid$1.GetOption end.*/

            /*HexGrid$1.TrySet start.*/
            TrySet: function (coord, value) {
if ( TRACE ) { TRACE( "HexGrid$1#TrySet", this ); }

                var index = this.GetIndexOption(coord);

                if (index.IsSome) {
                    this._items[index.Value] = Bridge.rValue(value);
                    return true;
                }

                return false;
            },
            /*HexGrid$1.TrySet end.*/

            /*HexGrid$1.GetNeighborCoord start.*/
            GetNeighborCoord: function (coord, direction) {
if ( TRACE ) { TRACE( "HexGrid$1#GetNeighborCoord", this ); }

                var neighbor = HexMath.Neighbor(coord, direction);
                return this.Contains(neighbor) ? Source.Optional.Option$1(HexCoord).Some(neighbor) : Source.Optional.Option$1(HexCoord).None.$clone();
            },
            /*HexGrid$1.GetNeighborCoord end.*/

            /*HexGrid$1.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "HexGrid$1#Clear", this ); }

                System.Array.fill(this._items, function () {
                    return Bridge.getDefaultValue(T);
                }, 0, this._items.length);
            },
            /*HexGrid$1.Clear end.*/

            /*HexGrid$1.Fill start.*/
            Fill: function (value) {
if ( TRACE ) { TRACE( "HexGrid$1#Fill", this ); }

                for (var i = 0; i < this._items.length; i = (i + 1) | 0) {
                    this._items[i] = Bridge.rValue(value);
                }
            },
            /*HexGrid$1.Fill end.*/

            /*HexGrid$1.EnumerateCoords start.*/
            EnumerateCoords: function () {
if ( TRACE ) { TRACE( "HexGrid$1#EnumerateCoords", this ); }

                return new (HexGrid$1.CoordEnumerator(T)).$ctor1(this);
            },
            /*HexGrid$1.EnumerateCoords end.*/

            /*HexGrid$1.GetEnumerator start.*/
            GetEnumerator: function () {
if ( TRACE ) { TRACE( "HexGrid$1#GetEnumerator", this ); }

                return new (HexGrid$1.Enumerator(T)).$ctor1(this._items);
            },
            /*HexGrid$1.GetEnumerator end.*/

            /*HexGrid$1.System$Collections$Generic$IEnumerable$1$GetEnumerator start.*/
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
if ( TRACE ) { TRACE( "HexGrid$1#System$Collections$Generic$IEnumerable$1$GetEnumerator", this ); }

                return new (HexGrid$1.Enumerator(T)).$ctor1(this._items).$clone();
            },
            /*HexGrid$1.System$Collections$Generic$IEnumerable$1$GetEnumerator end.*/

            /*HexGrid$1.System$Collections$IEnumerable$GetEnumerator start.*/
            System$Collections$IEnumerable$GetEnumerator: function () {
if ( TRACE ) { TRACE( "HexGrid$1#System$Collections$IEnumerable$GetEnumerator", this ); }

                return new (HexGrid$1.Enumerator(T)).$ctor1(this._items).$clone();
            },
            /*HexGrid$1.System$Collections$IEnumerable$GetEnumerator end.*/


        },
        overloads: {
            "Set(int, T)": "Set$1"
        }
    }; });
    /*HexGrid$1 end.*/

    /*HexGrid$1+CoordEnumerator start.*/
    Bridge.define("HexGrid$1.CoordEnumerator", function (T) { return {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#getDefaultValue", this ); }
 return new (HexGrid$1.CoordEnumerator(T))(); }
            }
        },
        fields: {
            _grid: null,
            _index: 0
        },
        props: {
            Current: {
                get: function () {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#Current#get", this ); }

                    return this._grid.CoordAt(this._index);
                }
            }
        },
        ctors: {
            $ctor1: function (grid) {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#$ctor1", this ); }

                this.$initialize();
                this._grid = grid;
                this._index = -1;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*HexGrid$1+CoordEnumerator.MoveNext start.*/
            MoveNext: function () {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#MoveNext", this ); }

                var next = (this._index + 1) | 0;
                if (next >= this._grid.Count) {
                    return false;
                }

                this._index = next;
                return true;
            },
            /*HexGrid$1+CoordEnumerator.MoveNext end.*/

            getHashCode: function () {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#getHashCode", this ); }

                var h = Bridge.addHash([5532453256, this._grid, this._index]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#equals", this ); }

                if (!Bridge.is(o, HexGrid$1.CoordEnumerator(T))) {
                    return false;
                }
                return Bridge.equals(this._grid, o._grid) && Bridge.equals(this._index, o._index);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexGrid$1.CoordEnumerator#$clone", this ); }

                var s = to || new (HexGrid$1.CoordEnumerator(T))();
                s._grid = this._grid;
                s._index = this._index;
                return s;
            }
        }
    }; });
    /*HexGrid$1+CoordEnumerator end.*/

    /*HexGrid$1+Enumerator start.*/
    Bridge.define("HexGrid$1.Enumerator", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T)],
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#getDefaultValue", this ); }
 return new (HexGrid$1.Enumerator(T))(); }
            }
        },
        fields: {
            _items: null,
            _index: 0
        },
        props: {
            Current: {
                get: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#Current#get", this ); }

                    return Bridge.rValue(this._items[this._index]);
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#System$Collections$IEnumerator$Current#get", this ); }

                    return this.Current;
                }
            }
        },
        alias: [
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset",
            "Dispose", "System$IDisposable$Dispose"
        ],
        ctors: {
            $ctor1: function (items) {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#$ctor1", this ); }

                this.$initialize();
                this._items = items;
                this._index = -1;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*HexGrid$1+Enumerator.moveNext start.*/
            moveNext: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#moveNext", this ); }

                var next = (this._index + 1) | 0;
                if (next >= this._items.length) {
                    return false;
                }

                this._index = next;
                return true;
            },
            /*HexGrid$1+Enumerator.moveNext end.*/

            /*HexGrid$1+Enumerator.reset start.*/
            reset: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#reset", this ); }

                this._index = -1;
            },
            /*HexGrid$1+Enumerator.reset end.*/

            /*HexGrid$1+Enumerator.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#Dispose", this ); }
 },
            /*HexGrid$1+Enumerator.Dispose end.*/

            getHashCode: function () {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#getHashCode", this ); }

                var h = Bridge.addHash([3788985113, this._items, this._index]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#equals", this ); }

                if (!Bridge.is(o, HexGrid$1.Enumerator(T))) {
                    return false;
                }
                return Bridge.equals(this._items, o._items) && Bridge.equals(this._index, o._index);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexGrid$1.Enumerator#$clone", this ); }

                var s = to || new (HexGrid$1.Enumerator(T))();
                s._items = this._items;
                s._index = this._index;
                return s;
            }
        },
        overloads: {
            "MoveNext()": "moveNext",
            "Reset()": "reset"
        }
    }; });
    /*HexGrid$1+Enumerator end.*/

    /*HexLayout start.*/
    Bridge.define("HexLayout", {
        $kind: 4,
        statics: {
            fields: {
                Sqrt3: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexLayout#init", this ); }

                    this.Sqrt3 = 1.73205078;
                }
            },
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexLayout#getDefaultValue", this ); }
 return new HexLayout(); }
            }
        },
        fields: {
            HexSize: 0,
            Origin: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexLayout#init", this ); }

                this.Origin = new UnityEngine.Vector3();
            },
            $ctor1: function (hexSize, origin) {
if ( TRACE ) { TRACE( "HexLayout#$ctor1", this ); }

                this.$initialize();
                this.HexSize = hexSize;
                this.Origin = origin.$clone();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexLayout#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*HexLayout.HexToWorld start.*/
            HexToWorld: function (coord, y) {
if ( TRACE ) { TRACE( "HexLayout#HexToWorld", this ); }

                if (y === void 0) { y = 0.0; }
                return this.Origin.$clone().add( new pc.Vec3( this.HexSize * HexLayout.Sqrt3 * (coord.Q + coord.R * 0.5), y, this.HexSize * 1.5 * coord.R ) );
            },
            /*HexLayout.HexToWorld end.*/

            /*HexLayout.WorldToHex start.*/
            WorldToHex: function (position) {
if ( TRACE ) { TRACE( "HexLayout#WorldToHex", this ); }

                var local = position.$clone().sub( this.Origin );
                return HexMath.RoundAxial((0.577350259 * local.x - 0.333333343 * local.z) / this.HexSize, 0.6666667 * local.z / this.HexSize);
            },
            /*HexLayout.WorldToHex end.*/

            getHashCode: function () {
if ( TRACE ) { TRACE( "HexLayout#getHashCode", this ); }

                var h = Bridge.addHash([3253198621, this.HexSize, this.Origin]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexLayout#equals", this ); }

                if (!Bridge.is(o, HexLayout)) {
                    return false;
                }
                return Bridge.equals(this.HexSize, o.HexSize) && Bridge.equals(this.Origin, o.Origin);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexLayout#$clone", this ); }
 return this; }
        }
    });
    /*HexLayout end.*/

    /*HexMath start.*/
    Bridge.define("HexMath", {
        statics: {
            fields: {
                Directions: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexMath#init", this ); }

                    this.Directions = System.Array.init([
                        new HexCoord.$ctor1(1, 0), 
                        new HexCoord.$ctor1(1, -1), 
                        new HexCoord.$ctor1(0, -1), 
                        new HexCoord.$ctor1(-1, 0), 
                        new HexCoord.$ctor1(-1, 1), 
                        new HexCoord.$ctor1(0, 1)
                    ], HexCoord);
                }
            },
            methods: {
                /*HexMath.Neighbor:static start.*/
                Neighbor: function (coord, direction) {
if ( TRACE ) { TRACE( "HexMath#Neighbor", this ); }

                    return HexCoord.op_Addition(coord, HexMath.Directions[direction]);
                },
                /*HexMath.Neighbor:static end.*/

                /*HexMath.Distance:static start.*/
                Distance: function (a, b) {
if ( TRACE ) { TRACE( "HexMath#Distance", this ); }

                    var dq = Math.abs(((a.Q - b.Q) | 0));
                    var dr = Math.abs(((a.R - b.R) | 0));
                    var ds = Math.abs(((a.S - b.S) | 0));
                    return ((Bridge.Int.div((((((dq + dr) | 0) + ds) | 0)), 2)) | 0);
                },
                /*HexMath.Distance:static end.*/

                /*HexMath.ToOffset:static start.*/
                ToOffset: function (coord) {
if ( TRACE ) { TRACE( "HexMath#ToOffset", this ); }

                    return new UnityEngine.Vector2Int.$ctor1(((coord.Q + ((Bridge.Int.div((((coord.R - (coord.R & 1)) | 0)), 2)) | 0)) | 0), coord.R);
                },
                /*HexMath.ToOffset:static end.*/

                /*HexMath.FromOffset:static start.*/
                FromOffset: function (x, y) {
if ( TRACE ) { TRACE( "HexMath#FromOffset", this ); }

                    return new HexCoord.$ctor1(((x - ((Bridge.Int.div((((y - (y & 1)) | 0)), 2)) | 0)) | 0), y);
                },
                /*HexMath.FromOffset:static end.*/

                /*HexMath.FromOffset$1:static start.*/
                FromOffset$1: function (offset) {
if ( TRACE ) { TRACE( "HexMath#FromOffset$1", this ); }

                    return HexMath.FromOffset(offset.x, offset.y);
                },
                /*HexMath.FromOffset$1:static end.*/

                /*HexMath.RoundAxial:static start.*/
                RoundAxial: function (q, r) {
if ( TRACE ) { TRACE( "HexMath#RoundAxial", this ); }

                    var s = -q - r;

                    var roundedQ = HexMath.RoundToInt(q);
                    var roundedR = HexMath.RoundToInt(r);
                    var roundedS = HexMath.RoundToInt(s);

                    var qDiff = HexMath.Abs(roundedQ - q);
                    var rDiff = HexMath.Abs(roundedR - r);
                    var sDiff = HexMath.Abs(roundedS - s);

                    if (qDiff > rDiff && qDiff > sDiff) {
                        roundedQ = (((-roundedR) | 0) - roundedS) | 0;
                    } else {
                        if (rDiff > sDiff) {
                            roundedR = (((-roundedQ) | 0) - roundedS) | 0;
                        }
                    }

                    return new HexCoord.$ctor1(roundedQ, roundedR);
                },
                /*HexMath.RoundAxial:static end.*/

                /*HexMath.FillRange:static start.*/
                FillRange: function (center, range, results) {
if ( TRACE ) { TRACE( "HexMath#FillRange", this ); }

                    if (results == null) {
                        throw new System.ArgumentNullException.$ctor1("results");
                    }

                    if (range < 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("range");
                    }

                    results.clear();

                    for (var dq = (-range) | 0; dq <= range; dq = (dq + 1) | 0) {
                        var minDr = Math.max(((-range) | 0), ((((-dq) | 0) - range) | 0));
                        var maxDr = Math.min(range, ((((-dq) | 0) + range) | 0));

                        for (var dr = minDr; dr <= maxDr; dr = (dr + 1) | 0) {
                            results.add(new HexCoord.$ctor1(((center.Q + dq) | 0), ((center.R + dr) | 0)));
                        }
                    }
                },
                /*HexMath.FillRange:static end.*/

                /*HexMath.FillRing:static start.*/
                FillRing: function (center, radius, results) {
if ( TRACE ) { TRACE( "HexMath#FillRing", this ); }

                    if (results == null) {
                        throw new System.ArgumentNullException.$ctor1("results");
                    }

                    if (radius < 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("radius");
                    }

                    results.clear();

                    if (radius === 0) {
                        results.add(center);
                        return;
                    }

                    var current = HexCoord.op_Addition(center, (HexCoord.op_Multiply(HexMath.Directions[HexDirection.BottomLeft], radius)));

                    for (var side = 0; side < HexMath.Directions.length; side = (side + 1) | 0) {
                        for (var step = 0; step < radius; step = (step + 1) | 0) {
                            results.add(current);
                            current = HexCoord.op_Addition(current, HexMath.Directions[side]);
                        }
                    }
                },
                /*HexMath.FillRing:static end.*/

                /*HexMath.RoundToInt:static start.*/
                RoundToInt: function (value) {
if ( TRACE ) { TRACE( "HexMath#RoundToInt", this ); }

                    return value >= 0.0 ? Bridge.Int.clip32(value + 0.5) : Bridge.Int.clip32(value - 0.5);
                },
                /*HexMath.RoundToInt:static end.*/

                /*HexMath.Abs:static start.*/
                Abs: function (value) {
if ( TRACE ) { TRACE( "HexMath#Abs", this ); }

                    return value >= 0.0 ? value : -value;
                },
                /*HexMath.Abs:static end.*/


            }
        }
    });
    /*HexMath end.*/

    /*HexMergePlan start.*/
    Bridge.define("HexMergePlan", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexMergePlan#getDefaultValue", this ); }
 return new HexMergePlan(); }
            }
        },
        fields: {
            Tile: null,
            From: null,
            To: null,
            Path: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexMergePlan#init", this ); }

                this.Tile = new HexTile();
                this.From = new HexCoord();
                this.To = new HexCoord();
            },
            $ctor1: function (tile, from, to, path) {
if ( TRACE ) { TRACE( "HexMergePlan#$ctor1", this ); }

                this.$initialize();
                if (path == null) {
                    throw new System.ArgumentNullException.$ctor1("path");
                }

                if (path.length < 2) {
                    throw new System.ArgumentException.$ctor3("Path must contain at least two cells.", "path");
                }

                this.Tile = tile;
                this.From = from;
                this.To = to;
                this.Path = path;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexMergePlan#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexMergePlan#getHashCode", this ); }

                var h = Bridge.addHash([4852892669, this.Tile, this.From, this.To, this.Path]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexMergePlan#equals", this ); }

                if (!Bridge.is(o, HexMergePlan)) {
                    return false;
                }
                return Bridge.equals(this.Tile, o.Tile) && Bridge.equals(this.From, o.From) && Bridge.equals(this.To, o.To) && Bridge.equals(this.Path, o.Path);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexMergePlan#$clone", this ); }
 return this; }
        }
    });
    /*HexMergePlan end.*/

    /*HexMergeResolver start.*/
    Bridge.define("HexMergeResolver", {
        statics: {
            fields: {
                PreferenceLayout: null,
                Axes: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexMergeResolver#init", this ); }

                    this.PreferenceLayout = new HexLayout();
                    this.PreferenceLayout = new HexLayout.$ctor1(1.0, pc.Vec3.ZERO.clone());
                    this.Axes = System.Array.init([
                        new HexMergeResolver.AxisDefinition.$ctor1(HexDirection.Left, HexDirection.Right, 0), 
                        new HexMergeResolver.AxisDefinition.$ctor1(HexDirection.BottomLeft, HexDirection.TopRight, 1), 
                        new HexMergeResolver.AxisDefinition.$ctor1(HexDirection.TopLeft, HexDirection.BottomRight, 2)
                    ], HexMergeResolver.AxisDefinition);
                }
            },
            methods: {
                /*HexMergeResolver.Resolve:static start.*/
                Resolve: function (board, pivot) {
if ( TRACE ) { TRACE( "HexMergeResolver#Resolve", this ); }

                    if (board == null) {
                        throw new System.ArgumentNullException.$ctor1("board");
                    }

                    var tile = board.GetTopTile(pivot);

                    if (!tile.IsSome) {
                        return Source.Optional.Option$1(HexMergePlan).None.$clone();
                    }

                    var bestLine = null;
                    var bestHighestWorldX = Number.NEGATIVE_INFINITY;
                    var bestLength = 0;
                    var bestAxisOrder = 2147483647;

                    for (var i = 0; i < HexMergeResolver.Axes.length; i = (i + 1) | 0) {
                        var line = HexMergeResolver.BuildLine(board, pivot, tile.Value.Color, HexMergeResolver.Axes[i]);

                        if (line.Count < 2) {
                            continue;
                        }

                        HexMergeResolver.SortLineInMergeOrder(line);

                        var highestWorldX = HexMergeResolver.GetWorldX(line.getItem(((line.Count - 1) | 0)));
                        var length = line.Count;

                        if (highestWorldX > bestHighestWorldX || (UnityEngine.Mathf.Approximately(highestWorldX, bestHighestWorldX) && length > bestLength) || (UnityEngine.Mathf.Approximately(highestWorldX, bestHighestWorldX) && length === bestLength && HexMergeResolver.Axes[i].Order < bestAxisOrder)) {
                            bestLine = line;
                            bestHighestWorldX = highestWorldX;
                            bestLength = length;
                            bestAxisOrder = HexMergeResolver.Axes[i].Order;
                        }
                    }

                    if (bestLine == null) {
                        return Source.Optional.Option$1(HexMergePlan).None.$clone();
                    }

                    var from = bestLine.getItem(0);
                    var to = bestLine.getItem(1);
                    return Source.Optional.Option$1(HexMergePlan).Some(new HexMergePlan.$ctor1(tile.Value, from, to, bestLine.ToArray()));
                },
                /*HexMergeResolver.Resolve:static end.*/

                /*HexMergeResolver.BuildLine:static start.*/
                BuildLine: function (board, pivot, color, axis) {
if ( TRACE ) { TRACE( "HexMergeResolver#BuildLine", this ); }

                    var line = new (System.Collections.Generic.List$1(HexCoord)).$ctor2(4);

                    HexMergeResolver.CollectDirection(board, pivot, axis.NegativeDirection, color, line);
                    line.Reverse();
                    line.add(pivot);
                    HexMergeResolver.CollectDirection(board, pivot, axis.PositiveDirection, color, line);

                    return line;
                },
                /*HexMergeResolver.BuildLine:static end.*/

                /*HexMergeResolver.CollectDirection:static start.*/
                CollectDirection: function (board, start, direction, color, results) {
if ( TRACE ) { TRACE( "HexMergeResolver#CollectDirection", this ); }

                    var current = start;

                    while (true) {
                        var neighbor = board.GetNeighborCoord(current, direction);

                        if (!neighbor.IsSome) {
                            return;
                        }

                        var tile = board.GetTopTile(neighbor.Value);

                        if (!tile.IsSome || tile.Value.Color !== color) {
                            return;
                        }

                        results.add(neighbor.Value);
                        current = neighbor.Value;
                    }
                },
                /*HexMergeResolver.CollectDirection:static end.*/

                /*HexMergeResolver.SortLineInMergeOrder:static start.*/
                SortLineInMergeOrder: function (line) {
if ( TRACE ) { TRACE( "HexMergeResolver#SortLineInMergeOrder", this ); }

                    line.Sort$2(HexMergeResolver.SortLines);
                },
                /*HexMergeResolver.SortLineInMergeOrder:static end.*/

                /*HexMergeResolver.SortLines:static start.*/
                SortLines: function (left, right) {
if ( TRACE ) { TRACE( "HexMergeResolver#SortLines", this ); }

                    var byWorldX = Bridge.compare(HexMergeResolver.GetWorldX(left), HexMergeResolver.GetWorldX(right));

                    if (byWorldX !== 0) {
                        return byWorldX;
                    }

                    var byRow = Bridge.compare(left.R, right.R);
                    return byRow !== 0 ? byRow : Bridge.compare(left.Q, right.Q);
                },
                /*HexMergeResolver.SortLines:static end.*/

                /*HexMergeResolver.GetWorldX:static start.*/
                GetWorldX: function (coord) {
if ( TRACE ) { TRACE( "HexMergeResolver#GetWorldX", this ); }

                    return HexMergeResolver.PreferenceLayout.HexToWorld(coord).x;
                },
                /*HexMergeResolver.GetWorldX:static end.*/


            }
        }
    });
    /*HexMergeResolver end.*/

    /*HexMergeResolver+AxisDefinition start.*/
    Bridge.define("HexMergeResolver.AxisDefinition", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexMergeResolver.AxisDefinition#getDefaultValue", this ); }
 return new HexMergeResolver.AxisDefinition(); }
            }
        },
        fields: {
            NegativeDirection: 0,
            PositiveDirection: 0,
            Order: 0
        },
        ctors: {
            $ctor1: function (negativeDirection, positiveDirection, order) {
if ( TRACE ) { TRACE( "HexMergeResolver.AxisDefinition#$ctor1", this ); }

                this.$initialize();
                this.NegativeDirection = negativeDirection;
                this.PositiveDirection = positiveDirection;
                this.Order = order;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexMergeResolver.AxisDefinition#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexMergeResolver.AxisDefinition#getHashCode", this ); }

                var h = Bridge.addHash([5473875298, this.NegativeDirection, this.PositiveDirection, this.Order]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexMergeResolver.AxisDefinition#equals", this ); }

                if (!Bridge.is(o, HexMergeResolver.AxisDefinition)) {
                    return false;
                }
                return Bridge.equals(this.NegativeDirection, o.NegativeDirection) && Bridge.equals(this.PositiveDirection, o.PositiveDirection) && Bridge.equals(this.Order, o.Order);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexMergeResolver.AxisDefinition#$clone", this ); }
 return this; }
        }
    });
    /*HexMergeResolver+AxisDefinition end.*/

    /*HexTile start.*/
    Bridge.define("HexTile", {
        inherits: function () {
if ( TRACE ) { TRACE( "HexTile#inherits", this ); }
 return [System.IEquatable$1(HexTile)]; },
        $kind: 4,
        statics: {
            methods: {
                op_Equality: function (left, right) {
if ( TRACE ) { TRACE( "HexTile#op_Equality", this ); }

                    return left.equalsT(right);
                },
                op_Inequality: function (left, right) {
if ( TRACE ) { TRACE( "HexTile#op_Inequality", this ); }

                    return !left.equalsT(right);
                },
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexTile#getDefaultValue", this ); }
 return new HexTile(); }
            }
        },
        fields: {
            Color: 0
        },
        alias: ["equalsT", "System$IEquatable$1$HexTile$equalsT"],
        ctors: {
            $ctor1: function (color) {
if ( TRACE ) { TRACE( "HexTile#$ctor1", this ); }

                this.$initialize();
                this.Color = color;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexTile#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*HexTile.equalsT start.*/
            equalsT: function (other) {
if ( TRACE ) { TRACE( "HexTile#equalsT", this ); }

                return this.Color === other.Color;
            },
            /*HexTile.equalsT end.*/

            /*HexTile.equals start.*/
            equals: function (obj) {
if ( TRACE ) { TRACE( "HexTile#equals", this ); }

                var other = new HexTile();
                return System.Nullable.liftne(HexTile.op_Inequality, ((other = Bridge.is(obj, HexTile) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, HexTile), HexTile)) : null)), null) && this.equalsT(other);
            },
            /*HexTile.equals end.*/

            /*HexTile.getHashCode start.*/
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexTile#getHashCode", this ); }

                return this.Color;
            },
            /*HexTile.getHashCode end.*/

            /*HexTile.toString start.*/
            toString: function () {
if ( TRACE ) { TRACE( "HexTile#toString", this ); }

                return System.Enum.toString(HexColor, this.Color);
            },
            /*HexTile.toString end.*/

            $clone: function (to) {
if ( TRACE ) { TRACE( "HexTile#$clone", this ); }
 return this; }
        },
        overloads: {
            "Equals(HexTile)": "equalsT",
            "Equals(object)": "equals",
            "GetHashCode()": "getHashCode",
            "ToString()": "toString"
        }
    });
    /*HexTile end.*/

    /*HexTileAdded start.*/
    Bridge.define("HexTileAdded", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexTileAdded#getDefaultValue", this ); }
 return new HexTileAdded(); }
            }
        },
        fields: {
            Coord: null,
            Tile: null,
            Index: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexTileAdded#init", this ); }

                this.Coord = new HexCoord();
                this.Tile = new HexTile();
            },
            $ctor1: function (coord, tile, index) {
if ( TRACE ) { TRACE( "HexTileAdded#$ctor1", this ); }

                this.$initialize();
                this.Coord = coord;
                this.Tile = tile;
                this.Index = index;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexTileAdded#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexTileAdded#getHashCode", this ); }

                var h = Bridge.addHash([4198708757, this.Coord, this.Tile, this.Index]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexTileAdded#equals", this ); }

                if (!Bridge.is(o, HexTileAdded)) {
                    return false;
                }
                return Bridge.equals(this.Coord, o.Coord) && Bridge.equals(this.Tile, o.Tile) && Bridge.equals(this.Index, o.Index);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexTileAdded#$clone", this ); }
 return this; }
        }
    });
    /*HexTileAdded end.*/

    /*HexTileAddition start.*/
    Bridge.define("HexTileAddition", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexTileAddition#getDefaultValue", this ); }
 return new HexTileAddition(); }
            }
        },
        fields: {
            Coord: null,
            Tile: null,
            Amount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexTileAddition#init", this ); }

                this.Coord = new HexCoord();
                this.Tile = new HexTile();
            },
            $ctor1: function (coord, tile, amount) {
if ( TRACE ) { TRACE( "HexTileAddition#$ctor1", this ); }

                if (amount === void 0) { amount = 1; }

                this.$initialize();
                if (amount <= 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("amount", "Amount must be greater than zero.");
                }

                this.Coord = coord;
                this.Tile = tile;
                this.Amount = amount;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexTileAddition#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexTileAddition#getHashCode", this ); }

                var h = Bridge.addHash([4474643838, this.Coord, this.Tile, this.Amount]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexTileAddition#equals", this ); }

                if (!Bridge.is(o, HexTileAddition)) {
                    return false;
                }
                return Bridge.equals(this.Coord, o.Coord) && Bridge.equals(this.Tile, o.Tile) && Bridge.equals(this.Amount, o.Amount);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexTileAddition#$clone", this ); }
 return this; }
        }
    });
    /*HexTileAddition end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Source.Game.HexMerge.HexDragTutorialController start.*/
    Bridge.define("Source.Game.HexMerge.HexDragTutorialController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _hexGamePresenter: null,
            _worldCamera: null,
            _canvas: null,
            _hand: null,
            _config: null,
            _handRoutine: null,
            _showHandDelayRoutine: null,
            _isCompleted: false
        },
        methods: {
            /*Source.Game.HexMerge.HexDragTutorialController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#Start", this ); }

                this._hand.gameObject.SetActive(false);

                if (this._isCompleted) {
                    this.EnableAllDraggables();
                    this.enabled = false;
                    return;
                }

                this._hexGamePresenter.CanPlaceDraggedStack = Bridge.fn.cacheBind(this, this.CanPlaceDraggedStack);
                this._hexGamePresenter.addDragStarted(Bridge.fn.cacheBind(this, this.OnDragStarted));
                this._hexGamePresenter.addDragCancelled(Bridge.fn.cacheBind(this, this.OnDragCancelled));
                this._hexGamePresenter.addDragPlaced(Bridge.fn.cacheBind(this, this.OnDragPlaced));

                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    this._hexGamePresenter.SetDraggableEnabled(i, i === this._config.EnabledDraggableIndex);
                }

                this.StartShowHandDelay();
            },
            /*Source.Game.HexMerge.HexDragTutorialController.Start end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._hexGamePresenter, null)) {
                    this._hexGamePresenter.removeDragStarted(Bridge.fn.cacheBind(this, this.OnDragStarted));
                    this._hexGamePresenter.removeDragCancelled(Bridge.fn.cacheBind(this, this.OnDragCancelled));
                    this._hexGamePresenter.removeDragPlaced(Bridge.fn.cacheBind(this, this.OnDragPlaced));

                    if (Bridge.referenceEquals(this._hexGamePresenter.CanPlaceDraggedStack, Bridge.fn.cacheBind(this, this.CanPlaceDraggedStack))) {
                        this._hexGamePresenter.CanPlaceDraggedStack = null;
                    }
                }
            },
            /*Source.Game.HexMerge.HexDragTutorialController.OnDestroy end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.CanPlaceDraggedStack start.*/
            CanPlaceDraggedStack: function (draggableIndex, coord) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#CanPlaceDraggedStack", this ); }

                if (this._isCompleted) {
                    return true;
                }

                if (draggableIndex !== this._config.EnabledDraggableIndex) {
                    return false;
                }

                var targetCoord = HexMath.FromOffset$1(this._config.TargetCellOffset);
                return HexCoord.op_Equality(coord, targetCoord);
            },
            /*Source.Game.HexMerge.HexDragTutorialController.CanPlaceDraggedStack end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.OnDragStarted start.*/
            OnDragStarted: function (draggableIndex) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#OnDragStarted", this ); }

                if (this._isCompleted || draggableIndex !== this._config.EnabledDraggableIndex) {
                    return;
                }

                this.StopHandPresentation();
            },
            /*Source.Game.HexMerge.HexDragTutorialController.OnDragStarted end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.OnDragCancelled start.*/
            OnDragCancelled: function (draggableIndex) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#OnDragCancelled", this ); }

                if (this._isCompleted || draggableIndex !== this._config.EnabledDraggableIndex) {
                    return;
                }

                this.StartShowHandDelay();
            },
            /*Source.Game.HexMerge.HexDragTutorialController.OnDragCancelled end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.OnDragPlaced start.*/
            OnDragPlaced: function (draggableIndex, coord) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#OnDragPlaced", this ); }

                if (this._isCompleted || draggableIndex !== this._config.EnabledDraggableIndex) {
                    return;
                }

                var targetCoord = HexMath.FromOffset$1(this._config.TargetCellOffset);

                if (HexCoord.op_Inequality(coord, targetCoord)) {
                    this.StartShowHandDelay();
                    return;
                }

                this.CompleteTutorial();
            },
            /*Source.Game.HexMerge.HexDragTutorialController.OnDragPlaced end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.CompleteTutorial start.*/
            CompleteTutorial: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#CompleteTutorial", this ); }

                this._isCompleted = true;
                this.StopHandPresentation();
                this.EnableAllDraggables();
                this._hexGamePresenter.CanPlaceDraggedStack = null;
                this.enabled = false;
            },
            /*Source.Game.HexMerge.HexDragTutorialController.CompleteTutorial end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.EnableAllDraggables start.*/
            EnableAllDraggables: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#EnableAllDraggables", this ); }

                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    this._hexGamePresenter.SetDraggableEnabled(i, true);
                }
            },
            /*Source.Game.HexMerge.HexDragTutorialController.EnableAllDraggables end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.StartShowHandDelay start.*/
            StartShowHandDelay: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#StartShowHandDelay", this ); }

                if (this._showHandDelayRoutine != null) {
                    this.StopCoroutine$2(this._showHandDelayRoutine);
                }

                this._showHandDelayRoutine = this.StartCoroutine$1(this.ShowHandAfterDelay());
            },
            /*Source.Game.HexMerge.HexDragTutorialController.StartShowHandDelay end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.ShowHandAfterDelay start.*/
            ShowHandAfterDelay: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#ShowHandAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._config.HandShowDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._showHandDelayRoutine = null;

                                        if (this._handRoutine != null) {
                                            this.StopCoroutine$2(this._handRoutine);
                                        }

                                        this._handRoutine = this.StartCoroutine$1(this.AnimateHandLoop());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Source.Game.HexMerge.HexDragTutorialController.ShowHandAfterDelay end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.AnimateHandLoop start.*/
            AnimateHandLoop: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#AnimateHandLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    draggableWorld,
                    targetWorld,
                    start,
                    end,
                    elapsed,
                    progress,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( !this._isCompleted ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 1: {
                                    draggableWorld = this._hexGamePresenter.GetDraggableWorldPosition(this._config.EnabledDraggableIndex);

                                        if (!draggableWorld.IsSome) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 0;
                                        continue;
                                }
                                case 4: {
                                    targetWorld = this._hexGamePresenter.GetGridCellWorldPosition(this._config.TargetCellOffset.$clone());
                                        start = this.WorldToCanvasPosition(draggableWorld.Value);
                                        end = this.WorldToCanvasPosition(targetWorld);
                                        this._hand.anchoredPosition = start.$clone();
                                        this._hand.gameObject.SetActive(true);

                                        elapsed = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed < this._config.HandMoveDuration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        progress = Math.max(0, Math.min(1, elapsed / this._config.HandMoveDuration));
                                        this._hand.anchoredPosition = new pc.Vec2().lerpUnclamped( start, end, progress );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this._hand.anchoredPosition = end.$clone();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this._config.HandLoopDelay);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 10: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Source.Game.HexMerge.HexDragTutorialController.AnimateHandLoop end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.WorldToCanvasPosition start.*/
            WorldToCanvasPosition: function (worldPosition) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#WorldToCanvasPosition", this ); }

                var canvasRect = Bridge.cast(this._canvas.transform, UnityEngine.RectTransform);
                var screenPoint = this._worldCamera.WorldToScreenPoint(worldPosition);
                var eventCamera = this._canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceOverlay ? null : this._worldCamera;
                var localPoint = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, UnityEngine.Vector2.FromVector3(screenPoint), eventCamera, localPoint);
                return localPoint.v.$clone();
            },
            /*Source.Game.HexMerge.HexDragTutorialController.WorldToCanvasPosition end.*/

            /*Source.Game.HexMerge.HexDragTutorialController.StopHandPresentation start.*/
            StopHandPresentation: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexDragTutorialController#StopHandPresentation", this ); }

                if (this._showHandDelayRoutine != null) {
                    this.StopCoroutine$2(this._showHandDelayRoutine);
                    this._showHandDelayRoutine = null;
                }

                if (this._handRoutine != null) {
                    this.StopCoroutine$2(this._handRoutine);
                    this._handRoutine = null;
                }

                this._hand.gameObject.SetActive(false);
            },
            /*Source.Game.HexMerge.HexDragTutorialController.StopHandPresentation end.*/


        }
    });
    /*Source.Game.HexMerge.HexDragTutorialController end.*/

    /*Source.Game.HexMerge.HexGameFinishedView start.*/
    Bridge.define("Source.Game.HexMerge.HexGameFinishedView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _canvasGroup: null,
            _button: null,
            _fadeDuration: 0
        },
        events: {
            Clicked: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGameFinishedView#init", this ); }

                this._fadeDuration = 0.25;
            }
        },
        methods: {
            /*Source.Game.HexMerge.HexGameFinishedView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGameFinishedView#Awake", this ); }

                this._button.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnButtonClicked));
                this.gameObject.SetActive(false);
            },
            /*Source.Game.HexMerge.HexGameFinishedView.Awake end.*/

            /*Source.Game.HexMerge.HexGameFinishedView.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGameFinishedView#OnDestroy", this ); }

                this._button.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.OnButtonClicked));
            },
            /*Source.Game.HexMerge.HexGameFinishedView.OnDestroy end.*/

            /*Source.Game.HexMerge.HexGameFinishedView.Activate start.*/
            Activate: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGameFinishedView#Activate", this ); }

                var $t;
                this.gameObject.SetActive(true);
                this._canvasGroup.alpha = 0.0;
                Tweens.TweenExtension.AddTween$2(UnityEngine.Transform, System.Single, this.gameObject, ($t = new Tweens.FloatTween(), $t.from = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(0.0), $t.to = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(1.0), $t.duration = this._fadeDuration, $t.easeType = Tweens.EaseType.SineInOut, $t.onUpdate = Bridge.fn.bind(this, function (_, value) {
                    this._canvasGroup.alpha = value;
                }), $t.onFinally = Bridge.fn.bind(this, function (_) {
                    this._canvasGroup.alpha = 1.0;
                }), $t));
            },
            /*Source.Game.HexMerge.HexGameFinishedView.Activate end.*/

            /*Source.Game.HexMerge.HexGameFinishedView.OnButtonClicked start.*/
            OnButtonClicked: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGameFinishedView#OnButtonClicked", this ); }

                !Bridge.staticEquals(this.Clicked, null) ? this.Clicked() : null;
            },
            /*Source.Game.HexMerge.HexGameFinishedView.OnButtonClicked end.*/


        }
    });
    /*Source.Game.HexMerge.HexGameFinishedView end.*/

    /*Source.Game.HexMerge.HexGamePresenter start.*/
    Bridge.define("Source.Game.HexMerge.HexGamePresenter", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                BaseColorId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#init", this ); }

                    this.BaseColorId = UnityEngine.Shader.PropertyToID("_BaseColor");
                }
            }
        },
        fields: {
            _hexColorPaletteConfig: null,
            _hexGame: null,
            _camera: null,
            _cellPrefab: null,
            _tilePrefab: null,
            _collapseVfxPrefab: null,
            _draggableStackSequenceConfig: null,
            _hexGameFinishedView: null,
            _tileShader: null,
            _hexSize: 0,
            _stackHeightStep: 0,
            _tileBaseHeight: 0,
            _mergeDuration: 0,
            _mergeTileStartDelay: 0,
            _mergeArcHeight: 0,
            _mergeArcDistanceFactor: 0,
            _collapseDuration: 0,
            _collapseTileStartDelay: 0,
            _collapseVfxLeadTime: 0,
            _draggableSpawnSpots: null,
            _dragCellMarker: null,
            _draggablePickRadius: 0,
            _draggableSnapDuration: 0,
            _dragLiftHeight: 0,
            _tileAudioSource: null,
            _mergeAudio: null,
            _collapseAudio: null,
            _tilesByCoord: null,
            _animationQueue: null,
            _tileMaterialsByColor: null,
            _tilePool: null,
            _collapseVfxPool: null,
            _boardRoot: null,
            _animationQueueRoutine: null,
            _activeMergeTweens: 0,
            _nextDraggableStackIndex: 0,
            _draggedStack: null,
            _dragOffset: null,
            _dragBaseY: 0,
            _animationSpeedModifier: 0,
            _draggableStacks: null,
            _draggableStacksBySlot: null,
            _draggableEnabledBySlot: null,
            CanPlaceDraggedStack: null
        },
        events: {
            DragStarted: null,
            DragCancelled: null,
            DragPlaced: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#init", this ); }

                this._mergeAudio = new Source.Game.HexMerge.HexGamePresenter.AudioCue();
                this._collapseAudio = new Source.Game.HexMerge.HexGamePresenter.AudioCue();
                this._dragOffset = new UnityEngine.Vector3();
                this._hexSize = 1.0;
                this._stackHeightStep = 0.25;
                this._tileBaseHeight = 0.37;
                this._mergeDuration = 0.25;
                this._mergeTileStartDelay = 0.04;
                this._mergeArcHeight = 0.9;
                this._mergeArcDistanceFactor = 0.35;
                this._collapseDuration = 0.2;
                this._collapseTileStartDelay = 0.03;
                this._collapseVfxLeadTime = 0.08;
                this._draggablePickRadius = 1.0;
                this._draggableSnapDuration = 0.18;
                this._dragLiftHeight = 0.35;
                this._tilesByCoord = new (System.Collections.Generic.Dictionary$2(HexCoord,System.Collections.Generic.List$1(Source.Game.HexMerge.HexTileView))).ctor();
                this._animationQueue = new (System.Collections.Generic.Queue$1(Source.Game.HexMerge.HexGamePresenter.AnimationEvent)).ctor();
                this._animationSpeedModifier = 1.0;
                this._draggableStacks = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime)).ctor();
                this._draggableStacksBySlot = System.Array.init(3, null, Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime);
                this._draggableEnabledBySlot = System.Array.init([
                    true, 
                    true, 
                    true
                ], System.Boolean);
            }
        },
        methods: {
            /*Source.Game.HexMerge.HexGamePresenter.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#Start", this ); }

                this.BuildTileMaterials();
                this.BuildTilePool();
                this.BuildCollapseVfxPool();
                this.CenterCamera(this._hexGame.BoardModel);
                this.ReplaceBoardRoot();
                this.SpawnBoard(this._hexGame.BoardModel);
                this.SubscribeToBoard();
                this.SpawnInitialDraggableStacks();
                this._dragCellMarker.SetActive(false);
            },
            /*Source.Game.HexMerge.HexGamePresenter.Start end.*/

            /*Source.Game.HexMerge.HexGamePresenter.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#Update", this ); }

                this.HandleDragging();
            },
            /*Source.Game.HexMerge.HexGamePresenter.Update end.*/

            /*Source.Game.HexMerge.HexGamePresenter.SetDraggableEnabled start.*/
            SetDraggableEnabled: function (draggableIndex, isEnabled) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#SetDraggableEnabled", this ); }

                if (draggableIndex < 0 || draggableIndex >= this._draggableEnabledBySlot.length) {
                    return;
                }

                this._draggableEnabledBySlot[draggableIndex] = isEnabled;
                var stack = this.GetDraggableStackByIndex(draggableIndex);

                if (stack != null) {
                    stack.IsEnabled = isEnabled;
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.SetDraggableEnabled end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetDraggableWorldPosition start.*/
            GetDraggableWorldPosition: function (draggableIndex) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetDraggableWorldPosition", this ); }

                var stack = this.GetDraggableStackByIndex(draggableIndex);

                if (stack == null) {
                    return Source.Optional.Option$1(UnityEngine.Vector3).None.$clone();
                }

                return Source.Optional.Option$1(UnityEngine.Vector3).Some(stack.Root.position.$clone());
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetDraggableWorldPosition end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetGridCellWorldPosition start.*/
            GetGridCellWorldPosition: function (offsetCoord) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetGridCellWorldPosition", this ); }

                return this.GetCellWorldPosition(HexMath.FromOffset$1(offsetCoord));
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetGridCellWorldPosition end.*/

            /*Source.Game.HexMerge.HexGamePresenter.SpawnBoard start.*/
            SpawnBoard: function (boardModel) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#SpawnBoard", this ); }

                var layout = new HexLayout.$ctor1(this._hexSize, this.transform.position.$clone());
                this._tilesByCoord.clear();

                for (var y = 0; y < boardModel.Height; y = (y + 1) | 0) {
                    for (var x = 0; x < boardModel.Width; x = (x + 1) | 0) {
                        var coord = HexMath.FromOffset(x, y);
                        var cell = boardModel.getItem(coord);
                        var tiles = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexTileView)).$ctor2(cell.Count);
                        this._tilesByCoord.setItem(coord, tiles);

                        // spawn cell basement
                        UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this._cellPrefab, layout.HexToWorld(coord), pc.Quat.IDENTITY.clone(), this._boardRoot).name = System.String.format("Hex Cell {0} [{1},{2}]", coord, Bridge.box(x, System.Int32), Bridge.box(y, System.Int32));

                        for (var tileIndex = 0; tileIndex < cell.Count; tileIndex = (tileIndex + 1) | 0) {
                            var worldPosition = layout.HexToWorld(coord, this._tileBaseHeight + tileIndex * this._stackHeightStep);
                            var tileInstance = this.GetTileFromPool(worldPosition, pc.Quat.IDENTITY.clone());
                            this.ApplyTileColor(tileInstance, System.Array.getItem(cell.Tiles, tileIndex, HexTile).Color);
                            tiles.add(tileInstance);

                        }
                    }
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.SpawnBoard end.*/

            /*Source.Game.HexMerge.HexGamePresenter.CenterCamera start.*/
            CenterCamera: function (boardModel) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#CenterCamera", this ); }

                if (!UnityEngine.Object.op_Implicit(this._camera)) {
                    return;
                }

                var layout = new HexLayout.$ctor1(this._hexSize, this.transform.position.$clone());
                var bottomCoord = HexMath.FromOffset(0, 0);
                var topCoord = HexMath.FromOffset(((boardModel.Width - 1) | 0), ((boardModel.Height - 1) | 0));
                var bottomWorld = layout.HexToWorld(bottomCoord);
                var topWorld = layout.HexToWorld(topCoord);

                var cameraPosition = this._camera.transform.position.$clone();
                cameraPosition.z = (bottomWorld.z + topWorld.z) * 0.5;
                this._camera.transform.position = cameraPosition.$clone();
            },
            /*Source.Game.HexMerge.HexGamePresenter.CenterCamera end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ApplyTileColor start.*/
            ApplyTileColor: function (tileInstance, colorId) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ApplyTileColor", this ); }

                tileInstance.Renderer.sharedMaterial = this._tileMaterialsByColor[colorId];
            },
            /*Source.Game.HexMerge.HexGamePresenter.ApplyTileColor end.*/

            /*Source.Game.HexMerge.HexGamePresenter.BuildTileMaterials start.*/
            BuildTileMaterials: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#BuildTileMaterials", this ); }

                var baseMaterial = new UnityEngine.Material.$ctor2(this._tileShader);

                var colors = this._hexColorPaletteConfig.Colors;
                this._tileMaterialsByColor = System.Array.init(colors.length, null, UnityEngine.Material);

                for (var i = 0; i < colors.length; i = (i + 1) | 0) {
                    var material = new UnityEngine.Material.$ctor1(baseMaterial);
                    material.SetColor(Source.Game.HexMerge.HexGamePresenter.BaseColorId, colors[i]);
                    this._tileMaterialsByColor[i] = material;
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.BuildTileMaterials end.*/

            /*Source.Game.HexMerge.HexGamePresenter.BuildTilePool start.*/
            BuildTilePool: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#BuildTilePool", this ); }

                this._tilePool = new (Source.Pooling.MonoPool$1(Source.Game.HexMerge.HexTileView)).ctor(this._tilePrefab);
            },
            /*Source.Game.HexMerge.HexGamePresenter.BuildTilePool end.*/

            /*Source.Game.HexMerge.HexGamePresenter.BuildCollapseVfxPool start.*/
            BuildCollapseVfxPool: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#BuildCollapseVfxPool", this ); }

                this._collapseVfxPool = new (Source.Pooling.MonoPool$1(Source.Game.HexMerge.TileCollapseVfxView)).ctor(this._collapseVfxPrefab);
            },
            /*Source.Game.HexMerge.HexGamePresenter.BuildCollapseVfxPool end.*/

            /*Source.Game.HexMerge.HexGamePresenter.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._hexGame, null) && this._hexGame.BoardModel != null) {
                    this._hexGame.BoardModel.removeTileAdded(Bridge.fn.cacheBind(this, this.OnBoardTileAdded));
                    this._hexGame.BoardModel.removeMerged(Bridge.fn.cacheBind(this, this.OnBoardMerged));
                    this._hexGame.BoardModel.removeCollapsed(Bridge.fn.cacheBind(this, this.OnBoardCollapsed));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._hexGame, null)) {
                    this._hexGame.removeGameFinished(Bridge.fn.cacheBind(this, this.OnGameFinished));
                }

                if (this._animationQueueRoutine != null) {
                    this.StopCoroutine$2(this._animationQueueRoutine);
                }

                if (UnityEngine.Component.op_Inequality(this._boardRoot, null)) {
                    this.ClearBoardRoot();
                }

                if (this._tileMaterialsByColor == null) {
                    return;
                }

                for (var i = 0; i < this._tileMaterialsByColor.length; i = (i + 1) | 0) {
                    var material = this._tileMaterialsByColor[i];

                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.Object.Destroy(material);
                    } else {
                        UnityEngine.Object.DestroyImmediate(material);
                    }
                }

                this._tileMaterialsByColor = null;
            },
            /*Source.Game.HexMerge.HexGamePresenter.OnDestroy end.*/

            /*Source.Game.HexMerge.HexGamePresenter.SubscribeToBoard start.*/
            SubscribeToBoard: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#SubscribeToBoard", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._hexGame, null) || this._hexGame.BoardModel == null) {
                    return;
                }

                this._hexGame.BoardModel.removeTileAdded(Bridge.fn.cacheBind(this, this.OnBoardTileAdded));
                this._hexGame.BoardModel.removeMerged(Bridge.fn.cacheBind(this, this.OnBoardMerged));
                this._hexGame.BoardModel.removeCollapsed(Bridge.fn.cacheBind(this, this.OnBoardCollapsed));
                this._hexGame.BoardModel.addTileAdded(Bridge.fn.cacheBind(this, this.OnBoardTileAdded));
                this._hexGame.BoardModel.addMerged(Bridge.fn.cacheBind(this, this.OnBoardMerged));
                this._hexGame.BoardModel.addCollapsed(Bridge.fn.cacheBind(this, this.OnBoardCollapsed));
                this._hexGame.removeGameFinished(Bridge.fn.cacheBind(this, this.OnGameFinished));
                this._hexGame.addGameFinished(Bridge.fn.cacheBind(this, this.OnGameFinished));
            },
            /*Source.Game.HexMerge.HexGamePresenter.SubscribeToBoard end.*/

            /*Source.Game.HexMerge.HexGamePresenter.OnGameFinished start.*/
            OnGameFinished: function (_) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#OnGameFinished", this ); }

                Luna.Unity.LifeCycle.GameEnded();
                this._hexGameFinishedView.Activate();
                this._hexGameFinishedView.addClicked(function () {
                    Luna.Unity.Playable.InstallFullGame();
                });
            },
            /*Source.Game.HexMerge.HexGamePresenter.OnGameFinished end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ReplaceBoardRoot start.*/
            ReplaceBoardRoot: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ReplaceBoardRoot", this ); }

                if (UnityEngine.Component.op_Inequality(this._boardRoot, null)) {
                    this.ReleaseAllTiles();
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.MonoBehaviour.Destroy(this._boardRoot.gameObject);
                    } else {
                        UnityEngine.Object.DestroyImmediate(this._boardRoot.gameObject);
                    }
                }

                var boardRoot = new UnityEngine.GameObject.$ctor2("BoardView");
                boardRoot.transform.SetParent(this.transform, false);
                this._boardRoot = boardRoot.transform;
            },
            /*Source.Game.HexMerge.HexGamePresenter.ReplaceBoardRoot end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ClearBoardRoot start.*/
            ClearBoardRoot: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ClearBoardRoot", this ); }

                if (UnityEngine.Component.op_Equality(this._boardRoot, null)) {
                    return;
                }

                for (var i = (this._boardRoot.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var child = this._boardRoot.GetChild(i).gameObject;

                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.MonoBehaviour.Destroy(child);
                    } else {
                        UnityEngine.Object.DestroyImmediate(child);
                    }
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.ClearBoardRoot end.*/

            /*Source.Game.HexMerge.HexGamePresenter.OnBoardTileAdded start.*/
            OnBoardTileAdded: function (added) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#OnBoardTileAdded", this ); }

                this._animationQueue.Enqueue(Source.Game.HexMerge.HexGamePresenter.AnimationEvent.CreateTileAdded(added));
                this.TryStartAnimationQueue();
            },
            /*Source.Game.HexMerge.HexGamePresenter.OnBoardTileAdded end.*/

            /*Source.Game.HexMerge.HexGamePresenter.OnBoardMerged start.*/
            OnBoardMerged: function (plan) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#OnBoardMerged", this ); }

                this._animationQueue.Enqueue(Source.Game.HexMerge.HexGamePresenter.AnimationEvent.CreateMerged(plan));
                this.TryStartAnimationQueue();
            },
            /*Source.Game.HexMerge.HexGamePresenter.OnBoardMerged end.*/

            /*Source.Game.HexMerge.HexGamePresenter.OnBoardCollapsed start.*/
            OnBoardCollapsed: function (collapse) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#OnBoardCollapsed", this ); }

                this._animationQueue.Enqueue(Source.Game.HexMerge.HexGamePresenter.AnimationEvent.CreateCollapsed(collapse));
                this.TryStartAnimationQueue();
            },
            /*Source.Game.HexMerge.HexGamePresenter.OnBoardCollapsed end.*/

            /*Source.Game.HexMerge.HexGamePresenter.HandleDragging start.*/
            HandleDragging: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#HandleDragging", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.TryBeginDrag();
                }

                if (this._draggedStack == null) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    this.UpdateDraggedStackPosition();
                }

                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.EndDrag();
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.HandleDragging end.*/

            /*Source.Game.HexMerge.HexGamePresenter.TryBeginDrag start.*/
            TryBeginDrag: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#TryBeginDrag", this ); }

                if (this._animationQueueRoutine != null || this._activeMergeTweens > 0) {
                    return;
                }

                var pointerWorld = this.GetPointerWorldPoint(this._tileBaseHeight);

                if (!pointerWorld.IsSome) {
                    return;
                }

                var bestDistanceSqr = this._draggablePickRadius * this._draggablePickRadius;
                var bestStack = null;

                for (var i = 0; i < this._draggableStacks.Count; i = (i + 1) | 0) {
                    var stack = this._draggableStacks.getItem(i);

                    if (stack.IsAnimating || !stack.IsEnabled) {
                        continue;
                    }

                    var stackPosition = stack.Root.position.$clone();
                    var distanceSqr = new pc.Vec2( stackPosition.x - pointerWorld.Value.x, stackPosition.z - pointerWorld.Value.z ).lengthSq();

                    if (distanceSqr > bestDistanceSqr) {
                        continue;
                    }

                    bestDistanceSqr = distanceSqr;
                    bestStack = stack;
                }

                if (bestStack == null) {
                    return;
                }

                this._draggedStack = bestStack;
                this._dragOffset = bestStack.Root.position.$clone().sub( pointerWorld.Value );
                this._dragOffset.y = 0.0;
                this._dragBaseY = bestStack.Root.position.y;
                var liftedPosition = bestStack.Root.position.$clone();
                liftedPosition.y = this._dragBaseY + this._dragLiftHeight;
                bestStack.Root.position = liftedPosition.$clone();
                !Bridge.staticEquals(this.DragStarted, null) ? this.DragStarted(bestStack.SlotIndex) : null;
            },
            /*Source.Game.HexMerge.HexGamePresenter.TryBeginDrag end.*/

            /*Source.Game.HexMerge.HexGamePresenter.UpdateDraggedStackPosition start.*/
            UpdateDraggedStackPosition: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#UpdateDraggedStackPosition", this ); }

                var pointerWorld = this.GetPointerWorldPoint(this._draggedStack.Root.position.y);

                if (!pointerWorld.IsSome) {
                    this._dragCellMarker.SetActive(false);
                    return;
                }

                var targetPosition = pointerWorld.Value.$clone().add( this._dragOffset );
                targetPosition.y = this._dragBaseY + this._dragLiftHeight;
                this._draggedStack.Root.position = targetPosition.$clone();

                this.UpdateDragCellMarker(targetPosition);
            },
            /*Source.Game.HexMerge.HexGamePresenter.UpdateDraggedStackPosition end.*/

            /*Source.Game.HexMerge.HexGamePresenter.EndDrag start.*/
            EndDrag: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#EndDrag", this ); }

                var draggedStack = this._draggedStack;
                this._draggedStack = null;
                this._dragCellMarker.SetActive(false);

                var coord = this.GetDropCoord(draggedStack.Root.position);

                if (coord.IsSome) {
                    if (!Bridge.staticEquals(this.CanPlaceDraggedStack, null) && !this.CanPlaceDraggedStack(draggedStack.SlotIndex, coord.Value)) {
                        !Bridge.staticEquals(this.DragCancelled, null) ? this.DragCancelled(draggedStack.SlotIndex) : null;
                        this.ReturnDraggedStackToSpawn(draggedStack);
                        return;
                    }

                    this.PlaceDraggedStack(draggedStack, coord.Value);
                    return;
                }

                !Bridge.staticEquals(this.DragCancelled, null) ? this.DragCancelled(draggedStack.SlotIndex) : null;
                this.ReturnDraggedStackToSpawn(draggedStack);
            },
            /*Source.Game.HexMerge.HexGamePresenter.EndDrag end.*/

            /*Source.Game.HexMerge.HexGamePresenter.TryStartAnimationQueue start.*/
            TryStartAnimationQueue: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#TryStartAnimationQueue", this ); }

                if (this._animationQueueRoutine != null || !this.isActiveAndEnabled) {
                    return;
                }

                this._animationQueueRoutine = this.StartCoroutine$1(this.ProcessAnimationQueue());
            },
            /*Source.Game.HexMerge.HexGamePresenter.TryStartAnimationQueue end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ProcessAnimationQueue start.*/
            ProcessAnimationQueue: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ProcessAnimationQueue", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    animationEvent,
                    mergeBatch,
                    collapseBatch,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Allow all model events emitted in the current frame to be enqueued
                                        // before we batch contiguous merge events.
                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if ( this._animationQueue.Count > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 2: {
                                    animationEvent = { v : this._animationQueue.Dequeue() };

                                        if (animationEvent.v.Kind === Source.Game.HexMerge.HexGamePresenter.AnimationEventKind.TileAdded) {
                                            this.ApplyTileAdded(animationEvent.v.TileAdded);
                                            $step = 1;
                                            continue;
                                        }

                                        if (animationEvent.v.Kind === Source.Game.HexMerge.HexGamePresenter.AnimationEventKind.Merged) {
                                            $step = 3;
                                            continue;
                                        } else  {
                                            $step = 8;
                                            continue;
                                        }
                                }
                                case 3: {
                                    mergeBatch = (function ($me, animationEvent) {
                                                return function (_o1) {
                                                    _o1.add(animationEvent.v.Merge);
                                                    return _o1;
                                                };
                                            })(this, animationEvent)(new (System.Collections.Generic.List$1(HexMergePlan)).ctor());

                                        while (this._animationQueue.Count > 0 && this._animationQueue.Peek().Kind === Source.Game.HexMerge.HexGamePresenter.AnimationEventKind.Merged) {
                                            mergeBatch.add(this._animationQueue.Dequeue().Merge);
                                        }

                                        this.StartMergeBatchAnimation(mergeBatch);
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if ( this._activeMergeTweens > 0 ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    $step = 10;
                                    continue;
                                }
                                case 8: {
                                    collapseBatch = (function ($me, animationEvent) {
                                                return function (_o2) {
                                                    _o2.add(animationEvent.v.Collapse);
                                                    return _o2;
                                                };
                                            })(this, animationEvent)(new (System.Collections.Generic.List$1(HexCollapsed)).ctor());

                                        while (this._animationQueue.Count > 0 && this._animationQueue.Peek().Kind === Source.Game.HexMerge.HexGamePresenter.AnimationEventKind.Collapsed) {
                                            collapseBatch.add(this._animationQueue.Dequeue().Collapse);
                                        }

                                        $enumerator.current = this.AnimateCollapseBatch(collapseBatch);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    this._animationSpeedModifier += 0.3 * collapseBatch.Count;
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 11: {
                                    this._animationQueueRoutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Source.Game.HexMerge.HexGamePresenter.ProcessAnimationQueue end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ApplyTileAdded start.*/
            ApplyTileAdded: function (added) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ApplyTileAdded", this ); }

                var tiles = { };
                if (!this._tilesByCoord.tryGetValue(added.Coord, tiles)) {
                    tiles.v = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexTileView)).ctor();
                    this._tilesByCoord.setItem(added.Coord, tiles.v);
                }

                var index = Math.max(0, Math.min(added.Index, tiles.v.Count));
                var tileInstance = this.GetTileFromPool(this.GetTileWorldPosition(added.Coord, index), pc.Quat.IDENTITY.clone());
                this.ApplyTileColor(tileInstance, added.Tile.Color);
                tiles.v.insert(index, tileInstance);
                this.RepositionCellTiles(added.Coord, tiles.v);
            },
            /*Source.Game.HexMerge.HexGamePresenter.ApplyTileAdded end.*/

            /*Source.Game.HexMerge.HexGamePresenter.SpawnInitialDraggableStacks start.*/
            SpawnInitialDraggableStacks: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#SpawnInitialDraggableStacks", this ); }

                var slotCount = UnityEngine.Mathf.Min(this._draggableStacksBySlot.length, this._draggableSpawnSpots.length);

                for (var slotIndex = 0; slotIndex < slotCount; slotIndex = (slotIndex + 1) | 0) {
                    this.TrySpawnNextDraggableStack(slotIndex);
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.SpawnInitialDraggableStacks end.*/

            /*Source.Game.HexMerge.HexGamePresenter.TrySpawnNextDraggableStack start.*/
            TrySpawnNextDraggableStack: function (slotIndex) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#TrySpawnNextDraggableStack", this ); }

                var stackSetups = this._draggableStackSequenceConfig.Stacks;

                if (this._nextDraggableStackIndex >= stackSetups.length) {
                    return;
                }

                var spawnSpot = this._draggableSpawnSpots[slotIndex];
                var stackSetup = stackSetups[Bridge.identity(this._nextDraggableStackIndex, ((this._nextDraggableStackIndex = (this._nextDraggableStackIndex + 1) | 0)))].$clone();
                var stackRuntime = this.CreateDraggableStackRuntime(stackSetup, slotIndex, spawnSpot.position);
                stackRuntime.IsEnabled = this._draggableEnabledBySlot[slotIndex];
                this._draggableStacks.add(stackRuntime);
                this._draggableStacksBySlot[slotIndex] = stackRuntime;
            },
            /*Source.Game.HexMerge.HexGamePresenter.TrySpawnNextDraggableStack end.*/

            /*Source.Game.HexMerge.HexGamePresenter.CreateDraggableStackRuntime start.*/
            CreateDraggableStackRuntime: function (stackSetup, slotIndex, position) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#CreateDraggableStackRuntime", this ); }

                var stackRoot = new UnityEngine.GameObject.$ctor2(System.String.format("DraggableStack_{0}_{1}", Bridge.box(slotIndex, System.Int32), Bridge.box(((this._nextDraggableStackIndex - 1) | 0), System.Int32)));
                var stackTransform = stackRoot.transform;
                stackTransform.SetParent(this.transform, false);
                stackTransform.position = position.$clone();

                var tiles = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexTileView)).ctor();
                var groups = stackSetup.Groups;
                var tileIndex = 0;

                for (var groupIndex = 0; groupIndex < groups.length; groupIndex = (groupIndex + 1) | 0) {
                    var group = groups[groupIndex].$clone();

                    for (var i = 0; i < group.Amount; i = (i + 1) | 0) {
                        var tile = this.GetTileFromPool(position, pc.Quat.IDENTITY.clone());
                        this.ApplyTileColor(tile, group.Color);
                        tile.transform.SetParent(stackTransform, false);
                        tile.transform.localPosition = new pc.Vec3( 0.0, tileIndex * this._stackHeightStep, 0.0 );
                        tile.transform.localRotation = pc.Quat.IDENTITY.clone();
                        tile.transform.localScale = new pc.Vec3( 1, 1, 1 );
                        tiles.add(tile);
                        tileIndex = (tileIndex + 1) | 0;
                    }
                }

                return new Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime(stackSetup.$clone(), slotIndex, position.$clone(), stackTransform, tiles);
            },
            /*Source.Game.HexMerge.HexGamePresenter.CreateDraggableStackRuntime end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetPointerWorldPoint start.*/
            GetPointerWorldPoint: function (planeY) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetPointerWorldPoint", this ); }

                var pointerRay = this._camera.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var plane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), new pc.Vec3( 0.0, planeY, 0.0 ));
                var enter = { };

                if (!plane.Raycast(pointerRay, enter)) {
                    return Source.Optional.Option$1(UnityEngine.Vector3).None.$clone();
                }

                return Source.Optional.Option$1(UnityEngine.Vector3).Some(pointerRay.GetPoint(enter.v));
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetPointerWorldPoint end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetDropCoord start.*/
            GetDropCoord: function (stackPosition) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetDropCoord", this ); }

                var layout = new HexLayout.$ctor1(this._hexSize, this.transform.position.$clone());
                var coord = layout.WorldToHex(stackPosition);

                if (!this._hexGame.BoardModel.Exist(coord)) {
                    return Source.Optional.Option$1(HexCoord).None.$clone();
                }

                return this._hexGame.BoardModel.getItem(coord).IsEmpty ? Source.Optional.Option$1(HexCoord).Some(coord) : Source.Optional.Option$1(HexCoord).None.$clone();
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetDropCoord end.*/

            /*Source.Game.HexMerge.HexGamePresenter.UpdateDragCellMarker start.*/
            UpdateDragCellMarker: function (stackPosition) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#UpdateDragCellMarker", this ); }

                var coord = this.GetDropCoord(stackPosition);

                if (!coord.IsSome) {
                    this._dragCellMarker.SetActive(false);
                    return;
                }

                this._dragCellMarker.SetActive(true);
                this._dragCellMarker.transform.position = this.GetCellWorldPosition(coord.Value);
            },
            /*Source.Game.HexMerge.HexGamePresenter.UpdateDragCellMarker end.*/

            /*Source.Game.HexMerge.HexGamePresenter.PlaceDraggedStack start.*/
            PlaceDraggedStack: function (stack, coord) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#PlaceDraggedStack", this ); }

                var $t;
                stack.IsAnimating = true;

                if (Bridge.referenceEquals(this._draggableStacksBySlot[stack.SlotIndex], stack)) {
                    this._draggableStacksBySlot[stack.SlotIndex] = null;
                    this.TrySpawnNextDraggableStack(stack.SlotIndex);
                }

                var startPosition = stack.Root.position.$clone();
                var destination = this.GetDraggableStackWorldPosition(coord);
                Tweens.TweenExtension.AddTween$2(UnityEngine.Transform, System.Single, stack.Root.gameObject, ($t = new Tweens.FloatTween(), $t.from = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(0.0), $t.to = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(1.0), $t.duration = this._draggableSnapDuration, $t.easeType = Tweens.EaseType.SineInOut, $t.onUpdate = function (_, progress) {
                    stack.Root.position = new pc.Vec3().lerpUnclamped( startPosition, destination, progress );
                }, $t.onFinally = Bridge.fn.bind(this, function (_) {
                    stack.Root.position = destination.$clone();
                    !Bridge.staticEquals(this.DragPlaced, null) ? this.DragPlaced(stack.SlotIndex, coord) : null;
                    this.ReleaseDraggableStack(stack);
                    this._hexGame.PlaceDraggableStack(coord, stack.Setup);
                }), $t));
            },
            /*Source.Game.HexMerge.HexGamePresenter.PlaceDraggedStack end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ReturnDraggedStackToSpawn start.*/
            ReturnDraggedStackToSpawn: function (stack) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ReturnDraggedStackToSpawn", this ); }

                var $t;
                stack.IsAnimating = true;
                var startPosition = stack.Root.position.$clone();
                var destination = stack.HomePosition.$clone();
                Tweens.TweenExtension.AddTween$2(UnityEngine.Transform, System.Single, stack.Root.gameObject, ($t = new Tweens.FloatTween(), $t.from = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(0.0), $t.to = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(1.0), $t.duration = this._draggableSnapDuration, $t.easeType = Tweens.EaseType.SineInOut, $t.onUpdate = function (_, progress) {
                    stack.Root.position = new pc.Vec3().lerpUnclamped( startPosition, destination, progress );
                }, $t.onFinally = function (_) {
                    stack.Root.position = destination.$clone();
                    stack.IsAnimating = false;
                }, $t));
            },
            /*Source.Game.HexMerge.HexGamePresenter.ReturnDraggedStackToSpawn end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetDraggableStackWorldPosition start.*/
            GetDraggableStackWorldPosition: function (coord) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetDraggableStackWorldPosition", this ); }

                var layout = new HexLayout.$ctor1(this._hexSize, this.transform.position.$clone());
                return layout.HexToWorld(coord, this._tileBaseHeight);
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetDraggableStackWorldPosition end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetCellWorldPosition start.*/
            GetCellWorldPosition: function (coord) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetCellWorldPosition", this ); }

                var layout = new HexLayout.$ctor1(this._hexSize, this.transform.position.$clone());
                return layout.HexToWorld(coord);
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetCellWorldPosition end.*/

            /*Source.Game.HexMerge.HexGamePresenter.StartMergeBatchAnimation start.*/
            StartMergeBatchAnimation: function (mergeBatch) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#StartMergeBatchAnimation", this ); }

                for (var batchIndex = 0; batchIndex < mergeBatch.Count; batchIndex = (batchIndex + 1) | 0) {
                    this.StartMergeAnimation(mergeBatch.getItem(batchIndex), batchIndex * this._mergeTileStartDelay);
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.StartMergeBatchAnimation end.*/

            /*Source.Game.HexMerge.HexGamePresenter.StartMergeAnimation start.*/
            StartMergeAnimation: function (plan, batchDelay) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#StartMergeAnimation", this ); }

                var $t;
                var fromTiles = { };
                if (!this._tilesByCoord.tryGetValue(plan.From, fromTiles)) {
                    return;
                }

                fromTiles.v.RemoveAll(function (tile) {
                    return UnityEngine.MonoBehaviour.op_Equality(tile, null);
                });

                if (fromTiles.v.Count === 0) {
                    return;
                }
                var toTiles = { };

                if (!this._tilesByCoord.tryGetValue(plan.To, toTiles)) {
                    toTiles.v = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexTileView)).ctor();
                    this._tilesByCoord.setItem(plan.To, toTiles.v);
                }

                toTiles.v.RemoveAll(function (tile) {
                    return UnityEngine.MonoBehaviour.op_Equality(tile, null);
                });

                var movingTiles = function (_o1) {
                        _o1.add(fromTiles.v.getItem(((fromTiles.v.Count - 1) | 0)));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexTileView)).ctor());
                fromTiles.v.removeAt(((fromTiles.v.Count - 1) | 0));
                toTiles.v.AddRange(movingTiles);
                var mergeDuration = this.GetAdjustedDuration(this._mergeDuration);

                for (var i = 0; i < movingTiles.Count; i = (i + 1) | 0) {
                    var tile = { v : movingTiles.getItem(i) };
                    var start = { v : tile.v.transform.position.$clone() };
                    var destination = { v : this.GetTileWorldPosition(plan.To, ((toTiles.v.Count + i) | 0)) };
                    var delay = batchDelay + (i * this._mergeTileStartDelay);
                    var startRotation = { v : tile.v.transform.rotation.$clone() };
                    var mergeDirection = (destination.v.$clone().sub( start.v ));
                    mergeDirection.y = 0.0;
                    var flipAxis = { v : mergeDirection.lengthSq() > 0.0001 ? new pc.Vec3().cross( pc.Vec3.UP.clone(), mergeDirection.clone().normalize() ) : pc.Vec3.RIGHT.clone() };
                    this._activeMergeTweens = (this._activeMergeTweens + 1) | 0;
                    Tweens.TweenExtension.AddTween$2(UnityEngine.Transform, System.Single, tile.v.gameObject, ($t = new Tweens.FloatTween(), $t.from = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(0.0), $t.to = Tweens.Core.Nullable$1(System.Single).op_Implicit$1(1.0), $t.duration = mergeDuration, $t.delay = delay, $t.easeType = Tweens.EaseType.SineInOut, $t.onStart = Bridge.fn.bind(this, function (_) {
                        this.PlayTileAudio(this._mergeAudio);
                    }), $t.onUpdate = (function ($me, tile, start, destination, flipAxis, startRotation) {
                        return Bridge.fn.bind($me, function (_, progress) {
                            tile.v.transform.position = this.EvaluateArc(start.v.$clone(), destination.v.$clone(), progress);
                            var flipAngle = progress * 180.0;
                            tile.v.transform.rotation = new pc.Quat().setFromAxisAngle( flipAxis.v, flipAngle ).clone().mul( startRotation.v );
                        });
                    })(this, tile, start, destination, flipAxis, startRotation), $t.onFinally = (function ($me, tile, destination, flipAxis, startRotation) {
                        return Bridge.fn.bind($me, function (_) {
                            tile.v.transform.position = destination.v.$clone();
                            tile.v.transform.rotation = new pc.Quat().setFromAxisAngle( flipAxis.v, 180.0 ).clone().mul( startRotation.v );
                            this._activeMergeTweens = (this._activeMergeTweens - 1) | 0;
                        });
                    })(this, tile, destination, flipAxis, startRotation), $t));
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.StartMergeAnimation end.*/

            /*Source.Game.HexMerge.HexGamePresenter.AnimateCollapseBatch start.*/
            AnimateCollapseBatch: function (collapseBatch) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#AnimateCollapseBatch", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    animations,
                    collapseVfxRequests,
                    collapseDuration,
                    collapse,
                    tiles,
                    startIndex,
                    count,
                    collapseTiles,
                    lastCollapseFxPosition,
                    lastCollapseFxTime,
                    topToBottomIndex,
                    tile,
                    finishTime,
                    vfxDelay,
                    completedTweens,
                    totalTweens,
                    animation,
                    topToBottomIndex1,
                    tile1,
                    delay,
                    $t,
                    removalsByCoord,
                    animation1,
                    removals,
                    pair,
                    tiles1,
                    animation2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    animations = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexGamePresenter.CollapseAnimation)).$ctor2(collapseBatch.Count);
                                        collapseVfxRequests = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest)).$ctor2(collapseBatch.Count);
                                        collapseDuration = this.GetAdjustedDuration(this._collapseDuration);

                                        for (var batchIndex = 0; batchIndex < collapseBatch.Count; batchIndex = (batchIndex + 1) | 0) {
                                            collapse = collapseBatch.getItem(batchIndex);
                                            tiles = { };

                                            if (!this._tilesByCoord.tryGetValue(collapse.Coord, tiles)) {
                                                continue;
                                            }

                                            tiles.v.RemoveAll(function (tile) {
                                                return UnityEngine.MonoBehaviour.op_Equality(tile, null);
                                            });

                                            startIndex = Math.max(0, Math.min(collapse.StartIndex, tiles.v.Count));
                                            count = UnityEngine.Mathf.Min(collapse.Count, ((tiles.v.Count - startIndex) | 0));

                                            if (count <= 0) {
                                                continue;
                                            }

                                            collapseTiles = tiles.v.GetRange(startIndex, count);
                                            animations.add(new Source.Game.HexMerge.HexGamePresenter.CollapseAnimation.$ctor1(collapse.Coord, startIndex, count, collapse.Color, collapseTiles));
                                            lastCollapseFxPosition = Bridge.getDefaultValue(UnityEngine.Vector3);
                                            lastCollapseFxTime = -1.0;

                                            for (var i = 0; i < collapseTiles.Count; i = (i + 1) | 0) {
                                                topToBottomIndex = (((collapseTiles.Count - 1) | 0) - i) | 0;
                                                tile = collapseTiles.getItem(topToBottomIndex);
                                                finishTime = (i * this._collapseTileStartDelay) + collapseDuration;

                                                if (finishTime >= lastCollapseFxTime) {
                                                    lastCollapseFxTime = finishTime;
                                                    lastCollapseFxPosition = tile.transform.position.$clone();
                                                }
                                            }

                                            vfxDelay = UnityEngine.Mathf.Max(0.0, lastCollapseFxTime - this._collapseVfxLeadTime);
                                            collapseVfxRequests.add(new Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest.$ctor1(lastCollapseFxPosition.$clone(), this._hexColorPaletteConfig.GetColor(collapse.Color), vfxDelay));
                                        }

                                        for (var i1 = 0; i1 < collapseVfxRequests.Count; i1 = (i1 + 1) | 0) {
                                            this.StartCoroutine$1(this.PlayCollapseVfx(collapseVfxRequests.getItem(i1)));
                                        }

                                        completedTweens = 0;
                                        totalTweens = 0;

                                        for (var animationIndex = 0; animationIndex < animations.Count; animationIndex = (animationIndex + 1) | 0) {
                                            animation = animations.getItem(animationIndex);

                                            for (var i2 = 0; i2 < animation.Tiles.Count; i2 = (i2 + 1) | 0) {
                                                topToBottomIndex1 = (((animation.Tiles.Count - 1) | 0) - i2) | 0;
                                                tile1 = { v : animation.Tiles.getItem(topToBottomIndex1) };
                                                delay = i2 * this._collapseTileStartDelay;
                                                totalTweens = (totalTweens + 1) | 0;
                                                Tweens.TweenExtension.AddTween$2(UnityEngine.Transform, UnityEngine.Vector3, tile1.v.gameObject, ($t = new Tweens.LocalScaleTween(), $t.to = Tweens.Core.Nullable$1(UnityEngine.Vector3).op_Implicit$1(pc.Vec3.ZERO.clone()), $t.duration = collapseDuration, $t.delay = delay, $t.easeType = Tweens.EaseType.SineInOut, $t.onStart = Bridge.fn.bind(this, function (_) {
                                                    this.PlayTileAudio(this._collapseAudio);
                                                }), $t.onFinally = (function ($me, tile1) {
                                                    return Bridge.fn.bind($me, function (_) {
                                                        if (UnityEngine.MonoBehaviour.op_Inequality(tile1.v, null)) {
                                                            this.ReleaseTile(tile1.v);
                                                        }
                                                        completedTweens = (completedTweens + 1) | 0;
                                                    });
                                                })(this, tile1), $t));
                                            }
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( completedTweens < totalTweens ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    removalsByCoord = new (System.Collections.Generic.Dictionary$2(HexCoord,System.Collections.Generic.List$1(Source.Game.HexMerge.HexGamePresenter.CollapseAnimation))).ctor();

                                        for (var i3 = 0; i3 < animations.Count; i3 = (i3 + 1) | 0) {
                                            animation1 = animations.getItem(i3);
                                            removals = { };

                                            if (!removalsByCoord.tryGetValue(animation1.Coord, removals)) {
                                                removals.v = new (System.Collections.Generic.List$1(Source.Game.HexMerge.HexGamePresenter.CollapseAnimation)).ctor();
                                                removalsByCoord.setItem(animation1.Coord, removals.v);
                                            }

                                            removals.v.add(animation1);
                                        }

                                        $t = Bridge.getEnumerator(removalsByCoord);
                                        try {
                                            while ($t.moveNext()) {
                                                pair = $t.Current;
                                                tiles1 = this._tilesByCoord.getItem(pair.key);
                                                pair.value.Sort$2(function (left, right) {
                                                    return Bridge.compare(right.StartIndex, left.StartIndex);
                                                });

                                                for (var i4 = 0; i4 < pair.value.Count; i4 = (i4 + 1) | 0) {
                                                    animation2 = pair.value.getItem(i4);
                                                    tiles1.RemoveRange(animation2.StartIndex, animation2.Count);
                                                }

                                                this.RepositionCellTiles(pair.key, tiles1);
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Source.Game.HexMerge.HexGamePresenter.AnimateCollapseBatch end.*/

            /*Source.Game.HexMerge.HexGamePresenter.RepositionCellTiles start.*/
            RepositionCellTiles: function (coord, tiles) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#RepositionCellTiles", this ); }

                for (var i = 0; i < tiles.Count; i = (i + 1) | 0) {
                    var tile = tiles.getItem(i);

                    if (UnityEngine.MonoBehaviour.op_Equality(tile, null)) {
                        continue;
                    }

                    tile.transform.position = this.GetTileWorldPosition(coord, i);
                    tile.transform.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.RepositionCellTiles end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetTileWorldPosition start.*/
            GetTileWorldPosition: function (coord, tileIndex) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetTileWorldPosition", this ); }

                var layout = new HexLayout.$ctor1(this._hexSize, this.transform.position.$clone());
                return layout.HexToWorld(coord, this._tileBaseHeight + tileIndex * this._stackHeightStep);
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetTileWorldPosition end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetTileFromPool start.*/
            GetTileFromPool: function (position, rotation) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetTileFromPool", this ); }

                var tile = this._tilePool.Get();
                var tileTransform = tile.transform;
                tileTransform.SetParent(this._boardRoot, false);
                tileTransform.SetPositionAndRotation(position, rotation);
                tileTransform.localScale = new pc.Vec3( 1, 1, 1 );
                return tile;
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetTileFromPool end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ReleaseTile start.*/
            ReleaseTile: function (tile) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ReleaseTile", this ); }

                tile.transform.SetParent(this.transform, false);
                tile.transform.localScale = new pc.Vec3( 1, 1, 1 );
                this._tilePool.Release(tile);
            },
            /*Source.Game.HexMerge.HexGamePresenter.ReleaseTile end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ReleaseDraggableStack start.*/
            ReleaseDraggableStack: function (stack) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ReleaseDraggableStack", this ); }

                for (var i = 0; i < stack.Tiles.Count; i = (i + 1) | 0) {
                    this.ReleaseTile(stack.Tiles.getItem(i));
                }

                this._draggableStacks.remove(stack);

                if (Bridge.referenceEquals(this._draggableStacksBySlot[stack.SlotIndex], stack)) {
                    this._draggableStacksBySlot[stack.SlotIndex] = null;
                }

                if (UnityEngine.Application.isPlaying) {
                    UnityEngine.MonoBehaviour.Destroy(stack.Root.gameObject);
                } else {
                    UnityEngine.Object.DestroyImmediate(stack.Root.gameObject);
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.ReleaseDraggableStack end.*/

            /*Source.Game.HexMerge.HexGamePresenter.PlayCollapseVfx start.*/
            PlayCollapseVfx: function (collapseVfxRequest) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#PlayCollapseVfx", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    OnViewCompleted,
                    collapseVfx,
                    collapseVfxTransform,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    OnViewCompleted = null;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(collapseVfxRequest.Delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    collapseVfx = this._collapseVfxPool.Get();
                                        collapseVfxTransform = collapseVfx.transform;
                                        collapseVfxTransform.SetParent(this.transform, false);
                                        collapseVfxTransform.position = collapseVfxRequest.Position.$clone().add( new pc.Vec3( 0.0, 0.1, 0.0 ) );


                                        OnViewCompleted = Bridge.fn.bind(this, function (view) {
                                            view.removeCompleted(OnViewCompleted);
                                            view.transform.SetParent(this.transform, false);
                                            this._collapseVfxPool.Release(view);
                                        });

                                        collapseVfx.addCompleted(OnViewCompleted);
                                        collapseVfx.Play(collapseVfxRequest.Color);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Source.Game.HexMerge.HexGamePresenter.PlayCollapseVfx end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ReleaseAllTiles start.*/
            ReleaseAllTiles: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ReleaseAllTiles", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._tilesByCoord);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current;
                        var tiles = pair.value;

                        for (var i = 0; i < tiles.Count; i = (i + 1) | 0) {
                            var tile = tiles.getItem(i);

                            if (UnityEngine.MonoBehaviour.op_Inequality(tile, null)) {
                                this.ReleaseTile(tile);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this._tilesByCoord.clear();
            },
            /*Source.Game.HexMerge.HexGamePresenter.ReleaseAllTiles end.*/

            /*Source.Game.HexMerge.HexGamePresenter.ReleaseAllDraggableStacks start.*/
            ReleaseAllDraggableStacks: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#ReleaseAllDraggableStacks", this ); }

                for (var i = (this._draggableStacks.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    this.ReleaseDraggableStack(this._draggableStacks.getItem(i));
                }

                for (var i1 = 0; i1 < this._draggableStacksBySlot.length; i1 = (i1 + 1) | 0) {
                    this._draggableStacksBySlot[i1] = null;
                }
            },
            /*Source.Game.HexMerge.HexGamePresenter.ReleaseAllDraggableStacks end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetDraggableStackByIndex start.*/
            GetDraggableStackByIndex: function (draggableIndex) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetDraggableStackByIndex", this ); }

                if (draggableIndex < 0 || draggableIndex >= this._draggableStacksBySlot.length) {
                    return null;
                }

                return this._draggableStacksBySlot[draggableIndex];
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetDraggableStackByIndex end.*/

            /*Source.Game.HexMerge.HexGamePresenter.EvaluateArc start.*/
            EvaluateArc: function (start, destination, progress) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#EvaluateArc", this ); }

                var control = (start.$clone().add( destination )).clone().scale( 0.5 );
                var horizontalDistance = new pc.Vec2( start.x, start.z ).sub( new pc.Vec2( destination.x, destination.z ) ).length();
                control.y = UnityEngine.Mathf.Max(start.y, destination.y) + this._mergeArcHeight + (horizontalDistance * this._mergeArcDistanceFactor);

                var oneMinusT = 1.0 - progress;
                return (start.clone().scale( oneMinusT * oneMinusT )).add( (control.clone().scale( 2.0 * oneMinusT * progress )) ).add( (destination.clone().scale( progress * progress )) );
            },
            /*Source.Game.HexMerge.HexGamePresenter.EvaluateArc end.*/

            /*Source.Game.HexMerge.HexGamePresenter.PlayTileAudio start.*/
            PlayTileAudio: function (audioCue) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#PlayTileAudio", this ); }

                this._tileAudioSource.pitch = audioCue.Pitch;
                this._tileAudioSource.PlayOneShot(audioCue.Clip);
            },
            /*Source.Game.HexMerge.HexGamePresenter.PlayTileAudio end.*/

            /*Source.Game.HexMerge.HexGamePresenter.GetAdjustedDuration start.*/
            GetAdjustedDuration: function (baseDuration) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter#GetAdjustedDuration", this ); }

                return baseDuration / this._animationSpeedModifier;
            },
            /*Source.Game.HexMerge.HexGamePresenter.GetAdjustedDuration end.*/


        }
    });
    /*Source.Game.HexMerge.HexGamePresenter end.*/

    /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent start.*/
    Bridge.define("Source.Game.HexMerge.HexGamePresenter.AnimationEvent", {
        $kind: 1004,
        statics: {
            methods: {
                /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent.CreateTileAdded:static start.*/
                CreateTileAdded: function (tileAdded) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#CreateTileAdded", this ); }

                    return new Source.Game.HexMerge.HexGamePresenter.AnimationEvent.$ctor1(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind.TileAdded, tileAdded, Bridge.getDefaultValue(HexMergePlan), Bridge.getDefaultValue(HexCollapsed));
                },
                /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent.CreateTileAdded:static end.*/

                /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent.CreateMerged:static start.*/
                CreateMerged: function (merge) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#CreateMerged", this ); }

                    return new Source.Game.HexMerge.HexGamePresenter.AnimationEvent.$ctor1(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind.Merged, Bridge.getDefaultValue(HexTileAdded), merge, Bridge.getDefaultValue(HexCollapsed));
                },
                /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent.CreateMerged:static end.*/

                /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent.CreateCollapsed:static start.*/
                CreateCollapsed: function (collapse) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#CreateCollapsed", this ); }

                    return new Source.Game.HexMerge.HexGamePresenter.AnimationEvent.$ctor1(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind.Collapsed, Bridge.getDefaultValue(HexTileAdded), Bridge.getDefaultValue(HexMergePlan), collapse);
                },
                /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent.CreateCollapsed:static end.*/

                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#getDefaultValue", this ); }
 return new Source.Game.HexMerge.HexGamePresenter.AnimationEvent(); }
            }
        },
        fields: {
            Kind: 0,
            TileAdded: null,
            Merge: null,
            Collapse: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#init", this ); }

                this.TileAdded = new HexTileAdded();
                this.Merge = new HexMergePlan();
                this.Collapse = new HexCollapsed();
            },
            $ctor1: function (kind, tileAdded, merge, collapse) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#$ctor1", this ); }

                this.$initialize();
                this.Kind = kind;
                this.TileAdded = tileAdded;
                this.Merge = merge;
                this.Collapse = collapse;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#getHashCode", this ); }

                var h = Bridge.addHash([5407087742, this.Kind, this.TileAdded, this.Merge, this.Collapse]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#equals", this ); }

                if (!Bridge.is(o, Source.Game.HexMerge.HexGamePresenter.AnimationEvent)) {
                    return false;
                }
                return Bridge.equals(this.Kind, o.Kind) && Bridge.equals(this.TileAdded, o.TileAdded) && Bridge.equals(this.Merge, o.Merge) && Bridge.equals(this.Collapse, o.Collapse);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AnimationEvent#$clone", this ); }
 return this; }
        }
    });
    /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent end.*/

    /*Source.Game.HexMerge.HexGamePresenter+AnimationEventKind start.*/
    Bridge.define("Source.Game.HexMerge.HexGamePresenter.AnimationEventKind", {
        $kind: 1006,
        statics: {
            fields: {
                TileAdded: 0,
                Merged: 1,
                Collapsed: 2
            }
        }
    });
    /*Source.Game.HexMerge.HexGamePresenter+AnimationEventKind end.*/

    /*Source.Game.HexMerge.HexGamePresenter+AudioCue start.*/
    Bridge.define("Source.Game.HexMerge.HexGamePresenter.AudioCue", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AudioCue#getDefaultValue", this ); }
 return new Source.Game.HexMerge.HexGamePresenter.AudioCue(); }
            }
        },
        fields: {
            Clip: null,
            Pitch: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AudioCue#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AudioCue#getHashCode", this ); }

                var h = Bridge.addHash([3470375088, this.Clip, this.Pitch]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AudioCue#equals", this ); }

                if (!Bridge.is(o, Source.Game.HexMerge.HexGamePresenter.AudioCue)) {
                    return false;
                }
                return Bridge.equals(this.Clip, o.Clip) && Bridge.equals(this.Pitch, o.Pitch);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.AudioCue#$clone", this ); }

                var s = to || new Source.Game.HexMerge.HexGamePresenter.AudioCue();
                s.Clip = this.Clip;
                s.Pitch = this.Pitch;
                return s;
            }
        }
    });
    /*Source.Game.HexMerge.HexGamePresenter+AudioCue end.*/

    /*Source.Game.HexMerge.HexGamePresenter+CollapseAnimation start.*/
    Bridge.define("Source.Game.HexMerge.HexGamePresenter.CollapseAnimation", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#getDefaultValue", this ); }
 return new Source.Game.HexMerge.HexGamePresenter.CollapseAnimation(); }
            }
        },
        fields: {
            Coord: null,
            StartIndex: 0,
            Count: 0,
            Color: 0,
            Tiles: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#init", this ); }

                this.Coord = new HexCoord();
            },
            $ctor1: function (coord, startIndex, count, color, tiles) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#$ctor1", this ); }

                this.$initialize();
                this.Coord = coord;
                this.StartIndex = startIndex;
                this.Count = count;
                this.Color = color;
                this.Tiles = tiles;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#getHashCode", this ); }

                var h = Bridge.addHash([7225918132, this.Coord, this.StartIndex, this.Count, this.Color, this.Tiles]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#equals", this ); }

                if (!Bridge.is(o, Source.Game.HexMerge.HexGamePresenter.CollapseAnimation)) {
                    return false;
                }
                return Bridge.equals(this.Coord, o.Coord) && Bridge.equals(this.StartIndex, o.StartIndex) && Bridge.equals(this.Count, o.Count) && Bridge.equals(this.Color, o.Color) && Bridge.equals(this.Tiles, o.Tiles);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseAnimation#$clone", this ); }
 return this; }
        }
    });
    /*Source.Game.HexMerge.HexGamePresenter+CollapseAnimation end.*/

    /*Source.Game.HexMerge.HexGamePresenter+CollapseVfxRequest start.*/
    Bridge.define("Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#getDefaultValue", this ); }
 return new Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest(); }
            }
        },
        fields: {
            Position: null,
            Color: null,
            Delay: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#init", this ); }

                this.Position = new UnityEngine.Vector3();
                this.Color = new UnityEngine.Color();
            },
            $ctor1: function (position, color, delay) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#$ctor1", this ); }

                this.$initialize();
                this.Position = position.$clone();
                this.Color = color.$clone();
                this.Delay = delay;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#getHashCode", this ); }

                var h = Bridge.addHash([6606957522, this.Position, this.Color, this.Delay]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#equals", this ); }

                if (!Bridge.is(o, Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest)) {
                    return false;
                }
                return Bridge.equals(this.Position, o.Position) && Bridge.equals(this.Color, o.Color) && Bridge.equals(this.Delay, o.Delay);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest#$clone", this ); }
 return this; }
        }
    });
    /*Source.Game.HexMerge.HexGamePresenter+CollapseVfxRequest end.*/

    /*Source.Game.HexMerge.HexGamePresenter+DraggableStackRuntime start.*/
    Bridge.define("Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime", {
        $kind: 1002,
        fields: {
            Setup: null,
            SlotIndex: 0,
            HomePosition: null,
            Root: null,
            Tiles: null,
            IsAnimating: false,
            IsEnabled: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime#init", this ); }

                this.Setup = new HexDraggableStackSetup();
                this.HomePosition = new UnityEngine.Vector3();
                this.IsEnabled = true;
            },
            ctor: function (setup, slotIndex, homePosition, root, tiles) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime#ctor", this ); }

                this.$initialize();
                this.Setup = setup.$clone();
                this.SlotIndex = slotIndex;
                this.HomePosition = homePosition.$clone();
                this.Root = root;
                this.Tiles = tiles;
            }
        }
    });
    /*Source.Game.HexMerge.HexGamePresenter+DraggableStackRuntime end.*/

    /*Source.Game.HexMerge.HexTileView start.*/
    Bridge.define("Source.Game.HexMerge.HexTileView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Renderer: null
        }
    });
    /*Source.Game.HexMerge.HexTileView end.*/

    /*Source.Game.HexMerge.TileCollapseVfxView start.*/
    Bridge.define("Source.Game.HexMerge.TileCollapseVfxView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Source.Game.HexMerge.TileCollapseVfxView.ParticleSystemSetColor:static start.*/
                ParticleSystemSetColor: function (ps, color) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.TileCollapseVfxView#ParticleSystemSetColor", this ); }

                    var main = ps.main;
                    main.startColor = new pc.MinMaxGradient( color.$clone() );
                },
                /*Source.Game.HexMerge.TileCollapseVfxView.ParticleSystemSetColor:static end.*/


            }
        },
        fields: {
            _particleSystem: null,
            _subParticleSystem: null,
            _isPlaying: false
        },
        events: {
            Completed: null
        },
        methods: {
            /*Source.Game.HexMerge.TileCollapseVfxView.Play start.*/
            Play: function (color) {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.TileCollapseVfxView#Play", this ); }

                Source.Game.HexMerge.TileCollapseVfxView.ParticleSystemSetColor(this._particleSystem, color);
                Source.Game.HexMerge.TileCollapseVfxView.ParticleSystemSetColor(this._subParticleSystem, color);

                this._isPlaying = true;
                this._particleSystem.Play$1(true);
                this._subParticleSystem.Play$1(true);
            },
            /*Source.Game.HexMerge.TileCollapseVfxView.Play end.*/

            /*Source.Game.HexMerge.TileCollapseVfxView.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Source.Game.HexMerge.TileCollapseVfxView#Update", this ); }

                if (!this._isPlaying || this._particleSystem.IsAlive(true)) {
                    return;
                }

                this._isPlaying = false;
                !Bridge.staticEquals(this.Completed, null) ? this.Completed(this) : null;
            },
            /*Source.Game.HexMerge.TileCollapseVfxView.Update end.*/


        }
    });
    /*Source.Game.HexMerge.TileCollapseVfxView end.*/

    /*Source.Optional.Option$1 start.*/
    Bridge.define("Source.Optional.Option$1", function (T) { return {
        $kind: 4,
        statics: {
            props: {
                None: {
                    get: function () {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#None#get", this ); }

                        return Bridge.getDefaultValue(Source.Optional.Option$1(T));
                    }
                }
            },
            methods: {
                /*Source.Optional.Option$1.Some:static start.*/
                Some: function (value) {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#Some", this ); }

                    var $t;
                    return ($t = new (Source.Optional.Option$1(T))(), $t.IsSome = true, $t.Value = Bridge.rValue(value), $t);
                },
                /*Source.Optional.Option$1.Some:static end.*/

                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#getDefaultValue", this ); }
 return new (Source.Optional.Option$1(T))(); }
            }
        },
        fields: {
            IsSome: false,
            Value: Bridge.getDefaultValue(T)
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#init", this ); }

                this.Value = Bridge.getDefaultValue(T);
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#getHashCode", this ); }

                var h = Bridge.addHash([1769266878, this.IsSome, this.Value]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#equals", this ); }

                if (!Bridge.is(o, Source.Optional.Option$1(T))) {
                    return false;
                }
                return Bridge.equals(this.IsSome, o.IsSome) && Bridge.equals(this.Value, o.Value);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Source.Optional.Option$1#$clone", this ); }

                var s = to || new (Source.Optional.Option$1(T))();
                s.IsSome = this.IsSome;
                s.Value = Bridge.rValue(this.Value);
                return s;
            }
        }
    }; });
    /*Source.Optional.Option$1 end.*/

    /*Source.Pooling.MonoPool$1 start.*/
    Bridge.define("Source.Pooling.MonoPool$1", function (T) { return {
        fields: {
            _factory: null,
            _onGet: null,
            _onRelease: null,
            _onDestroy: null,
            _instances: null,
            _collectionCheck: false,
            _maxSize: 0
        },
        ctors: {
            $ctor1: function (factory, onGet, onRelease, onDestroy, collectionCheck, defaultCapacity, maxSize) {
if ( TRACE ) { TRACE( "Source.Pooling.MonoPool$1#$ctor1", this ); }

                if (onGet === void 0) { onGet = null; }
                if (onRelease === void 0) { onRelease = null; }
                if (onDestroy === void 0) { onDestroy = null; }
                if (collectionCheck === void 0) { collectionCheck = true; }
                if (defaultCapacity === void 0) { defaultCapacity = 1; }
                if (maxSize === void 0) { maxSize = 10000; }

                this.$initialize();
                this._factory = factory;
                this._onGet = onGet;
                this._onRelease = onRelease;
                this._onDestroy = onDestroy;
                this._collectionCheck = collectionCheck;
                this._maxSize = maxSize;
                this._instances = new (System.Collections.Generic.Stack$1(T)).$ctor2(defaultCapacity);
            },
            ctor: function (prefab, onGet, onRelease, onDestroy, collectionCheck, defaultCapacity, maxSize) {
if ( TRACE ) { TRACE( "Source.Pooling.MonoPool$1#ctor", this ); }

                if (onGet === void 0) { onGet = null; }
                if (onRelease === void 0) { onRelease = null; }
                if (onDestroy === void 0) { onDestroy = null; }
                if (collectionCheck === void 0) { collectionCheck = true; }
                if (defaultCapacity === void 0) { defaultCapacity = 1; }
                if (maxSize === void 0) { maxSize = 10000; }

                Source.Pooling.MonoPool$1(T).$ctor1.call(this, function () {
                    return UnityEngine.Object.Instantiate(T, Bridge.rValue(prefab));
                }, onGet, onRelease, onDestroy, collectionCheck, defaultCapacity, maxSize);
            }
        },
        methods: {
            /*Source.Pooling.MonoPool$1.Get start.*/
            Get: function () {
if ( TRACE ) { TRACE( "Source.Pooling.MonoPool$1#Get", this ); }

                var instance = this._instances.Count > 0 ? this._instances.Pop() : this._factory();
Bridge.rValue(                instance).gameObject.SetActive(true);
Bridge.rValue(                instance).gameObject.hideFlags = UnityEngine.HideFlags.None;
                !Bridge.staticEquals(this._onGet, null) ? this._onGet(Bridge.rValue(instance)) : null;
                return Bridge.rValue(instance);
            },
            /*Source.Pooling.MonoPool$1.Get end.*/

            /*Source.Pooling.MonoPool$1.Release start.*/
            Release: function (instance) {
if ( TRACE ) { TRACE( "Source.Pooling.MonoPool$1#Release", this ); }

                if (this._collectionCheck && this._instances.Contains(Bridge.rValue(instance))) {
                    throw new System.InvalidOperationException.$ctor1("Trying to release an instance that is already in the pool.");
                }

Bridge.rValue(                instance).gameObject.SetActive(false);
Bridge.rValue(                instance).gameObject.hideFlags = UnityEngine.HideFlags.HideInHierarchy;
                !Bridge.staticEquals(this._onRelease, null) ? this._onRelease(Bridge.rValue(instance)) : null;

                if (this._instances.Count < this._maxSize) {
                    this._instances.Push(Bridge.rValue(instance));
                    return;
                }

                !Bridge.staticEquals(this._onDestroy, null) ? this._onDestroy(Bridge.rValue(instance)) : null;

                if (UnityEngine.Application.isPlaying) {
                    UnityEngine.Object.Destroy(Bridge.rValue(instance).gameObject);
                } else {
                    UnityEngine.Object.DestroyImmediate(Bridge.rValue(instance).gameObject);
                }
            },
            /*Source.Pooling.MonoPool$1.Release end.*/


        }
    }; });
    /*Source.Pooling.MonoPool$1 end.*/

    /*Tweens.Core.Tween start.*/
    Bridge.define("Tweens.Core.Tween", {
        fields: {
            /**
             * The duration of the Tween in seconds defines how long the Tween will take to complete. When the duration is not set, the Tween will complete instantly.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type number
             */
            duration: 0,
            /**
             * The delay of the Tween in seconds defines how long the Tween will wait before starting. To change the behaviour of how to the delay will affect the Tween before it starts, you can change the Fill Mode. When the delay is not set, the Tween will start instantly.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type ?number
             */
            delay: null,
            /**
             * The ping pong interval defines how long the Tween will wait before playing the animation backwards after the animation has finished. When the ping pong interval is not set, the Tween will play the animation backwards instantly after the animation has finished.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type ?number
             */
            pingPongInterval: null,
            /**
             * The repeat interval defines how long the Tween will wait before repeating itself. When the repeat interval is not set, the Tween will repeat itself instantly after the animation has finished.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type ?number
             */
            repeatInterval: null,
            /**
             * The use unscaled time option defines whether the Tween will use the unscaled time. When the use unscaled time option is not set, the Tween will use the scaled time.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type boolean
             */
            useUnscaledTime: false,
            /**
             * The ping pong option defines whether the Tween will play the animation backwards after the animation has finished. When the ping pong option is not set, the Tween will not play the animation backwards after the animation has finished.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type boolean
             */
            usePingPong: false,
            /**
             * The infinite option defines whether the Tween will loop forever. When the Tween is set to loop forever, the Loops option will be ignored. When the infinite option is not set, the Tween will not loop forever.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type boolean
             */
            isInfinite: false,
            /**
             * The amount of times the Tween will loop defines how many times the Tween will repeat itself. When the Tween is using a Ping Pong loop type, the Tween has to play both the forward and backward animation to count as one loop. When Infinite is set, the Tween will loop forever and the loop count will be ignored. When the amount of loops is not set, the Tween will not loop.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type ?number
             */
            loops: null,
            /**
             * The offset defines on which time the Tween will start. When the offset is not set, the Tween will start at the beginning.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type ?number
             */
            offset: null,
            /**
             * The ease type defines how the Tween will animate. If an Animation Curve is set, the Ease Type won't be used. When the ease type is not set, the Tween will animate linearly.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type Tweens.EaseType
             */
            easeType: 0,
            /**
             * The fill mode defines how the Tween will behave before the Tween has started and after the Tween has ended. When the fill mode is not set, the fill mode will be set to Backward.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type Tweens.FillMode
             */
            fillMode: 0,
            /**
             * The animation curve defines how the Tween will animate. The animation curve can be used to create custom ease types. When the animation curve is not set, the Tween will animate according to the Ease Type.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type pc.AnimationCurve
             */
            animationCurve: null,
            /**
             * The don't invoke when destroyed option defines whether the Tween will invoke the delegates when the component is not longer present in the scene. When not set, all delegates will be invoked even when the component is destroyed.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween
             * @type boolean
             */
            dontInvokeWhenDestroyed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tweens.Core.Tween#init", this ); }

                this.fillMode = Tweens.FillMode.Backwards;
            }
        }
    });
    /*Tweens.Core.Tween end.*/

    /*Tweens.Core.EaseFunctions start.*/
    Bridge.define("Tweens.Core.EaseFunctions", {
        statics: {
            fields: {
                ConstantA: 0,
                ConstantB: 0,
                ConstantC: 0,
                ConstantD: 0,
                ConstantE: 0,
                ConstantF: 0,
                ConstantG: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#init", this ); }

                    this.ConstantA = 1.70158;
                    this.ConstantB = 2.59490943;
                    this.ConstantC = 2.70158;
                    this.ConstantD = 2.09439516;
                    this.ConstantE = 1.39626348;
                    this.ConstantF = 7.5625;
                    this.ConstantG = 2.75;
                }
            },
            methods: {
                /*Tweens.Core.EaseFunctions.GetFunction:static start.*/
                GetFunction: function (easeType) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#GetFunction", this ); }

                    if (easeType === Tweens.EaseType.Linear) {
                        return Tweens.Core.EaseFunctions.Linear;
                    }
                    if (easeType === Tweens.EaseType.SineIn) {
                        return Tweens.Core.EaseFunctions.SineIn;
                    }
                    if (easeType === Tweens.EaseType.SineOut) {
                        return Tweens.Core.EaseFunctions.SineOut;
                    }
                    if (easeType === Tweens.EaseType.SineInOut) {
                        return Tweens.Core.EaseFunctions.SineInOut;
                    }
                    if (easeType === Tweens.EaseType.QuadIn) {
                        return Tweens.Core.EaseFunctions.QuadIn;
                    }
                    if (easeType === Tweens.EaseType.QuadOut) {
                        return Tweens.Core.EaseFunctions.QuadOut;
                    }
                    if (easeType === Tweens.EaseType.QuadInOut) {
                        return Tweens.Core.EaseFunctions.QuadInOut;
                    }
                    if (easeType === Tweens.EaseType.CubicIn) {
                        return Tweens.Core.EaseFunctions.CubicIn;
                    }
                    if (easeType === Tweens.EaseType.CubicOut) {
                        return Tweens.Core.EaseFunctions.CubicOut;
                    }
                    if (easeType === Tweens.EaseType.CubicInOut) {
                        return Tweens.Core.EaseFunctions.CubicInOut;
                    }
                    if (easeType === Tweens.EaseType.QuartIn) {
                        return Tweens.Core.EaseFunctions.QuartIn;
                    }
                    if (easeType === Tweens.EaseType.QuartOut) {
                        return Tweens.Core.EaseFunctions.QuartOut;
                    }
                    if (easeType === Tweens.EaseType.QuartInOut) {
                        return Tweens.Core.EaseFunctions.QuartInOut;
                    }
                    if (easeType === Tweens.EaseType.QuintIn) {
                        return Tweens.Core.EaseFunctions.QuintIn;
                    }
                    if (easeType === Tweens.EaseType.QuintOut) {
                        return Tweens.Core.EaseFunctions.QuintOut;
                    }
                    if (easeType === Tweens.EaseType.QuintInOut) {
                        return Tweens.Core.EaseFunctions.QuintInOut;
                    }
                    if (easeType === Tweens.EaseType.ExpoIn) {
                        return Tweens.Core.EaseFunctions.ExpoIn;
                    }
                    if (easeType === Tweens.EaseType.ExpoOut) {
                        return Tweens.Core.EaseFunctions.ExpoOut;
                    }
                    if (easeType === Tweens.EaseType.ExpoInOut) {
                        return Tweens.Core.EaseFunctions.ExpoInOut;
                    }
                    if (easeType === Tweens.EaseType.CircIn) {
                        return Tweens.Core.EaseFunctions.CircIn;
                    }
                    if (easeType === Tweens.EaseType.CircOut) {
                        return Tweens.Core.EaseFunctions.CircOut;
                    }
                    if (easeType === Tweens.EaseType.CircInOut) {
                        return Tweens.Core.EaseFunctions.CircInOut;
                    }
                    if (easeType === Tweens.EaseType.BackIn) {
                        return Tweens.Core.EaseFunctions.BackIn;
                    }
                    if (easeType === Tweens.EaseType.BackOut) {
                        return Tweens.Core.EaseFunctions.BackOut;
                    }
                    if (easeType === Tweens.EaseType.BackInOut) {
                        return Tweens.Core.EaseFunctions.BackInOut;
                    }
                    if (easeType === Tweens.EaseType.ElasticIn) {
                        return Tweens.Core.EaseFunctions.ElasticIn;
                    }
                    if (easeType === Tweens.EaseType.ElasticOut) {
                        return Tweens.Core.EaseFunctions.ElasticOut;
                    }
                    if (easeType === Tweens.EaseType.ElasticInOut) {
                        return Tweens.Core.EaseFunctions.ElasticInOut;
                    }
                    if (easeType === Tweens.EaseType.BounceIn) {
                        return Tweens.Core.EaseFunctions.BounceIn;
                    }
                    if (easeType === Tweens.EaseType.BounceOut) {
                        return Tweens.Core.EaseFunctions.BounceOut;
                    }
                    if (easeType === Tweens.EaseType.BounceInOut) {
                        return Tweens.Core.EaseFunctions.BounceInOut;
                    }
                    throw new System.NotImplementedException.$ctor1(System.String.format("EaseType {0} not implemented", [Bridge.box(easeType, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType))]));
                },
                /*Tweens.Core.EaseFunctions.GetFunction:static end.*/

                /*Tweens.Core.EaseFunctions.Linear:static start.*/
                Linear: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#Linear", this ); }

                    return time;
                },
                /*Tweens.Core.EaseFunctions.Linear:static end.*/

                /*Tweens.Core.EaseFunctions.SineIn:static start.*/
                SineIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#SineIn", this ); }

                    return 1.0 - Math.cos((time * UnityEngine.Mathf.PI) / 2.0);
                },
                /*Tweens.Core.EaseFunctions.SineIn:static end.*/

                /*Tweens.Core.EaseFunctions.SineOut:static start.*/
                SineOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#SineOut", this ); }

                    return Math.sin((time * UnityEngine.Mathf.PI) / 2.0);
                },
                /*Tweens.Core.EaseFunctions.SineOut:static end.*/

                /*Tweens.Core.EaseFunctions.SineInOut:static start.*/
                SineInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#SineInOut", this ); }

                    return -(Math.cos(UnityEngine.Mathf.PI * time) - 1.0) / 2.0;
                },
                /*Tweens.Core.EaseFunctions.SineInOut:static end.*/

                /*Tweens.Core.EaseFunctions.QuadIn:static start.*/
                QuadIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuadIn", this ); }

                    return time * time;
                },
                /*Tweens.Core.EaseFunctions.QuadIn:static end.*/

                /*Tweens.Core.EaseFunctions.QuadOut:static start.*/
                QuadOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuadOut", this ); }

                    return 1 - (1 - time) * (1 - time);
                },
                /*Tweens.Core.EaseFunctions.QuadOut:static end.*/

                /*Tweens.Core.EaseFunctions.QuadInOut:static start.*/
                QuadInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuadInOut", this ); }

                    return time < 0.5 ? 2 * time * time : 1 - Math.pow(-2 * time + 2, 2) / 2;
                },
                /*Tweens.Core.EaseFunctions.QuadInOut:static end.*/

                /*Tweens.Core.EaseFunctions.CubicIn:static start.*/
                CubicIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#CubicIn", this ); }

                    return time * time * time;
                },
                /*Tweens.Core.EaseFunctions.CubicIn:static end.*/

                /*Tweens.Core.EaseFunctions.CubicOut:static start.*/
                CubicOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#CubicOut", this ); }

                    return 1 - Math.pow(1 - time, 3);
                },
                /*Tweens.Core.EaseFunctions.CubicOut:static end.*/

                /*Tweens.Core.EaseFunctions.CubicInOut:static start.*/
                CubicInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#CubicInOut", this ); }

                    return time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;
                },
                /*Tweens.Core.EaseFunctions.CubicInOut:static end.*/

                /*Tweens.Core.EaseFunctions.QuartIn:static start.*/
                QuartIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuartIn", this ); }

                    return time * time * time * time;
                },
                /*Tweens.Core.EaseFunctions.QuartIn:static end.*/

                /*Tweens.Core.EaseFunctions.QuartOut:static start.*/
                QuartOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuartOut", this ); }

                    return 1 - Math.pow(1 - time, 4);
                },
                /*Tweens.Core.EaseFunctions.QuartOut:static end.*/

                /*Tweens.Core.EaseFunctions.QuartInOut:static start.*/
                QuartInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuartInOut", this ); }

                    return time < 0.5 ? 8 * time * time * time * time : 1 - Math.pow(-2 * time + 2, 4) / 2;
                },
                /*Tweens.Core.EaseFunctions.QuartInOut:static end.*/

                /*Tweens.Core.EaseFunctions.QuintIn:static start.*/
                QuintIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuintIn", this ); }

                    return time * time * time * time * time;
                },
                /*Tweens.Core.EaseFunctions.QuintIn:static end.*/

                /*Tweens.Core.EaseFunctions.QuintOut:static start.*/
                QuintOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuintOut", this ); }

                    return 1 - Math.pow(1 - time, 5);
                },
                /*Tweens.Core.EaseFunctions.QuintOut:static end.*/

                /*Tweens.Core.EaseFunctions.QuintInOut:static start.*/
                QuintInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#QuintInOut", this ); }

                    return time < 0.5 ? 16 * time * time * time * time * time : 1 - Math.pow(-2 * time + 2, 5) / 2;
                },
                /*Tweens.Core.EaseFunctions.QuintInOut:static end.*/

                /*Tweens.Core.EaseFunctions.ExpoIn:static start.*/
                ExpoIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#ExpoIn", this ); }

                    return time === 0 ? 0 : Math.pow(2, 10 * time - 10);
                },
                /*Tweens.Core.EaseFunctions.ExpoIn:static end.*/

                /*Tweens.Core.EaseFunctions.ExpoOut:static start.*/
                ExpoOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#ExpoOut", this ); }

                    return time === 1 ? 1 : 1 - Math.pow(2, -10 * time);
                },
                /*Tweens.Core.EaseFunctions.ExpoOut:static end.*/

                /*Tweens.Core.EaseFunctions.ExpoInOut:static start.*/
                ExpoInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#ExpoInOut", this ); }

                    return time === 0 ? 0 : time === 1 ? 1 : time < 0.5 ? Math.pow(2, 20 * time - 10) / 2 : (2 - Math.pow(2, -20 * time + 10)) / 2;
                },
                /*Tweens.Core.EaseFunctions.ExpoInOut:static end.*/

                /*Tweens.Core.EaseFunctions.CircIn:static start.*/
                CircIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#CircIn", this ); }

                    return 1 - Math.sqrt(1 - Math.pow(time, 2));
                },
                /*Tweens.Core.EaseFunctions.CircIn:static end.*/

                /*Tweens.Core.EaseFunctions.CircOut:static start.*/
                CircOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#CircOut", this ); }

                    return Math.sqrt(1 - Math.pow(time - 1, 2));
                },
                /*Tweens.Core.EaseFunctions.CircOut:static end.*/

                /*Tweens.Core.EaseFunctions.CircInOut:static start.*/
                CircInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#CircInOut", this ); }

                    return time < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * time, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * time + 2, 2)) + 1) / 2;
                },
                /*Tweens.Core.EaseFunctions.CircInOut:static end.*/

                /*Tweens.Core.EaseFunctions.BackIn:static start.*/
                BackIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#BackIn", this ); }

                    return Tweens.Core.EaseFunctions.ConstantC * time * time * time - Tweens.Core.EaseFunctions.ConstantA * time * time;
                },
                /*Tweens.Core.EaseFunctions.BackIn:static end.*/

                /*Tweens.Core.EaseFunctions.BackOut:static start.*/
                BackOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#BackOut", this ); }

                    return 1.0 + Tweens.Core.EaseFunctions.ConstantC * Math.pow(time - 1, 3) + Tweens.Core.EaseFunctions.ConstantA * Math.pow(time - 1, 2);
                },
                /*Tweens.Core.EaseFunctions.BackOut:static end.*/

                /*Tweens.Core.EaseFunctions.BackInOut:static start.*/
                BackInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#BackInOut", this ); }

                    return time < 0.5 ? Math.pow(2 * time, 2) * (7.189819 * time - Tweens.Core.EaseFunctions.ConstantB) / 2 : (Math.pow(2 * time - 2, 2) * ((3.59490943) * (time * 2 - 2) + Tweens.Core.EaseFunctions.ConstantB) + 2) / 2;
                },
                /*Tweens.Core.EaseFunctions.BackInOut:static end.*/

                /*Tweens.Core.EaseFunctions.ElasticIn:static start.*/
                ElasticIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#ElasticIn", this ); }

                    return time === 0 ? 0 : time === 1 ? 1 : -Math.pow(2, 10 * time - 10) * Math.sin((time * 10.0 - 10.75) * Tweens.Core.EaseFunctions.ConstantD);
                },
                /*Tweens.Core.EaseFunctions.ElasticIn:static end.*/

                /*Tweens.Core.EaseFunctions.ElasticOut:static start.*/
                ElasticOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#ElasticOut", this ); }

                    return time === 0 ? 0 : time === 1 ? 1 : Math.pow(2, -10 * time) * Math.sin((time * 10 - 0.75) * Tweens.Core.EaseFunctions.ConstantD) + 1;
                },
                /*Tweens.Core.EaseFunctions.ElasticOut:static end.*/

                /*Tweens.Core.EaseFunctions.ElasticInOut:static start.*/
                ElasticInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#ElasticInOut", this ); }

                    return time === 0 ? 0 : time === 1 ? 1 : time < 0.5 ? -(Math.pow(2, 20 * time - 10) * Math.sin((20 * time - 11.125) * Tweens.Core.EaseFunctions.ConstantE)) / 2 : Math.pow(2, -20 * time + 10) * Math.sin((20 * time - 11.125) * Tweens.Core.EaseFunctions.ConstantE) / 2 + 1;
                },
                /*Tweens.Core.EaseFunctions.ElasticInOut:static end.*/

                /*Tweens.Core.EaseFunctions.BounceIn:static start.*/
                BounceIn: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#BounceIn", this ); }

                    return 1 - Tweens.Core.EaseFunctions.BounceOut(1 - time);
                },
                /*Tweens.Core.EaseFunctions.BounceIn:static end.*/

                /*Tweens.Core.EaseFunctions.BounceOut:static start.*/
                BounceOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#BounceOut", this ); }

                    if (time < 0.363636374) {
                        return Tweens.Core.EaseFunctions.ConstantF * time * time;
                    } else {
                        if (time < 0.727272749) {
                            return Tweens.Core.EaseFunctions.ConstantF * ((time = time - (0.545454562))) * time + 0.75;
                        } else {
                            if (time < 0.909090936) {
                                return Tweens.Core.EaseFunctions.ConstantF * ((time = time - (0.8181818))) * time + 0.9375;
                            } else {
                                return Tweens.Core.EaseFunctions.ConstantF * ((time = time - (0.954545438))) * time + 0.984375;
                            }
                        }
                    }
                },
                /*Tweens.Core.EaseFunctions.BounceOut:static end.*/

                /*Tweens.Core.EaseFunctions.BounceInOut:static start.*/
                BounceInOut: function (time) {
if ( TRACE ) { TRACE( "Tweens.Core.EaseFunctions#BounceInOut", this ); }

                    return time < 0.5 ? (1 - Tweens.Core.EaseFunctions.BounceOut(1 - 2 * time)) / 2 : (1 + Tweens.Core.EaseFunctions.BounceOut(2 * time - 1)) / 2;
                },
                /*Tweens.Core.EaseFunctions.BounceInOut:static end.*/


            }
        }
    });
    /*Tweens.Core.EaseFunctions end.*/

    /*Tweens.Core.Nullable$1 start.*/
    Bridge.define("Tweens.Core.Nullable$1", function (Type) { return {
        statics: {
            methods: {
                op_Implicit: function (test) {
if ( TRACE ) { TRACE( "Tweens.Core.Nullable$1#op_Implicit", this ); }

                    return Bridge.rValue(test.Value);
                },
                op_Implicit$1: function (value) {
if ( TRACE ) { TRACE( "Tweens.Core.Nullable$1#op_Implicit$1", this ); }

                    var $t;
                    return ($t = new (Tweens.Core.Nullable$1(Type)).ctor(), $t.Value = Bridge.rValue(value), $t.HasValue = true, $t);
                }
            }
        },
        fields: {
            Value: Bridge.getDefaultValue(Type),
            HasValue: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tweens.Core.Nullable$1#init", this ); }

                this.Value = Bridge.getDefaultValue(Type);
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Tweens.Core.Nullable$1#ctor", this ); }

                this.$initialize();
            },
            $ctor1: function (value) {
if ( TRACE ) { TRACE( "Tweens.Core.Nullable$1#$ctor1", this ); }

                this.$initialize();
                this.Value = Bridge.rValue(value);
                this.HasValue = true;
            },
            $ctor2: function (nullable) {
if ( TRACE ) { TRACE( "Tweens.Core.Nullable$1#$ctor2", this ); }

                this.$initialize();
                this.Value = Bridge.rValue(nullable.Value);
                this.HasValue = nullable.HasValue;
            }
        },
        methods: {
            /*Tweens.Core.Nullable$1.Unset start.*/
            Unset: function () {
if ( TRACE ) { TRACE( "Tweens.Core.Nullable$1#Unset", this ); }

                this.Value = Bridge.getDefaultValue(Type);
                this.HasValue = false;
            },
            /*Tweens.Core.Nullable$1.Unset end.*/


        }
    }; });
    /*Tweens.Core.Nullable$1 end.*/

    /*Tweens.Core.TweenEngine start.*/
    Bridge.define("Tweens.Core.TweenEngine", {
        statics: {
            fields: {
                instances: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Tweens.Core.TweenEngine#init", this ); }

                    this.instances = new (System.Collections.Generic.List$1(Tweens.TweenInstance)).ctor();
                }
            },
            methods: {
                /*Tweens.Core.TweenEngine.Initialize:static start.*/
                Initialize: function () {
if ( TRACE ) { TRACE( "Tweens.Core.TweenEngine#Initialize", this ); }

                    UnityEngine.Object.DontDestroyOnLoad(new UnityEngine.GameObject.$ctor2("TweenBehaviour").AddComponent(Tweens.Core.TweenEngine.TweenBehaviour));
                },
                /*Tweens.Core.TweenEngine.Initialize:static end.*/

                /*Tweens.Core.TweenEngine.Update:static start.*/
                Update: function () {
if ( TRACE ) { TRACE( "Tweens.Core.TweenEngine#Update", this ); }

                    for (var i = 0; i < Tweens.Core.TweenEngine.instances.Count; i = (i + 1) | 0) {
                        var instance = Tweens.Core.TweenEngine.instances.getItem(i);
                        if (instance.isDecommissioned) {
                            Tweens.Core.TweenEngine.instances.remove(instance);
                            i = (i - 1) | 0;
                            continue;
                        }
                        instance.Update();
                    }
                },
                /*Tweens.Core.TweenEngine.Update:static end.*/


            }
        }
    });
    /*Tweens.Core.TweenEngine end.*/

    /*Tweens.Core.TweenEngine+TweenBehaviour start.*/
    Bridge.define("Tweens.Core.TweenEngine.TweenBehaviour", {
        inherits: [UnityEngine.MonoBehaviour],
        $kind: 1002,
        methods: {
            /*Tweens.Core.TweenEngine+TweenBehaviour.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "Tweens.Core.TweenEngine.TweenBehaviour#LateUpdate", this ); }

                Tweens.Core.TweenEngine.Update();
            },
            /*Tweens.Core.TweenEngine+TweenBehaviour.LateUpdate end.*/

            /*Tweens.Core.TweenEngine+TweenBehaviour.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Tweens.Core.TweenEngine.TweenBehaviour#OnDestroy", this ); }

                Tweens.Core.TweenEngine.instances.clear();
            },
            /*Tweens.Core.TweenEngine+TweenBehaviour.OnDestroy end.*/


        }
    });
    /*Tweens.Core.TweenEngine+TweenBehaviour end.*/

    /*Tweens.EaseType start.*/
    Bridge.define("Tweens.EaseType", {
        $kind: 6,
        statics: {
            fields: {
                Linear: 0,
                SineIn: 10,
                SineOut: 11,
                SineInOut: 12,
                QuadIn: 20,
                QuadOut: 21,
                QuadInOut: 22,
                CubicIn: 30,
                CubicOut: 31,
                CubicInOut: 32,
                QuartIn: 40,
                QuartOut: 41,
                QuartInOut: 42,
                QuintIn: 50,
                QuintOut: 51,
                QuintInOut: 52,
                ExpoIn: 60,
                ExpoOut: 61,
                ExpoInOut: 62,
                CircIn: 70,
                CircOut: 71,
                CircInOut: 72,
                BackIn: 80,
                BackOut: 81,
                BackInOut: 82,
                ElasticIn: 90,
                ElasticOut: 91,
                ElasticInOut: 92,
                BounceIn: 100,
                BounceOut: 101,
                BounceInOut: 102
            }
        }
    });
    /*Tweens.EaseType end.*/

    /*Tweens.FillMode start.*/
    Bridge.define("Tweens.FillMode", {
        $kind: 6,
        statics: {
            fields: {
                /**
                 * The animation will not be applied before the Tween has started, and will return to its original state after the Tween has ended.
                 *
                 * @static
                 * @public
                 * @memberof Tweens.FillMode
                 * @constant
                 * @default 0
                 * @type Tweens.FillMode
                 */
                None: 0,
                /**
                 * The animation will be applied before the Tween has started, but will return to its original state after the Tween has ended.
                 *
                 * @static
                 * @public
                 * @memberof Tweens.FillMode
                 * @constant
                 * @default 1
                 * @type Tweens.FillMode
                 */
                Forwards: 1,
                /**
                 * The animation will not be applied before the Tween has started, but will remain in its final state after the Tween has ended.
                 *
                 * @static
                 * @public
                 * @memberof Tweens.FillMode
                 * @constant
                 * @default 2
                 * @type Tweens.FillMode
                 */
                Backwards: 2,
                /**
                 * The animation will be applied before the Tween has started, and will remain in its final state after the Tween has ended.
                 *
                 * @static
                 * @public
                 * @memberof Tweens.FillMode
                 * @constant
                 * @default 3
                 * @type Tweens.FillMode
                 */
                Both: 3
            }
        }
    });
    /*Tweens.FillMode end.*/

    /*Tweens.TweenExtension start.*/
    Bridge.define("Tweens.TweenExtension", {
        statics: {
            methods: {
                /*Tweens.TweenExtension.AddTween$2:static start.*/
                AddTween$2: function (ComponentType, DataType, target, tween) {
if ( TRACE ) { TRACE( "Tweens.TweenExtension#AddTween$2", this ); }

                    var instance = new (Tweens.TweenInstance$2(ComponentType,DataType))(target, tween);
                    Tweens.Core.TweenEngine.instances.add(instance);
                    return instance;
                },
                /*Tweens.TweenExtension.AddTween$2:static end.*/

                /*Tweens.TweenExtension.AddTween:static start.*/
                AddTween: function (ComponentType1, DataType1, ComponentType2, DataType2, target, tween1, tween2) {
if ( TRACE ) { TRACE( "Tweens.TweenExtension#AddTween", this ); }

                    var instances = System.Array.init([new (Tweens.TweenInstance$2(ComponentType1,DataType1))(target, tween1), new (Tweens.TweenInstance$2(ComponentType2,DataType2))(target, tween2)], Tweens.TweenInstance);
                    Tweens.Core.TweenEngine.instances.AddRange(instances);
                    return instances;
                },
                /*Tweens.TweenExtension.AddTween:static end.*/

                /*Tweens.TweenExtension.AddTween$1:static start.*/
                AddTween$1: function (ComponentType1, DataType1, ComponentType2, DataType2, ComponentType3, DataType3, target, tween1, tween2, tween3) {
if ( TRACE ) { TRACE( "Tweens.TweenExtension#AddTween$1", this ); }

                    var instances = System.Array.init([new (Tweens.TweenInstance$2(ComponentType1,DataType1))(target, tween1), new (Tweens.TweenInstance$2(ComponentType2,DataType2))(target, tween2), new (Tweens.TweenInstance$2(ComponentType3,DataType3))(target, tween3)], Tweens.TweenInstance);
                    Tweens.Core.TweenEngine.instances.AddRange(instances);
                    return instances;
                },
                /*Tweens.TweenExtension.AddTween$1:static end.*/

                /*Tweens.TweenExtension.CancelTweens:static start.*/
                CancelTweens: function (target, includeChildren) {
if ( TRACE ) { TRACE( "Tweens.TweenExtension#CancelTweens", this ); }

                    var $t;
                    if (includeChildren === void 0) { includeChildren = false; }
                    var instances = Tweens.Core.TweenEngine.instances.FindAll(function (instance) {
                        if (UnityEngine.GameObject.op_Equality(instance.target, target)) {
                            return true;
                        }
                        if (includeChildren) {
                            return instance.target.transform.IsChildOf(target.transform);
                        }
                        return false;
                    });
                    $t = Bridge.getEnumerator(instances);
                    try {
                        while ($t.moveNext()) {
                            var instance = $t.Current;
                            instance.Cancel();
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return target;
                },
                /*Tweens.TweenExtension.CancelTweens:static end.*/


            }
        }
    });
    /*Tweens.TweenExtension end.*/

    /*Tweens.TweenInstance start.*/
    Bridge.define("Tweens.TweenInstance", {
        fields: {
            duration: 0,
            pingPongInterval: null,
            repeatInterval: null,
            useUnscaledTime: false,
            usePingPong: false,
            fillMode: 0,
            haltTime: null,
            loops: null,
            isDecommissioned: false,
            time: 0,
            dontInvokeWhenDestroyed: false,
            isForwards: false,
            didReachEnd: false,
            easeFunction: null,
            /**
             * The target property defines the target GameObject on which the Tween is running.
             *
             * @instance
             * @public
             * @readonly
             * @memberof Tweens.TweenInstance
             * @type UnityEngine.GameObject
             */
            target: null,
            /**
             * The is paused property will return whether the Tween is paused while also allowing you to pause the Tween.
             *
             * @instance
             * @public
             * @memberof Tweens.TweenInstance
             * @type boolean
             */
            isPaused: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tweens.TweenInstance#init", this ); }

                this.fillMode = Tweens.FillMode.Backwards;
                this.isForwards = true;
            },
            ctor: function (target, tween) {
if ( TRACE ) { TRACE( "Tweens.TweenInstance#ctor", this ); }

                var $t;
                this.$initialize();
                this.target = target;
                this.duration = tween.duration > 0 ? tween.duration : 0.001;
                this.pingPongInterval = tween.pingPongInterval;
                this.repeatInterval = tween.repeatInterval;
                this.useUnscaledTime = tween.useUnscaledTime;
                this.usePingPong = tween.usePingPong;
                this.fillMode = tween.fillMode;
                this.time = ($t = tween.offset, $t != null ? $t : 0);
                this.dontInvokeWhenDestroyed = tween.dontInvokeWhenDestroyed;
            }
        }
    });
    /*Tweens.TweenInstance end.*/
    /**
     * @memberof Tweens
     * @callback Tweens.OnFinallyDelegate
     * @param   {Tweens.TweenInstance$2}    instance
     * @return  {void}
     */

    /**
     * @memberof Tweens
     * @callback Tweens.OnCancelDelegate
     * @param   {Tweens.TweenInstance$2}    instance
     * @return  {void}
     */

    /**
     * @memberof Tweens
     * @callback Tweens.OnEndDelegate
     * @param   {Tweens.TweenInstance$2}    instance
     * @return  {void}
     */

    /**
     * @memberof Tweens
     * @callback Tweens.OnUpdateDelegate
     * @param   {Tweens.TweenInstance$2}    instance    
     * @param   {DataType}                  value
     * @return  {void}
     */

    /**
     * @memberof Tweens
     * @callback Tweens.OnStartDelegate
     * @param   {Tweens.TweenInstance$2}    instance
     * @return  {void}
     */

    /** @namespace Tweens */

    /**
     * @memberof Tweens
     * @callback Tweens.OnAddDelegate
     * @param   {Tweens.TweenInstance$2}    instance
     * @return  {void}
     */


    /*Tweens.Core.Tween$2 start.*/
    Bridge.define("Tweens.Core.Tween$2", function (ComponentType, DataType) { return {
        inherits: [Tweens.Core.Tween],
        fields: {
            /**
             * The from value defines the starting value of the Tween. When the from value is not set, the Tween will use the current value of the property.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.Core.Nullable$1
             */
            from: null,
            /**
             * The to value defines the end value of the Tween. When the to value is not set, the Tween will use the current value of the property.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.Core.Nullable$1
             */
            to: null,
            /**
             * The on add delegate will be invoked when the Tween has been added to a GameObject.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.OnAddDelegate
             */
            onAdd: null,
            /**
             * The on start delegate will be invoked when the Tween has started.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.OnStartDelegate
             */
            onStart: null,
            /**
             * The on update delegate will be invoked when the Tween has updated.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.OnUpdateDelegate
             */
            onUpdate: null,
            /**
             * The on end delegate will be invoked when the Tween has ended.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.OnEndDelegate
             */
            onEnd: null,
            /**
             * The on cancel delegate will be invoked when the Tween has been cancelled.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.OnCancelDelegate
             */
            onCancel: null,
            /**
             * The on finally delegate will be invoked when the Tween has ended or has been cancelled.
             *
             * @instance
             * @public
             * @memberof Tweens.Core.Tween$2
             * @type Tweens.OnFinallyDelegate
             */
            onFinally: null
        }
    }; });
    /*Tweens.Core.Tween$2 end.*/

    /*Tweens.TweenInstance$2 start.*/
    Bridge.define("Tweens.TweenInstance$2", function (ComponentType, DataType) { return {
        inherits: [Tweens.TweenInstance],
        fields: {
            component: Bridge.getDefaultValue(ComponentType),
            onAdd: null,
            onStart: null,
            onUpdate: null,
            onEnd: null,
            onCancel: null,
            onFinally: null,
            apply: null,
            lerp: null,
            initial: Bridge.getDefaultValue(DataType),
            from: Bridge.getDefaultValue(DataType),
            to: Bridge.getDefaultValue(DataType)
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tweens.TweenInstance$2#init", this ); }

                this.component = Bridge.getDefaultValue(ComponentType);
                this.initial = Bridge.getDefaultValue(DataType);
                this.from = Bridge.getDefaultValue(DataType);
                this.to = Bridge.getDefaultValue(DataType);
            },
            ctor: function (target, tween) {
if ( TRACE ) { TRACE( "Tweens.TweenInstance$2#ctor", this ); }

                this.$initialize();
                Tweens.TweenInstance.ctor.call(this, target, tween);
                this.component = Bridge.rValue(target.GetComponent(ComponentType));
                this.initial = Bridge.rValue(tween.Current(Bridge.rValue(this.component)));
                this.from = tween.from != null ? Bridge.rValue(tween.from.Value) : tween.Current(Bridge.rValue(this.component));
                this.to = tween.to != null ? Bridge.rValue(tween.to.Value) : tween.Current(Bridge.rValue(this.component));
                this.onStart = tween.onStart;
                this.onAdd = tween.onAdd;
                this.onEnd = tween.onEnd;
                this.onCancel = tween.onCancel;
                this.onFinally = tween.onFinally;
                this.haltTime = tween.delay;
                this.loops = tween.isInfinite ? -1 : tween.loops;
                this.onUpdate = tween.onUpdate;
                this.apply = Bridge.fn.cacheBind(tween, tween.Apply);
                this.lerp = Bridge.fn.cacheBind(tween, tween.Lerp);
                this.easeFunction = tween.animationCurve != null ? function (t) { return value(t); } : Tweens.Core.EaseFunctions.GetFunction(tween.easeType);
                !Bridge.staticEquals(this.onAdd, null) ? this.onAdd(this) : null;
                if (System.Nullable.gt(this.haltTime, 0) && (this.fillMode === Tweens.FillMode.Both || this.fillMode === Tweens.FillMode.Forwards)) {
                    this.apply(Bridge.rValue(this.component), Bridge.rValue(this.from));
                    !Bridge.staticEquals(this.onUpdate, null) ? this.onUpdate(this, Bridge.rValue(this.from)) : null;
                }
            }
        },
        methods: {
            /*Tweens.TweenInstance$2.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Tweens.TweenInstance$2#Update", this ); }

                var $t, $t1, $t2;
                if (Bridge.rValue(this.component) == null) {
                    this.Cancel();
                    return;
                }
                if (this.isPaused) {
                    return;
                }
                var deltaTime = this.useUnscaledTime ? UnityEngine.Time.unscaledDeltaTime : UnityEngine.Time.deltaTime;
                if (System.Nullable.hasValue(this.haltTime)) {
                    this.haltTime = System.Nullable.sub(this.haltTime, deltaTime);
                    if (System.Nullable.lte(this.haltTime, 0)) {
                        this.haltTime = null;
                    } else {
                        return;
                    }
                }
                if (!Bridge.staticEquals(this.onStart, null)) {
                    this.onStart(this);
                    this.onStart = null;
                }
                this.time += this.isForwards ? deltaTime : -deltaTime;
                if (this.time >= this.duration) {
                    this.time = this.duration;
                    if (this.usePingPong) {
                        this.isForwards = false;
                        this.haltTime = ($t = this.pingPongInterval, $t != null ? $t : this.haltTime);
                    } else {
                        this.didReachEnd = true;
                        this.haltTime = ($t1 = this.repeatInterval, $t1 != null ? $t1 : this.haltTime);
                    }
                } else if (this.usePingPong && this.time < 0) {
                    this.time = 0;
                    this.isForwards = true;
                    this.didReachEnd = true;
                    this.haltTime = ($t2 = this.repeatInterval, $t2 != null ? $t2 : this.haltTime);
                }
                var easedTime = this.easeFunction(this.time / this.duration);
                var value = Bridge.rValue(this.lerp(Bridge.rValue(this.from), Bridge.rValue(this.to), easedTime));
                this.apply(Bridge.rValue(this.component), Bridge.rValue(value));
                !Bridge.staticEquals(this.onUpdate, null) ? this.onUpdate(this, Bridge.rValue(value)) : null;
                if (this.didReachEnd) {
                    if (System.Nullable.gt(this.loops, 1) || System.Nullable.eq(this.loops, -1)) {
                        this.didReachEnd = false;
                        this.time = 0;
                        if (System.Nullable.gt(this.loops, 1)) {
                            this.loops = Bridge.Int.clip32(System.Nullable.sub(this.loops, 1));
                        }
                    } else {
                        if (this.fillMode === Tweens.FillMode.Forwards || this.fillMode === Tweens.FillMode.None) {
                            this.apply(Bridge.rValue(this.component), Bridge.rValue(this.initial));
                            !Bridge.staticEquals(this.onUpdate, null) ? this.onUpdate(this, Bridge.rValue(this.initial)) : null;
                        }
                        !Bridge.staticEquals(this.onEnd, null) ? this.onEnd(this) : null;
                        !Bridge.staticEquals(this.onFinally, null) ? this.onFinally(this) : null;
                        this.isDecommissioned = true;
                    }
                }
            },
            /*Tweens.TweenInstance$2.Update end.*/

            /*Tweens.TweenInstance$2.Cancel start.*/
            /**
             * The cancel method will cancel the Tween. When the Tween is cancelled, the OnCancel and OnFinally delegates will be invoked.
             *
             * @instance
             * @public
             * @override
             * @this Tweens.TweenInstance$2
             * @memberof Tweens.TweenInstance$2
             * @return  {void}
             */
            Cancel: function () {
if ( TRACE ) { TRACE( "Tweens.TweenInstance$2#Cancel", this ); }

                if (!this.dontInvokeWhenDestroyed || Bridge.rValue(this.component) != null) {
                    !Bridge.staticEquals(this.onCancel, null) ? this.onCancel(this) : null;
                    !Bridge.staticEquals(this.onFinally, null) ? this.onFinally(this) : null;
                }
                this.isDecommissioned = true;
            },
            /*Tweens.TweenInstance$2.Cancel end.*/

            /*Tweens.TweenInstance$2.AwaitDecommission start.*/
            /**
             * The await decommission method will return an enumerator that will await the decommission of the Tween. This can be used in coroutines to wait for the Tween to finish or be cancelled.
             *
             * @instance
             * @public
             * @this Tweens.TweenInstance$2
             * @memberof Tweens.TweenInstance$2
             * @return  {System.Collections.IEnumerator}
             */
            AwaitDecommission: function () {
if ( TRACE ) { TRACE( "Tweens.TweenInstance$2#AwaitDecommission", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( !this.isDecommissioned ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Tweens.TweenInstance$2.AwaitDecommission end.*/


        }
    }; });
    /*Tweens.TweenInstance$2 end.*/

    /*Tweens.AnchoredPositionTween start.*/
    Bridge.define("Tweens.AnchoredPositionTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.RectTransform,UnityEngine.Vector2)],
        methods: {
            /*Tweens.AnchoredPositionTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionTween#Current", this ); }

                return component.anchoredPosition.$clone();
            },
            /*Tweens.AnchoredPositionTween.Current end.*/

            /*Tweens.AnchoredPositionTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionTween#Lerp", this ); }

                return new pc.Vec2().lerpUnclamped( from, to, time );
            },
            /*Tweens.AnchoredPositionTween.Lerp end.*/

            /*Tweens.AnchoredPositionTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionTween#Apply", this ); }

                component.anchoredPosition = value.$clone();
            },
            /*Tweens.AnchoredPositionTween.Apply end.*/


        }
    });
    /*Tweens.AnchoredPositionTween end.*/

    /*Tweens.AnchoredPositionXTween start.*/
    Bridge.define("Tweens.AnchoredPositionXTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.RectTransform,System.Single)],
        methods: {
            /*Tweens.AnchoredPositionXTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionXTween#Current", this ); }

                return component.anchoredPosition.x;
            },
            /*Tweens.AnchoredPositionXTween.Current end.*/

            /*Tweens.AnchoredPositionXTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionXTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.AnchoredPositionXTween.Lerp end.*/

            /*Tweens.AnchoredPositionXTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionXTween#Apply", this ); }

                var anchoredPosition = component.anchoredPosition.$clone();
                anchoredPosition.x = value;
                component.anchoredPosition = anchoredPosition.$clone();
            },
            /*Tweens.AnchoredPositionXTween.Apply end.*/


        }
    });
    /*Tweens.AnchoredPositionXTween end.*/

    /*Tweens.AnchoredPositionYTween start.*/
    Bridge.define("Tweens.AnchoredPositionYTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.RectTransform,System.Single)],
        methods: {
            /*Tweens.AnchoredPositionYTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionYTween#Current", this ); }

                return component.anchoredPosition.y;
            },
            /*Tweens.AnchoredPositionYTween.Current end.*/

            /*Tweens.AnchoredPositionYTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionYTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.AnchoredPositionYTween.Lerp end.*/

            /*Tweens.AnchoredPositionYTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.AnchoredPositionYTween#Apply", this ); }

                var anchoredPosition = component.anchoredPosition.$clone();
                anchoredPosition.y = value;
                component.anchoredPosition = anchoredPosition.$clone();
            },
            /*Tweens.AnchoredPositionYTween.Apply end.*/


        }
    });
    /*Tweens.AnchoredPositionYTween end.*/

    /*Tweens.AnchorMaxTween start.*/
    Bridge.define("Tweens.AnchorMaxTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.RectTransform,UnityEngine.Vector2)],
        methods: {
            /*Tweens.AnchorMaxTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.AnchorMaxTween#Current", this ); }

                return component.anchorMax.$clone();
            },
            /*Tweens.AnchorMaxTween.Current end.*/

            /*Tweens.AnchorMaxTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.AnchorMaxTween#Lerp", this ); }

                return new pc.Vec2().lerpUnclamped( from, to, time );
            },
            /*Tweens.AnchorMaxTween.Lerp end.*/

            /*Tweens.AnchorMaxTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.AnchorMaxTween#Apply", this ); }

                component.anchorMax = value.$clone();
            },
            /*Tweens.AnchorMaxTween.Apply end.*/


        }
    });
    /*Tweens.AnchorMaxTween end.*/

    /*Tweens.AnchorMinTween start.*/
    Bridge.define("Tweens.AnchorMinTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.RectTransform,UnityEngine.Vector2)],
        methods: {
            /*Tweens.AnchorMinTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.AnchorMinTween#Current", this ); }

                return component.anchorMin.$clone();
            },
            /*Tweens.AnchorMinTween.Current end.*/

            /*Tweens.AnchorMinTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.AnchorMinTween#Lerp", this ); }

                return new pc.Vec2().lerpUnclamped( from, to, time );
            },
            /*Tweens.AnchorMinTween.Lerp end.*/

            /*Tweens.AnchorMinTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.AnchorMinTween#Apply", this ); }

                component.anchorMin = value.$clone();
            },
            /*Tweens.AnchorMinTween.Apply end.*/


        }
    });
    /*Tweens.AnchorMinTween end.*/

    /*Tweens.ColorTween start.*/
    Bridge.define("Tweens.ColorTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Color)],
        methods: {
            /*Tweens.ColorTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.ColorTween#Current", this ); }

                return new pc.Color( 0, 0, 0, 0 );
            },
            /*Tweens.ColorTween.Current end.*/

            /*Tweens.ColorTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.ColorTween#Lerp", this ); }

                return pc.Color.lerpUnclamped( from.$clone(), to.$clone(), time );
            },
            /*Tweens.ColorTween.Lerp end.*/

            /*Tweens.ColorTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.ColorTween#Apply", this ); }
 },
            /*Tweens.ColorTween.Apply end.*/


        }
    });
    /*Tweens.ColorTween end.*/

    /*Tweens.EulerAnglesTween start.*/
    Bridge.define("Tweens.EulerAnglesTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector3)],
        methods: {
            /*Tweens.EulerAnglesTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesTween#Current", this ); }

                return component.eulerAngles.$clone();
            },
            /*Tweens.EulerAnglesTween.Current end.*/

            /*Tweens.EulerAnglesTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesTween#Lerp", this ); }

                return new pc.Vec3().lerpUnclamped( from, to, time );
            },
            /*Tweens.EulerAnglesTween.Lerp end.*/

            /*Tweens.EulerAnglesTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesTween#Apply", this ); }

                component.eulerAngles = value.$clone();
            },
            /*Tweens.EulerAnglesTween.Apply end.*/


        }
    });
    /*Tweens.EulerAnglesTween end.*/

    /*Tweens.EulerAnglesXTween start.*/
    Bridge.define("Tweens.EulerAnglesXTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.EulerAnglesXTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesXTween#Current", this ); }

                return component.eulerAngles.x;
            },
            /*Tweens.EulerAnglesXTween.Current end.*/

            /*Tweens.EulerAnglesXTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesXTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.EulerAnglesXTween.Lerp end.*/

            /*Tweens.EulerAnglesXTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesXTween#Apply", this ); }

                var eulerAngles = component.eulerAngles.$clone();
                eulerAngles.x = value;
                component.eulerAngles = eulerAngles.$clone();
            },
            /*Tweens.EulerAnglesXTween.Apply end.*/


        }
    });
    /*Tweens.EulerAnglesXTween end.*/

    /*Tweens.EulerAnglesYTween start.*/
    Bridge.define("Tweens.EulerAnglesYTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.EulerAnglesYTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesYTween#Current", this ); }

                return component.eulerAngles.y;
            },
            /*Tweens.EulerAnglesYTween.Current end.*/

            /*Tweens.EulerAnglesYTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesYTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.EulerAnglesYTween.Lerp end.*/

            /*Tweens.EulerAnglesYTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesYTween#Apply", this ); }

                var eulerAngles = component.eulerAngles.$clone();
                eulerAngles.y = value;
                component.eulerAngles = eulerAngles.$clone();
            },
            /*Tweens.EulerAnglesYTween.Apply end.*/


        }
    });
    /*Tweens.EulerAnglesYTween end.*/

    /*Tweens.EulerAnglesZTween start.*/
    Bridge.define("Tweens.EulerAnglesZTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.EulerAnglesZTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesZTween#Current", this ); }

                return component.eulerAngles.z;
            },
            /*Tweens.EulerAnglesZTween.Current end.*/

            /*Tweens.EulerAnglesZTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesZTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.EulerAnglesZTween.Lerp end.*/

            /*Tweens.EulerAnglesZTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.EulerAnglesZTween#Apply", this ); }

                var eulerAngles = component.eulerAngles.$clone();
                eulerAngles.z = value;
                component.eulerAngles = eulerAngles.$clone();
            },
            /*Tweens.EulerAnglesZTween.Apply end.*/


        }
    });
    /*Tweens.EulerAnglesZTween end.*/

    /*Tweens.FloatTween start.*/
    Bridge.define("Tweens.FloatTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.FloatTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.FloatTween#Current", this ); }

                return 0;
            },
            /*Tweens.FloatTween.Current end.*/

            /*Tweens.FloatTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.FloatTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.FloatTween.Lerp end.*/

            /*Tweens.FloatTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.FloatTween#Apply", this ); }
 },
            /*Tweens.FloatTween.Apply end.*/


        }
    });
    /*Tweens.FloatTween end.*/

    /*Tweens.LightColorTween start.*/
    Bridge.define("Tweens.LightColorTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Light,UnityEngine.Color)],
        methods: {
            /*Tweens.LightColorTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LightColorTween#Current", this ); }

                return component.color.$clone();
            },
            /*Tweens.LightColorTween.Current end.*/

            /*Tweens.LightColorTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LightColorTween#Lerp", this ); }

                return pc.Color.lerpUnclamped( from.$clone(), to.$clone(), time );
            },
            /*Tweens.LightColorTween.Lerp end.*/

            /*Tweens.LightColorTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LightColorTween#Apply", this ); }

                component.color = value.$clone();
            },
            /*Tweens.LightColorTween.Apply end.*/


        }
    });
    /*Tweens.LightColorTween end.*/

    /*Tweens.LightIntensityTween start.*/
    Bridge.define("Tweens.LightIntensityTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Light,System.Single)],
        methods: {
            /*Tweens.LightIntensityTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LightIntensityTween#Current", this ); }

                return component.intensity;
            },
            /*Tweens.LightIntensityTween.Current end.*/

            /*Tweens.LightIntensityTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LightIntensityTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LightIntensityTween.Lerp end.*/

            /*Tweens.LightIntensityTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LightIntensityTween#Apply", this ); }

                component.intensity = value;
            },
            /*Tweens.LightIntensityTween.Apply end.*/


        }
    });
    /*Tweens.LightIntensityTween end.*/

    /*Tweens.LightRangeTween start.*/
    Bridge.define("Tweens.LightRangeTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Light,System.Single)],
        methods: {
            /*Tweens.LightRangeTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LightRangeTween#Current", this ); }

                return component.range;
            },
            /*Tweens.LightRangeTween.Current end.*/

            /*Tweens.LightRangeTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LightRangeTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LightRangeTween.Lerp end.*/

            /*Tweens.LightRangeTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LightRangeTween#Apply", this ); }

                component.range = value;
            },
            /*Tweens.LightRangeTween.Apply end.*/


        }
    });
    /*Tweens.LightRangeTween end.*/

    /*Tweens.LightSpotAngleTween start.*/
    Bridge.define("Tweens.LightSpotAngleTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Light,System.Single)],
        methods: {
            /*Tweens.LightSpotAngleTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LightSpotAngleTween#Current", this ); }

                return component.spotAngle;
            },
            /*Tweens.LightSpotAngleTween.Current end.*/

            /*Tweens.LightSpotAngleTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LightSpotAngleTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LightSpotAngleTween.Lerp end.*/

            /*Tweens.LightSpotAngleTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LightSpotAngleTween#Apply", this ); }

                component.spotAngle = value;
            },
            /*Tweens.LightSpotAngleTween.Apply end.*/


        }
    });
    /*Tweens.LightSpotAngleTween end.*/

    /*Tweens.LocalEulerAnglesTween start.*/
    Bridge.define("Tweens.LocalEulerAnglesTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector3)],
        methods: {
            /*Tweens.LocalEulerAnglesTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesTween#Current", this ); }

                return component.localEulerAngles.$clone();
            },
            /*Tweens.LocalEulerAnglesTween.Current end.*/

            /*Tweens.LocalEulerAnglesTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesTween#Lerp", this ); }

                return new pc.Vec3().lerpUnclamped( from, to, time );
            },
            /*Tweens.LocalEulerAnglesTween.Lerp end.*/

            /*Tweens.LocalEulerAnglesTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesTween#Apply", this ); }

                component.localEulerAngles = value.$clone();
            },
            /*Tweens.LocalEulerAnglesTween.Apply end.*/


        }
    });
    /*Tweens.LocalEulerAnglesTween end.*/

    /*Tweens.LocalEulerAnglesXTween start.*/
    Bridge.define("Tweens.LocalEulerAnglesXTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalEulerAnglesXTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesXTween#Current", this ); }

                return component.localEulerAngles.x;
            },
            /*Tweens.LocalEulerAnglesXTween.Current end.*/

            /*Tweens.LocalEulerAnglesXTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesXTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalEulerAnglesXTween.Lerp end.*/

            /*Tweens.LocalEulerAnglesXTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesXTween#Apply", this ); }

                var localEulerAngles = component.localEulerAngles.$clone();
                localEulerAngles.x = value;
                component.localEulerAngles = localEulerAngles.$clone();
            },
            /*Tweens.LocalEulerAnglesXTween.Apply end.*/


        }
    });
    /*Tweens.LocalEulerAnglesXTween end.*/

    /*Tweens.LocalEulerAnglesYTween start.*/
    Bridge.define("Tweens.LocalEulerAnglesYTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalEulerAnglesYTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesYTween#Current", this ); }

                return component.localEulerAngles.y;
            },
            /*Tweens.LocalEulerAnglesYTween.Current end.*/

            /*Tweens.LocalEulerAnglesYTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesYTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalEulerAnglesYTween.Lerp end.*/

            /*Tweens.LocalEulerAnglesYTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesYTween#Apply", this ); }

                var localEulerAngles = component.localEulerAngles.$clone();
                localEulerAngles.y = value;
                component.localEulerAngles = localEulerAngles.$clone();
            },
            /*Tweens.LocalEulerAnglesYTween.Apply end.*/


        }
    });
    /*Tweens.LocalEulerAnglesYTween end.*/

    /*Tweens.LocalEulerAnglesZTween start.*/
    Bridge.define("Tweens.LocalEulerAnglesZTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalEulerAnglesZTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesZTween#Current", this ); }

                return component.localEulerAngles.z;
            },
            /*Tweens.LocalEulerAnglesZTween.Current end.*/

            /*Tweens.LocalEulerAnglesZTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesZTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalEulerAnglesZTween.Lerp end.*/

            /*Tweens.LocalEulerAnglesZTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalEulerAnglesZTween#Apply", this ); }

                var localEulerAngles = component.localEulerAngles.$clone();
                localEulerAngles.z = value;
                component.localEulerAngles = localEulerAngles.$clone();
            },
            /*Tweens.LocalEulerAnglesZTween.Apply end.*/


        }
    });
    /*Tweens.LocalEulerAnglesZTween end.*/

    /*Tweens.LocalPositionTween start.*/
    Bridge.define("Tweens.LocalPositionTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector3)],
        methods: {
            /*Tweens.LocalPositionTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionTween#Current", this ); }

                return component.localPosition.$clone();
            },
            /*Tweens.LocalPositionTween.Current end.*/

            /*Tweens.LocalPositionTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionTween#Lerp", this ); }

                return new pc.Vec3().lerpUnclamped( from, to, time );
            },
            /*Tweens.LocalPositionTween.Lerp end.*/

            /*Tweens.LocalPositionTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionTween#Apply", this ); }

                component.localPosition = value.$clone();
            },
            /*Tweens.LocalPositionTween.Apply end.*/


        }
    });
    /*Tweens.LocalPositionTween end.*/

    /*Tweens.LocalPositionXTween start.*/
    Bridge.define("Tweens.LocalPositionXTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalPositionXTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionXTween#Current", this ); }

                return component.localPosition.x;
            },
            /*Tweens.LocalPositionXTween.Current end.*/

            /*Tweens.LocalPositionXTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionXTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalPositionXTween.Lerp end.*/

            /*Tweens.LocalPositionXTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionXTween#Apply", this ); }

                var localPosition = component.localPosition.$clone();
                localPosition.x = value;
                component.localPosition = localPosition.$clone();
            },
            /*Tweens.LocalPositionXTween.Apply end.*/


        }
    });
    /*Tweens.LocalPositionXTween end.*/

    /*Tweens.LocalPositionYTween start.*/
    Bridge.define("Tweens.LocalPositionYTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalPositionYTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionYTween#Current", this ); }

                return component.localPosition.y;
            },
            /*Tweens.LocalPositionYTween.Current end.*/

            /*Tweens.LocalPositionYTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionYTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalPositionYTween.Lerp end.*/

            /*Tweens.LocalPositionYTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionYTween#Apply", this ); }

                var localPosition = component.localPosition.$clone();
                localPosition.y = value;
                component.localPosition = localPosition.$clone();
            },
            /*Tweens.LocalPositionYTween.Apply end.*/


        }
    });
    /*Tweens.LocalPositionYTween end.*/

    /*Tweens.LocalPositionZTween start.*/
    Bridge.define("Tweens.LocalPositionZTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalPositionZTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionZTween#Current", this ); }

                return component.localPosition.z;
            },
            /*Tweens.LocalPositionZTween.Current end.*/

            /*Tweens.LocalPositionZTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionZTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalPositionZTween.Lerp end.*/

            /*Tweens.LocalPositionZTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalPositionZTween#Apply", this ); }

                var localPosition = component.localPosition.$clone();
                localPosition.z = value;
                component.localPosition = localPosition.$clone();
            },
            /*Tweens.LocalPositionZTween.Apply end.*/


        }
    });
    /*Tweens.LocalPositionZTween end.*/

    /*Tweens.LocalRotationTween start.*/
    Bridge.define("Tweens.LocalRotationTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Quaternion)],
        methods: {
            /*Tweens.LocalRotationTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalRotationTween#Current", this ); }

                return component.localRotation.$clone();
            },
            /*Tweens.LocalRotationTween.Current end.*/

            /*Tweens.LocalRotationTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalRotationTween#Lerp", this ); }

                return new pc.Quat().lerpUnclamped( from, to, time );
            },
            /*Tweens.LocalRotationTween.Lerp end.*/

            /*Tweens.LocalRotationTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalRotationTween#Apply", this ); }

                component.localRotation = value.$clone();
            },
            /*Tweens.LocalRotationTween.Apply end.*/


        }
    });
    /*Tweens.LocalRotationTween end.*/

    /*Tweens.LocalScaleTween start.*/
    Bridge.define("Tweens.LocalScaleTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector3)],
        methods: {
            /*Tweens.LocalScaleTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleTween#Current", this ); }

                return component.localScale.$clone();
            },
            /*Tweens.LocalScaleTween.Current end.*/

            /*Tweens.LocalScaleTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleTween#Lerp", this ); }

                return new pc.Vec3().lerpUnclamped( from, to, time );
            },
            /*Tweens.LocalScaleTween.Lerp end.*/

            /*Tweens.LocalScaleTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleTween#Apply", this ); }

                component.localScale = value.$clone();
            },
            /*Tweens.LocalScaleTween.Apply end.*/


        }
    });
    /*Tweens.LocalScaleTween end.*/

    /*Tweens.LocalScaleXTween start.*/
    Bridge.define("Tweens.LocalScaleXTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalScaleXTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleXTween#Current", this ); }

                return component.localScale.x;
            },
            /*Tweens.LocalScaleXTween.Current end.*/

            /*Tweens.LocalScaleXTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleXTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalScaleXTween.Lerp end.*/

            /*Tweens.LocalScaleXTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleXTween#Apply", this ); }

                var localScale = component.localScale.$clone();
                localScale.x = value;
                component.localScale = localScale.$clone();
            },
            /*Tweens.LocalScaleXTween.Apply end.*/


        }
    });
    /*Tweens.LocalScaleXTween end.*/

    /*Tweens.LocalScaleYTween start.*/
    Bridge.define("Tweens.LocalScaleYTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalScaleYTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleYTween#Current", this ); }

                return component.localScale.y;
            },
            /*Tweens.LocalScaleYTween.Current end.*/

            /*Tweens.LocalScaleYTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleYTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalScaleYTween.Lerp end.*/

            /*Tweens.LocalScaleYTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleYTween#Apply", this ); }

                var localScale = component.localScale.$clone();
                localScale.y = value;
                component.localScale = localScale.$clone();
            },
            /*Tweens.LocalScaleYTween.Apply end.*/


        }
    });
    /*Tweens.LocalScaleYTween end.*/

    /*Tweens.LocalScaleZTween start.*/
    Bridge.define("Tweens.LocalScaleZTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.LocalScaleZTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleZTween#Current", this ); }

                return component.localScale.z;
            },
            /*Tweens.LocalScaleZTween.Current end.*/

            /*Tweens.LocalScaleZTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleZTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.LocalScaleZTween.Lerp end.*/

            /*Tweens.LocalScaleZTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.LocalScaleZTween#Apply", this ); }

                var localScale = component.localScale.$clone();
                localScale.z = value;
                component.localScale = localScale.$clone();
            },
            /*Tweens.LocalScaleZTween.Apply end.*/


        }
    });
    /*Tweens.LocalScaleZTween end.*/

    /*Tweens.PositionTween start.*/
    Bridge.define("Tweens.PositionTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector3)],
        methods: {
            /*Tweens.PositionTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.PositionTween#Current", this ); }

                return component.position.$clone();
            },
            /*Tweens.PositionTween.Current end.*/

            /*Tweens.PositionTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.PositionTween#Lerp", this ); }

                return new pc.Vec3().lerpUnclamped( from, to, time );
            },
            /*Tweens.PositionTween.Lerp end.*/

            /*Tweens.PositionTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.PositionTween#Apply", this ); }

                component.position = value.$clone();
            },
            /*Tweens.PositionTween.Apply end.*/


        }
    });
    /*Tweens.PositionTween end.*/

    /*Tweens.PositionXTween start.*/
    Bridge.define("Tweens.PositionXTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.PositionXTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.PositionXTween#Current", this ); }

                return component.position.x;
            },
            /*Tweens.PositionXTween.Current end.*/

            /*Tweens.PositionXTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.PositionXTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.PositionXTween.Lerp end.*/

            /*Tweens.PositionXTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.PositionXTween#Apply", this ); }

                var position = component.position.$clone();
                position.x = value;
                component.position = position.$clone();
            },
            /*Tweens.PositionXTween.Apply end.*/


        }
    });
    /*Tweens.PositionXTween end.*/

    /*Tweens.PositionYTween start.*/
    Bridge.define("Tweens.PositionYTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.PositionYTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.PositionYTween#Current", this ); }

                return component.position.y;
            },
            /*Tweens.PositionYTween.Current end.*/

            /*Tweens.PositionYTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.PositionYTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.PositionYTween.Lerp end.*/

            /*Tweens.PositionYTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.PositionYTween#Apply", this ); }

                var position = component.position.$clone();
                position.y = value;
                component.position = position.$clone();
            },
            /*Tweens.PositionYTween.Apply end.*/


        }
    });
    /*Tweens.PositionYTween end.*/

    /*Tweens.PositionZTween start.*/
    Bridge.define("Tweens.PositionZTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,System.Single)],
        methods: {
            /*Tweens.PositionZTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.PositionZTween#Current", this ); }

                return component.position.z;
            },
            /*Tweens.PositionZTween.Current end.*/

            /*Tweens.PositionZTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.PositionZTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.PositionZTween.Lerp end.*/

            /*Tweens.PositionZTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.PositionZTween#Apply", this ); }

                var position = component.position.$clone();
                position.z = value;
                component.position = position.$clone();
            },
            /*Tweens.PositionZTween.Apply end.*/


        }
    });
    /*Tweens.PositionZTween end.*/

    /*Tweens.QuaternionTween start.*/
    Bridge.define("Tweens.QuaternionTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Quaternion)],
        methods: {
            /*Tweens.QuaternionTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.QuaternionTween#Current", this ); }

                return pc.Quat.IDENTITY.clone();
            },
            /*Tweens.QuaternionTween.Current end.*/

            /*Tweens.QuaternionTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.QuaternionTween#Lerp", this ); }

                return new pc.Quat().lerpUnclamped( from, to, time );
            },
            /*Tweens.QuaternionTween.Lerp end.*/

            /*Tweens.QuaternionTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.QuaternionTween#Apply", this ); }
 },
            /*Tweens.QuaternionTween.Apply end.*/


        }
    });
    /*Tweens.QuaternionTween end.*/

    /*Tweens.RectTween start.*/
    Bridge.define("Tweens.RectTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Rect)],
        methods: {
            /*Tweens.RectTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.RectTween#Current", this ); }

                return UnityEngine.Rect.zero.$clone();
            },
            /*Tweens.RectTween.Current end.*/

            /*Tweens.RectTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.RectTween#Lerp", this ); }

                var x = UnityEngine.Mathf.LerpUnclamped(from.x, to.x, time);
                var y = UnityEngine.Mathf.LerpUnclamped(from.y, to.y, time);
                var width = UnityEngine.Mathf.LerpUnclamped(from.width, to.width, time);
                var height = UnityEngine.Mathf.LerpUnclamped(from.height, to.height, time);
                return new UnityEngine.Rect.$ctor1(x, y, width, height);
            },
            /*Tweens.RectTween.Lerp end.*/

            /*Tweens.RectTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.RectTween#Apply", this ); }
 },
            /*Tweens.RectTween.Apply end.*/


        }
    });
    /*Tweens.RectTween end.*/

    /*Tweens.RotationTween start.*/
    Bridge.define("Tweens.RotationTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Quaternion)],
        methods: {
            /*Tweens.RotationTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.RotationTween#Current", this ); }

                return component.rotation.$clone();
            },
            /*Tweens.RotationTween.Current end.*/

            /*Tweens.RotationTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.RotationTween#Lerp", this ); }

                return new pc.Quat().lerpUnclamped( from, to, time );
            },
            /*Tweens.RotationTween.Lerp end.*/

            /*Tweens.RotationTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.RotationTween#Apply", this ); }

                component.rotation = value.$clone();
            },
            /*Tweens.RotationTween.Apply end.*/


        }
    });
    /*Tweens.RotationTween end.*/

    /*Tweens.SpriteRendererAlphaTween start.*/
    Bridge.define("Tweens.SpriteRendererAlphaTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.SpriteRenderer,System.Single)],
        methods: {
            /*Tweens.SpriteRendererAlphaTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.SpriteRendererAlphaTween#Current", this ); }

                return component.color.a;
            },
            /*Tweens.SpriteRendererAlphaTween.Current end.*/

            /*Tweens.SpriteRendererAlphaTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.SpriteRendererAlphaTween#Lerp", this ); }

                return UnityEngine.Mathf.LerpUnclamped(from, to, time);
            },
            /*Tweens.SpriteRendererAlphaTween.Lerp end.*/

            /*Tweens.SpriteRendererAlphaTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.SpriteRendererAlphaTween#Apply", this ); }

                var color = component.color.$clone();
                color.a = value;
                component.color = color.$clone();
            },
            /*Tweens.SpriteRendererAlphaTween.Apply end.*/


        }
    });
    /*Tweens.SpriteRendererAlphaTween end.*/

    /*Tweens.SpriteRendererColorTween start.*/
    Bridge.define("Tweens.SpriteRendererColorTween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.SpriteRenderer,UnityEngine.Color)],
        methods: {
            /*Tweens.SpriteRendererColorTween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.SpriteRendererColorTween#Current", this ); }

                return component.color.$clone();
            },
            /*Tweens.SpriteRendererColorTween.Current end.*/

            /*Tweens.SpriteRendererColorTween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.SpriteRendererColorTween#Lerp", this ); }

                return pc.Color.lerpUnclamped( from.$clone(), to.$clone(), time );
            },
            /*Tweens.SpriteRendererColorTween.Lerp end.*/

            /*Tweens.SpriteRendererColorTween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.SpriteRendererColorTween#Apply", this ); }

                component.color = value.$clone();
            },
            /*Tweens.SpriteRendererColorTween.Apply end.*/


        }
    });
    /*Tweens.SpriteRendererColorTween end.*/

    /*Tweens.Vector2Tween start.*/
    Bridge.define("Tweens.Vector2Tween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector2)],
        methods: {
            /*Tweens.Vector2Tween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.Vector2Tween#Current", this ); }

                return pc.Vec2.ZERO.clone();
            },
            /*Tweens.Vector2Tween.Current end.*/

            /*Tweens.Vector2Tween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.Vector2Tween#Lerp", this ); }

                return new pc.Vec2().lerpUnclamped( from, to, time );
            },
            /*Tweens.Vector2Tween.Lerp end.*/

            /*Tweens.Vector2Tween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.Vector2Tween#Apply", this ); }
 },
            /*Tweens.Vector2Tween.Apply end.*/


        }
    });
    /*Tweens.Vector2Tween end.*/

    /*Tweens.Vector3Tween start.*/
    Bridge.define("Tweens.Vector3Tween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector3)],
        methods: {
            /*Tweens.Vector3Tween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.Vector3Tween#Current", this ); }

                return pc.Vec3.ZERO.clone();
            },
            /*Tweens.Vector3Tween.Current end.*/

            /*Tweens.Vector3Tween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.Vector3Tween#Lerp", this ); }

                return new pc.Vec3().lerpUnclamped( from, to, time );
            },
            /*Tweens.Vector3Tween.Lerp end.*/

            /*Tweens.Vector3Tween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.Vector3Tween#Apply", this ); }
 },
            /*Tweens.Vector3Tween.Apply end.*/


        }
    });
    /*Tweens.Vector3Tween end.*/

    /*Tweens.Vector4Tween start.*/
    Bridge.define("Tweens.Vector4Tween", {
        inherits: [Tweens.Core.Tween$2(UnityEngine.Transform,UnityEngine.Vector4)],
        methods: {
            /*Tweens.Vector4Tween.Current start.*/
            Current: function (component) {
if ( TRACE ) { TRACE( "Tweens.Vector4Tween#Current", this ); }

                return pc.Vec4.ZERO.clone();
            },
            /*Tweens.Vector4Tween.Current end.*/

            /*Tweens.Vector4Tween.Lerp start.*/
            Lerp: function (from, to, time) {
if ( TRACE ) { TRACE( "Tweens.Vector4Tween#Lerp", this ); }

                return new pc.Vec4().lerpUnclamped( from, to, time );
            },
            /*Tweens.Vector4Tween.Lerp end.*/

            /*Tweens.Vector4Tween.Apply start.*/
            Apply: function (component, value) {
if ( TRACE ) { TRACE( "Tweens.Vector4Tween#Apply", this ); }
 },
            /*Tweens.Vector4Tween.Apply end.*/


        }
    });
    /*Tweens.Vector4Tween end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections.Generic","Source.Optional","UnityEngine","System.Collections","Source.Game.HexMerge","UnityEngine.UI","Source.Pooling","Tweens","Tweens.Core"];

    /*EGameFinish start.*/
    $m("EGameFinish", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Lose","is":true,"t":4,"rt":EGameFinish,"sn":"Lose","box":function ($v) { return Bridge.box($v, EGameFinish, System.Enum.toStringFn(EGameFinish));}},{"a":2,"n":"Win","is":true,"t":4,"rt":EGameFinish,"sn":"Win","box":function ($v) { return Bridge.box($v, EGameFinish, System.Enum.toStringFn(EGameFinish));}}]}; }, $n);
    /*EGameFinish end.*/

    /*HexBoardModel start.*/
    $m("HexBoardModel", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Int32],"pi":[{"n":"width","pt":$n[0].Int32,"ps":0},{"n":"height","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"AddTile","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"tile","pt":HexTile,"ps":1},{"n":"amount","dv":1,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"AddTile","rt":$n[0].Void,"p":[HexCoord,HexTile,$n[0].Int32]},{"a":2,"n":"AddTiles","t":8,"pi":[{"n":"additions","ip":true,"pt":System.Array.type(HexTileAddition),"ps":0}],"sn":"AddTiles","rt":$n[0].Void,"p":[System.Array.type(HexTileAddition)]},{"a":1,"n":"ApplyCollapsePhase","t":8,"pi":[{"n":"collapses","pt":$n[1].List$1(HexCollapsed),"ps":0}],"sn":"ApplyCollapsePhase","rt":$n[0].Void,"p":[$n[1].List$1(HexCollapsed)]},{"a":1,"n":"ApplyMerge","t":8,"pi":[{"n":"plan","pt":HexMergePlan,"ps":0}],"sn":"ApplyMerge","rt":$n[0].Void,"p":[HexMergePlan]},{"a":2,"n":"BeginBatchUpdate","t":8,"sn":"BeginBatchUpdate","rt":$n[0].Void},{"a":1,"n":"CollectCellCollapses","is":true,"t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"cell","pt":HexCellModel,"ps":1},{"n":"collapses","pt":$n[1].List$1(HexCollapsed),"ps":2}],"sn":"CollectCellCollapses","rt":$n[0].Void,"p":[HexCoord,HexCellModel,$n[1].List$1(HexCollapsed)]},{"a":1,"n":"CollectCollapses","t":8,"sn":"CollectCollapses","rt":$n[1].List$1(HexCollapsed)},{"a":2,"n":"EndBatchUpdate","t":8,"pi":[{"n":"processMerges","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"EndBatchUpdate","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"EnqueueForMerge","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"EnqueueForMerge","rt":$n[0].Void,"p":[HexCoord]},{"a":2,"n":"Exist","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"Exist","rt":$n[0].Boolean,"p":[HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"GetCellOrThrow","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetCellOrThrow","rt":HexCellModel,"p":[HexCoord]},{"a":2,"n":"GetNeighborCoord","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"direction","pt":HexDirection,"ps":1}],"sn":"GetNeighborCoord","rt":$n[2].Option$1(HexCoord),"p":[HexCoord,HexDirection]},{"a":2,"n":"GetTopTile","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetTopTile","rt":$n[2].Option$1(HexTile),"p":[HexCoord]},{"a":1,"n":"NotifyCellChanged","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"NotifyCellChanged","rt":$n[0].Void,"p":[HexCoord]},{"a":1,"n":"ProcessMergePhase","t":8,"sn":"ProcessMergePhase","rt":$n[0].Void},{"a":2,"n":"ProcessPendingMerges","t":8,"sn":"ProcessPendingMerges","rt":$n[0].Void},{"a":2,"n":"RemoveTopTile","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"RemoveTopTile","rt":$n[2].Option$1(HexTile),"p":[HexCoord]},{"a":1,"n":"TryProcessPendingMerges","t":8,"sn":"TryProcessPendingMerges","rt":$n[0].Void},{"a":2,"n":"Height","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Height","t":8,"rt":$n[0].Int32,"fg":"Height","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Height"},{"a":2,"n":"Item","t":16,"rt":HexCellModel,"p":[HexCoord],"i":true,"ipi":[{"n":"coord","pt":HexCoord,"ps":0}],"g":{"a":2,"n":"get_Item","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"getItem","rt":HexCellModel,"p":[HexCoord]}},{"a":2,"n":"Width","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Width","t":8,"rt":$n[0].Int32,"fg":"Width","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Width"},{"a":1,"n":"CollapseThreshold","is":true,"t":4,"rt":$n[0].Int32,"sn":"CollapseThreshold","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_batchDepth","t":4,"rt":$n[0].Int32,"sn":"_batchDepth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_cells","t":4,"rt":HexGrid$1(HexCellModel),"sn":"_cells"},{"a":1,"n":"_isProcessingMerges","t":4,"rt":$n[0].Boolean,"sn":"_isProcessingMerges","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_mergeQueue","t":4,"rt":$n[1].Queue$1(HexCoord),"sn":"_mergeQueue"},{"a":1,"n":"_queuedCoords","t":4,"rt":$n[1].HashSet$1(HexCoord),"sn":"_queuedCoords"},{"a":2,"n":"CellChanged","t":2,"ad":{"a":2,"n":"add_CellChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addCellChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_CellChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeCellChanged","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Collapsed","t":2,"ad":{"a":2,"n":"add_Collapsed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addCollapsed","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Collapsed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeCollapsed","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Merged","t":2,"ad":{"a":2,"n":"add_Merged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addMerged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Merged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeMerged","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TileAdded","t":2,"ad":{"a":2,"n":"add_TileAdded","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTileAdded","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TileAdded","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTileAdded","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Height>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Height","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Width>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Width","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexBoardModel end.*/

    /*HexBoardSetupConfig start.*/
    $m("HexBoardSetupConfig", function () { return {"att":1048833,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Hex Merge/BoardSetupConfig"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Cells","t":16,"rt":System.Array.type(HexCellStackSetup),"g":{"a":2,"n":"get_Cells","t":8,"rt":System.Array.type(HexCellStackSetup),"fg":"Cells"},"fn":"Cells"},{"a":2,"n":"Height","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Height","t":8,"rt":$n[0].Int32,"fg":"Height","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Height"},{"a":2,"n":"Width","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Width","t":8,"rt":$n[0].Int32,"fg":"Width","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Width"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cells","t":4,"rt":System.Array.type(HexCellStackSetup),"sn":"_cells"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_height","t":4,"rt":$n[0].Int32,"sn":"_height","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_width","t":4,"rt":$n[0].Int32,"sn":"_width","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexBoardSetupConfig end.*/

    /*HexCellStackSetup start.*/
    $m("HexCellStackSetup", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Amount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Amount","t":8,"rt":$n[0].Int32,"fg":"Amount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Amount"},{"a":2,"n":"Color","t":16,"rt":HexColor,"g":{"a":2,"n":"get_Color","t":8,"rt":HexColor,"fg":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"fn":"Color"},{"a":2,"n":"Position","t":16,"rt":$n[3].Vector2Int,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[3].Vector2Int,"fg":"Position"},"fn":"Position"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_amount","t":4,"rt":$n[0].Int32,"sn":"_amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_color","t":4,"rt":HexColor,"sn":"_color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_position","t":4,"rt":$n[3].Vector2Int,"sn":"_position"}]}; }, $n);
    /*HexCellStackSetup end.*/

    /*HexCellChanged start.*/
    $m("HexCellChanged", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexCoord,HexCellModel],"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"cell","pt":HexCellModel,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"Cell","t":16,"rt":HexCellModel,"g":{"a":2,"n":"get_Cell","t":8,"rt":HexCellModel,"fg":"Cell"},"fn":"Cell"},{"a":2,"n":"Coord","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_Coord","t":8,"rt":HexCoord,"fg":"Coord"},"fn":"Coord"},{"a":1,"backing":true,"n":"<Cell>k__BackingField","t":4,"rt":HexCellModel,"sn":"Cell"},{"a":1,"backing":true,"n":"<Coord>k__BackingField","t":4,"rt":HexCoord,"sn":"Coord"}]}; }, $n);
    /*HexCellChanged end.*/

    /*HexCellModel start.*/
    $m("HexCellModel", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PeekTop","t":8,"sn":"PeekTop","rt":$n[2].Option$1(HexTile)},{"a":2,"n":"PeekTopColor","t":8,"sn":"PeekTopColor","rt":HexColor,"box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Pop","t":8,"sn":"Pop","rt":HexTile},{"a":2,"n":"PopOption","t":8,"sn":"PopOption","rt":$n[2].Option$1(HexTile)},{"a":2,"n":"Push","t":8,"pi":[{"n":"tile","pt":HexTile,"ps":0}],"sn":"Push","rt":$n[0].Void,"p":[HexTile]},{"a":2,"n":"RemoveRange","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"RemoveRange","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"Tiles","t":16,"rt":$n[1].IReadOnlyList$1(HexTile),"g":{"a":2,"n":"get_Tiles","t":8,"rt":$n[1].IReadOnlyList$1(HexTile),"fg":"Tiles"},"fn":"Tiles"},{"a":1,"n":"_tiles","t":4,"rt":$n[1].List$1(HexTile),"sn":"_tiles","ro":true}]}; }, $n);
    /*HexCellModel end.*/

    /*HexCollapsed start.*/
    $m("HexCollapsed", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexCoord,HexColor,$n[0].Int32,$n[0].Int32],"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"color","pt":HexColor,"ps":1},{"n":"startIndex","pt":$n[0].Int32,"ps":2},{"n":"count","pt":$n[0].Int32,"ps":3}],"sn":"$ctor1"},{"a":2,"n":"Color","t":16,"rt":HexColor,"g":{"a":2,"n":"get_Color","t":8,"rt":HexColor,"fg":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"fn":"Color"},{"a":2,"n":"Coord","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_Coord","t":8,"rt":HexCoord,"fg":"Coord"},"fn":"Coord"},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"StartIndex","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_StartIndex","t":8,"rt":$n[0].Int32,"fg":"StartIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"StartIndex"},{"a":1,"backing":true,"n":"<Color>k__BackingField","t":4,"rt":HexColor,"sn":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":1,"backing":true,"n":"<Coord>k__BackingField","t":4,"rt":HexCoord,"sn":"Coord"},{"a":1,"backing":true,"n":"<Count>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<StartIndex>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"StartIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexCollapsed end.*/

    /*HexColor start.*/
    $m("HexColor", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Black","is":true,"t":4,"rt":HexColor,"sn":"Black","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Blue","is":true,"t":4,"rt":HexColor,"sn":"Blue","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Cyan","is":true,"t":4,"rt":HexColor,"sn":"Cyan","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Green","is":true,"t":4,"rt":HexColor,"sn":"Green","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Magenta","is":true,"t":4,"rt":HexColor,"sn":"Magenta","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Red","is":true,"t":4,"rt":HexColor,"sn":"Red","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"White","is":true,"t":4,"rt":HexColor,"sn":"White","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":HexColor,"sn":"Yellow","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}}]}; }, $n);
    /*HexColor end.*/

    /*HexColorPaletteConfig start.*/
    $m("HexColorPaletteConfig", function () { return {"att":1048833,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Hex Merge/Color Palette Config"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetColor","t":8,"pi":[{"n":"color","pt":HexColor,"ps":0}],"sn":"GetColor","rt":$n[3].Color,"p":[HexColor]},{"a":2,"n":"Colors","t":16,"rt":System.Array.type(UnityEngine.Color),"g":{"a":2,"n":"get_Colors","t":8,"rt":System.Array.type(UnityEngine.Color),"fg":"Colors"},"fn":"Colors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_colors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"_colors"}]}; }, $n);
    /*HexColorPaletteConfig end.*/

    /*HexDraggableStackSequenceConfig start.*/
    $m("HexDraggableStackSequenceConfig", function () { return {"att":1048833,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Hex Merge/Draggable Stack Sequence Config"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"Stacks","t":16,"rt":System.Array.type(HexDraggableStackSetup),"g":{"a":2,"n":"get_Stacks","t":8,"rt":System.Array.type(HexDraggableStackSetup),"fg":"Stacks"},"fn":"Stacks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stacks","t":4,"rt":System.Array.type(HexDraggableStackSetup),"sn":"_stacks"}]}; }, $n);
    /*HexDraggableStackSequenceConfig end.*/

    /*HexDraggableStackSetup start.*/
    $m("HexDraggableStackSetup", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Groups","t":16,"rt":System.Array.type(HexDraggableTileGroupSetup),"g":{"a":2,"n":"get_Groups","t":8,"rt":System.Array.type(HexDraggableTileGroupSetup),"fg":"Groups"},"fn":"Groups"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_groups","t":4,"rt":System.Array.type(HexDraggableTileGroupSetup),"sn":"_groups"}]}; }, $n);
    /*HexDraggableStackSetup end.*/

    /*HexDraggableTileGroupSetup start.*/
    $m("HexDraggableTileGroupSetup", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Amount","t":4,"rt":$n[0].Int32,"sn":"Amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Color","t":4,"rt":HexColor,"sn":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}}]}; }, $n);
    /*HexDraggableTileGroupSetup end.*/

    /*HexDragTutorialConfig start.*/
    $m("HexDragTutorialConfig", function () { return {"att":1048833,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Hex Merge/DragTutorialConfig"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"EnabledDraggableIndex","t":4,"rt":$n[0].Int32,"sn":"EnabledDraggableIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"HandLoopDelay","t":4,"rt":$n[0].Single,"sn":"HandLoopDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"HandMoveDuration","t":4,"rt":$n[0].Single,"sn":"HandMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"HandShowDelay","t":4,"rt":$n[0].Single,"sn":"HandShowDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"TargetCellOffset","t":4,"rt":$n[3].Vector2Int,"sn":"TargetCellOffset"}]}; }, $n);
    /*HexDragTutorialConfig end.*/

    /*HexGame start.*/
    $m("HexGame", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BuildTileAdditions","is":true,"t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"stackSetup","pt":HexDraggableStackSetup,"ps":1}],"sn":"BuildTileAdditions","rt":System.Array.type(HexTileAddition),"p":[HexCoord,HexDraggableStackSetup]},{"a":2,"n":"CreateBoardModel","t":8,"sn":"CreateBoardModel","rt":$n[0].Void},{"a":1,"n":"EvaluateFinishState","t":8,"sn":"EvaluateFinishState","rt":$n[0].Void},{"a":1,"n":"Finish","t":8,"pi":[{"n":"finish","pt":EGameFinish,"ps":0}],"sn":"Finish","rt":$n[0].Void,"p":[EGameFinish]},{"a":1,"n":"IsBoardEmpty","t":8,"sn":"IsBoardEmpty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnBoardCollapsed","t":8,"pi":[{"n":"_","pt":HexCollapsed,"ps":0}],"sn":"OnBoardCollapsed","rt":$n[0].Void,"p":[HexCollapsed]},{"a":2,"n":"PlaceDraggableStack","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"stackSetup","pt":HexDraggableStackSetup,"ps":1}],"sn":"PlaceDraggableStack","rt":$n[0].Void,"p":[HexCoord,HexDraggableStackSetup]},{"a":1,"n":"RestartGameState","t":8,"sn":"RestartGameState","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"BoardModel","t":16,"rt":HexBoardModel,"g":{"a":2,"n":"get_BoardModel","t":8,"rt":HexBoardModel,"fg":"BoardModel"},"s":{"a":1,"n":"set_BoardModel","t":8,"p":[HexBoardModel],"rt":$n[0].Void,"fs":"BoardModel"},"fn":"BoardModel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_boardSetup","t":4,"rt":HexBoardSetupConfig,"sn":"_boardSetup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_draggableStackSequenceConfig","t":4,"rt":HexDraggableStackSequenceConfig,"sn":"_draggableStackSequenceConfig"},{"a":1,"n":"_isFinished","t":4,"rt":$n[0].Boolean,"sn":"_isFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_usedDraggableStackCount","t":4,"rt":$n[0].Int32,"sn":"_usedDraggableStackCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GameFinished","t":2,"ad":{"a":2,"n":"add_GameFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addGameFinished","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_GameFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeGameFinished","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<BoardModel>k__BackingField","t":4,"rt":HexBoardModel,"sn":"BoardModel"}]}; }, $n);
    /*HexGame end.*/

    /*HexMergePlan start.*/
    $m("HexMergePlan", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexTile,HexCoord,HexCoord,System.Array.type(HexCoord)],"pi":[{"n":"tile","pt":HexTile,"ps":0},{"n":"from","pt":HexCoord,"ps":1},{"n":"to","pt":HexCoord,"ps":2},{"n":"path","pt":System.Array.type(HexCoord),"ps":3}],"sn":"$ctor1"},{"a":2,"n":"From","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_From","t":8,"rt":HexCoord,"fg":"From"},"fn":"From"},{"a":2,"n":"Path","t":16,"rt":System.Array.type(HexCoord),"g":{"a":2,"n":"get_Path","t":8,"rt":System.Array.type(HexCoord),"fg":"Path"},"fn":"Path"},{"a":2,"n":"Tile","t":16,"rt":HexTile,"g":{"a":2,"n":"get_Tile","t":8,"rt":HexTile,"fg":"Tile"},"fn":"Tile"},{"a":2,"n":"To","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_To","t":8,"rt":HexCoord,"fg":"To"},"fn":"To"},{"a":1,"backing":true,"n":"<From>k__BackingField","t":4,"rt":HexCoord,"sn":"From"},{"a":1,"backing":true,"n":"<Path>k__BackingField","t":4,"rt":System.Array.type(HexCoord),"sn":"Path"},{"a":1,"backing":true,"n":"<Tile>k__BackingField","t":4,"rt":HexTile,"sn":"Tile"},{"a":1,"backing":true,"n":"<To>k__BackingField","t":4,"rt":HexCoord,"sn":"To"}]}; }, $n);
    /*HexMergePlan end.*/

    /*HexMergeResolver start.*/
    $m("HexMergeResolver", function () { return {"nested":[HexMergeResolver.AxisDefinition],"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"BuildLine","is":true,"t":8,"pi":[{"n":"board","pt":HexBoardModel,"ps":0},{"n":"pivot","pt":HexCoord,"ps":1},{"n":"color","pt":HexColor,"ps":2},{"n":"axis","pt":HexMergeResolver.AxisDefinition,"ps":3}],"sn":"BuildLine","rt":$n[1].List$1(HexCoord),"p":[HexBoardModel,HexCoord,HexColor,HexMergeResolver.AxisDefinition]},{"a":1,"n":"CollectDirection","is":true,"t":8,"pi":[{"n":"board","pt":HexBoardModel,"ps":0},{"n":"start","pt":HexCoord,"ps":1},{"n":"direction","pt":HexDirection,"ps":2},{"n":"color","pt":HexColor,"ps":3},{"n":"results","pt":$n[1].List$1(HexCoord),"ps":4}],"sn":"CollectDirection","rt":$n[0].Void,"p":[HexBoardModel,HexCoord,HexDirection,HexColor,$n[1].List$1(HexCoord)]},{"a":1,"n":"GetWorldX","is":true,"t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetWorldX","rt":$n[0].Single,"p":[HexCoord],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Resolve","is":true,"t":8,"pi":[{"n":"board","pt":HexBoardModel,"ps":0},{"n":"pivot","pt":HexCoord,"ps":1}],"sn":"Resolve","rt":$n[2].Option$1(HexMergePlan),"p":[HexBoardModel,HexCoord]},{"a":1,"n":"SortLineInMergeOrder","is":true,"t":8,"pi":[{"n":"line","pt":$n[1].List$1(HexCoord),"ps":0}],"sn":"SortLineInMergeOrder","rt":$n[0].Void,"p":[$n[1].List$1(HexCoord)]},{"a":1,"n":"SortLines","is":true,"t":8,"pi":[{"n":"left","pt":HexCoord,"ps":0},{"n":"right","pt":HexCoord,"ps":1}],"sn":"SortLines","rt":$n[0].Int32,"p":[HexCoord,HexCoord],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Axes","is":true,"t":4,"rt":System.Array.type(HexMergeResolver.AxisDefinition),"sn":"Axes","ro":true},{"a":1,"n":"PreferenceLayout","is":true,"t":4,"rt":HexLayout,"sn":"PreferenceLayout","ro":true}]}; }, $n);
    /*HexMergeResolver end.*/

    /*HexMergeResolver+AxisDefinition start.*/
    $m("HexMergeResolver.AxisDefinition", function () { return {"td":HexMergeResolver,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexDirection,HexDirection,$n[0].Int32],"pi":[{"n":"negativeDirection","pt":HexDirection,"ps":0},{"n":"positiveDirection","pt":HexDirection,"ps":1},{"n":"order","pt":$n[0].Int32,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"NegativeDirection","t":16,"rt":HexDirection,"g":{"a":2,"n":"get_NegativeDirection","t":8,"rt":HexDirection,"fg":"NegativeDirection","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},"fn":"NegativeDirection"},{"a":2,"n":"Order","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Order","t":8,"rt":$n[0].Int32,"fg":"Order","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Order"},{"a":2,"n":"PositiveDirection","t":16,"rt":HexDirection,"g":{"a":2,"n":"get_PositiveDirection","t":8,"rt":HexDirection,"fg":"PositiveDirection","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},"fn":"PositiveDirection"},{"a":1,"backing":true,"n":"<NegativeDirection>k__BackingField","t":4,"rt":HexDirection,"sn":"NegativeDirection","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},{"a":1,"backing":true,"n":"<Order>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Order","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<PositiveDirection>k__BackingField","t":4,"rt":HexDirection,"sn":"PositiveDirection","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}}]}; }, $n);
    /*HexMergeResolver+AxisDefinition end.*/

    /*HexTile start.*/
    $m("HexTile", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexColor],"pi":[{"n":"color","pt":HexColor,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"Equals","t":8,"pi":[{"n":"other","pt":HexTile,"ps":0}],"sn":"equalsT","rt":$n[0].Boolean,"p":[HexTile],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"Equals","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"equals","rt":$n[0].Boolean,"p":[$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"GetHashCode","t":8,"sn":"getHashCode","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"ToString","t":8,"sn":"toString","rt":$n[0].String},{"a":2,"n":"op_Equality","is":true,"t":8,"pi":[{"n":"left","pt":HexTile,"ps":0},{"n":"right","pt":HexTile,"ps":1}],"sn":"op_Equality","rt":$n[0].Boolean,"p":[HexTile,HexTile],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"op_Inequality","is":true,"t":8,"pi":[{"n":"left","pt":HexTile,"ps":0},{"n":"right","pt":HexTile,"ps":1}],"sn":"op_Inequality","rt":$n[0].Boolean,"p":[HexTile,HexTile],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Color","t":16,"rt":HexColor,"g":{"a":2,"n":"get_Color","t":8,"rt":HexColor,"fg":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"fn":"Color"},{"a":1,"backing":true,"n":"<Color>k__BackingField","t":4,"rt":HexColor,"sn":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}}]}; }, $n);
    /*HexTile end.*/

    /*HexTileAdded start.*/
    $m("HexTileAdded", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexCoord,HexTile,$n[0].Int32],"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"tile","pt":HexTile,"ps":1},{"n":"index","pt":$n[0].Int32,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"Coord","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_Coord","t":8,"rt":HexCoord,"fg":"Coord"},"fn":"Coord"},{"a":2,"n":"Index","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Index","t":8,"rt":$n[0].Int32,"fg":"Index","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Index"},{"a":2,"n":"Tile","t":16,"rt":HexTile,"g":{"a":2,"n":"get_Tile","t":8,"rt":HexTile,"fg":"Tile"},"fn":"Tile"},{"a":1,"backing":true,"n":"<Coord>k__BackingField","t":4,"rt":HexCoord,"sn":"Coord"},{"a":1,"backing":true,"n":"<Index>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Tile>k__BackingField","t":4,"rt":HexTile,"sn":"Tile"}]}; }, $n);
    /*HexTileAdded end.*/

    /*HexTileAddition start.*/
    $m("HexTileAddition", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexCoord,HexTile,$n[0].Int32],"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"tile","pt":HexTile,"ps":1},{"n":"amount","dv":1,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"Amount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Amount","t":8,"rt":$n[0].Int32,"fg":"Amount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Amount"},{"a":2,"n":"Coord","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_Coord","t":8,"rt":HexCoord,"fg":"Coord"},"fn":"Coord"},{"a":2,"n":"Tile","t":16,"rt":HexTile,"g":{"a":2,"n":"get_Tile","t":8,"rt":HexTile,"fg":"Tile"},"fn":"Tile"},{"a":1,"backing":true,"n":"<Amount>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Coord>k__BackingField","t":4,"rt":HexCoord,"sn":"Coord"},{"a":1,"backing":true,"n":"<Tile>k__BackingField","t":4,"rt":HexTile,"sn":"Tile"}]}; }, $n);
    /*HexTileAddition end.*/

    /*HexCoord start.*/
    $m("HexCoord", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Int32],"pi":[{"n":"q","pt":$n[0].Int32,"ps":0},{"n":"r","pt":$n[0].Int32,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"Equals","t":8,"pi":[{"n":"other","pt":HexCoord,"ps":0}],"sn":"equalsT","rt":$n[0].Boolean,"p":[HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"Equals","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"equals","rt":$n[0].Boolean,"p":[$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"GetHashCode","t":8,"sn":"getHashCode","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"ToString","t":8,"sn":"toString","rt":$n[0].String},{"a":2,"n":"op_Addition","is":true,"t":8,"pi":[{"n":"left","pt":HexCoord,"ps":0},{"n":"right","pt":HexCoord,"ps":1}],"sn":"op_Addition","rt":HexCoord,"p":[HexCoord,HexCoord]},{"a":2,"n":"op_Equality","is":true,"t":8,"pi":[{"n":"left","pt":HexCoord,"ps":0},{"n":"right","pt":HexCoord,"ps":1}],"sn":"op_Equality","rt":$n[0].Boolean,"p":[HexCoord,HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"op_Inequality","is":true,"t":8,"pi":[{"n":"left","pt":HexCoord,"ps":0},{"n":"right","pt":HexCoord,"ps":1}],"sn":"op_Inequality","rt":$n[0].Boolean,"p":[HexCoord,HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"op_Multiply","is":true,"t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"scale","pt":$n[0].Int32,"ps":1}],"sn":"op_Multiply","rt":HexCoord,"p":[HexCoord,$n[0].Int32]},{"a":2,"n":"op_Subtraction","is":true,"t":8,"pi":[{"n":"left","pt":HexCoord,"ps":0},{"n":"right","pt":HexCoord,"ps":1}],"sn":"op_Subtraction","rt":HexCoord,"p":[HexCoord,HexCoord]},{"a":2,"n":"Q","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Q","t":8,"rt":$n[0].Int32,"fg":"Q","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Q"},{"a":2,"n":"R","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_R","t":8,"rt":$n[0].Int32,"fg":"R","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"R"},{"a":2,"n":"S","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_S","t":8,"rt":$n[0].Int32,"fg":"S","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"S"},{"a":1,"backing":true,"n":"<Q>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Q","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<R>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"R","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexCoord end.*/

    /*HexDirection start.*/
    $m("HexDirection", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BottomLeft","is":true,"t":4,"rt":HexDirection,"sn":"BottomLeft","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},{"a":2,"n":"BottomRight","is":true,"t":4,"rt":HexDirection,"sn":"BottomRight","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},{"a":2,"n":"Left","is":true,"t":4,"rt":HexDirection,"sn":"Left","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},{"a":2,"n":"Right","is":true,"t":4,"rt":HexDirection,"sn":"Right","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},{"a":2,"n":"TopLeft","is":true,"t":4,"rt":HexDirection,"sn":"TopLeft","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}},{"a":2,"n":"TopRight","is":true,"t":4,"rt":HexDirection,"sn":"TopRight","box":function ($v) { return Bridge.box($v, HexDirection, System.Enum.toStringFn(HexDirection));}}]}; }, $n);
    /*HexDirection end.*/

    /*HexGrid$1 start.*/
    $m("HexGrid$1", function (T) { return {"nested":[HexGrid$1.CoordEnumerator,HexGrid$1.Enumerator],"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Int32],"pi":[{"n":"width","pt":$n[0].Int32,"ps":0},{"n":"height","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"Contains","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"Contains","rt":$n[0].Boolean,"p":[HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ContainsIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ContainsIndex","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CoordAt","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"CoordAt","rt":HexCoord,"p":[$n[0].Int32]},{"a":2,"n":"EnumerateCoords","t":8,"sn":"EnumerateCoords","rt":HexGrid$1.CoordEnumerator(T)},{"a":2,"n":"Fill","t":8,"pi":[{"n":"value","pt":T,"ps":0}],"sn":"Fill","rt":$n[0].Void,"p":[T]},{"a":2,"n":"GetEnumerator","t":8,"sn":"GetEnumerator","rt":HexGrid$1.Enumerator(T)},{"a":2,"n":"GetIndex","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetIndex","rt":$n[0].Int32,"p":[HexCoord],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetIndexOption","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetIndexOption","rt":$n[2].Option$1(System.Int32),"p":[HexCoord]},{"a":2,"n":"GetNeighborCoord","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"direction","pt":HexDirection,"ps":1}],"sn":"GetNeighborCoord","rt":$n[2].Option$1(HexCoord),"p":[HexCoord,HexDirection]},{"a":2,"n":"GetOption","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetOption","rt":$n[2].Option$1(T),"p":[HexCoord]},{"a":2,"n":"Set","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"value","pt":T,"ps":1}],"sn":"Set","rt":$n[0].Void,"p":[HexCoord,T]},{"a":2,"n":"Set","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0},{"n":"value","pt":T,"ps":1}],"sn":"Set$1","rt":$n[0].Void,"p":[$n[0].Int32,T]},{"a":2,"n":"TrySet","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"value","pt":T,"ps":1}],"sn":"TrySet","rt":$n[0].Boolean,"p":[HexCoord,T],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"Height","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Height","t":8,"rt":$n[0].Int32,"fg":"Height","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Height"},{"a":2,"n":"Item","t":16,"rt":T,"p":[$n[0].Int32],"i":true,"ipi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"g":{"a":2,"n":"get_Item","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"getItem","rt":T,"p":[$n[0].Int32]}},{"a":2,"n":"Item","t":16,"rt":T,"p":[HexCoord],"i":true,"ipi":[{"n":"coord","pt":HexCoord,"ps":0}],"g":{"a":2,"n":"get_Item","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"getItem$1","rt":T,"p":[HexCoord]}},{"a":2,"n":"Width","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Width","t":8,"rt":$n[0].Int32,"fg":"Width","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Width"},{"a":1,"n":"_items","t":4,"rt":System.Array.type(T),"sn":"_items","ro":true},{"a":1,"backing":true,"n":"<Count>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Height>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Height","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Width>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Width","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexGrid$1 end.*/

    /*HexGrid$1+CoordEnumerator start.*/
    $m("HexGrid$1.CoordEnumerator", function (T) { return {"td":HexGrid$1(T),"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":".ctor","t":1,"p":[HexGrid$1(T)],"pi":[{"n":"grid","pt":HexGrid$1(T),"ps":0}],"sn":"$ctor1"},{"a":2,"n":"MoveNext","t":8,"sn":"MoveNext","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Current","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_Current","t":8,"rt":HexCoord,"fg":"Current"},"fn":"Current"},{"a":1,"n":"_grid","t":4,"rt":HexGrid$1(T),"sn":"_grid","ro":true},{"a":1,"n":"_index","t":4,"rt":$n[0].Int32,"sn":"_index","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexGrid$1+CoordEnumerator end.*/

    /*HexGrid$1+Enumerator start.*/
    $m("HexGrid$1.Enumerator", function (T) { return {"td":HexGrid$1(T),"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":".ctor","t":1,"p":[System.Array.type(T)],"pi":[{"n":"items","pt":System.Array.type(T),"ps":0}],"sn":"$ctor1"},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":2,"n":"MoveNext","t":8,"sn":"moveNext","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"Current","t":16,"rt":T,"g":{"a":2,"n":"get_Current","t":8,"rt":T,"fg":"Current"},"fn":"Current"},{"a":1,"n":"_index","t":4,"rt":$n[0].Int32,"sn":"_index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_items","t":4,"rt":System.Array.type(T),"sn":"_items","ro":true}]}; }, $n);
    /*HexGrid$1+Enumerator end.*/

    /*HexLayout start.*/
    $m("HexLayout", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[3].Vector3],"pi":[{"n":"hexSize","pt":$n[0].Single,"ps":0},{"n":"origin","pt":$n[3].Vector3,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"HexToWorld","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"y","dv":0.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"HexToWorld","rt":$n[3].Vector3,"p":[HexCoord,$n[0].Single]},{"a":2,"n":"WorldToHex","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0}],"sn":"WorldToHex","rt":HexCoord,"p":[$n[3].Vector3]},{"a":2,"n":"HexSize","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HexSize","t":8,"rt":$n[0].Single,"fg":"HexSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"HexSize"},{"a":2,"n":"Origin","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_Origin","t":8,"rt":$n[3].Vector3,"fg":"Origin"},"fn":"Origin"},{"a":1,"n":"Sqrt3","is":true,"t":4,"rt":$n[0].Single,"sn":"Sqrt3","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<HexSize>k__BackingField","t":4,"rt":$n[0].Single,"sn":"HexSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Origin>k__BackingField","t":4,"rt":$n[3].Vector3,"sn":"Origin"}]}; }, $n);
    /*HexLayout end.*/

    /*HexMath start.*/
    $m("HexMath", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"Abs","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"Abs","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Distance","is":true,"t":8,"pi":[{"n":"a","pt":HexCoord,"ps":0},{"n":"b","pt":HexCoord,"ps":1}],"sn":"Distance","rt":$n[0].Int32,"p":[HexCoord,HexCoord],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"FillRange","is":true,"t":8,"pi":[{"n":"center","pt":HexCoord,"ps":0},{"n":"range","pt":$n[0].Int32,"ps":1},{"n":"results","pt":$n[1].List$1(HexCoord),"ps":2}],"sn":"FillRange","rt":$n[0].Void,"p":[HexCoord,$n[0].Int32,$n[1].List$1(HexCoord)]},{"a":2,"n":"FillRing","is":true,"t":8,"pi":[{"n":"center","pt":HexCoord,"ps":0},{"n":"radius","pt":$n[0].Int32,"ps":1},{"n":"results","pt":$n[1].List$1(HexCoord),"ps":2}],"sn":"FillRing","rt":$n[0].Void,"p":[HexCoord,$n[0].Int32,$n[1].List$1(HexCoord)]},{"a":2,"n":"FromOffset","is":true,"t":8,"pi":[{"n":"offset","pt":$n[3].Vector2Int,"ps":0}],"sn":"FromOffset$1","rt":HexCoord,"p":[$n[3].Vector2Int]},{"a":2,"n":"FromOffset","is":true,"t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1}],"sn":"FromOffset","rt":HexCoord,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Neighbor","is":true,"t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"direction","pt":HexDirection,"ps":1}],"sn":"Neighbor","rt":HexCoord,"p":[HexCoord,HexDirection]},{"a":2,"n":"RoundAxial","is":true,"t":8,"pi":[{"n":"q","pt":$n[0].Single,"ps":0},{"n":"r","pt":$n[0].Single,"ps":1}],"sn":"RoundAxial","rt":HexCoord,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"RoundToInt","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"RoundToInt","rt":$n[0].Int32,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ToOffset","is":true,"t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"ToOffset","rt":$n[3].Vector2Int,"p":[HexCoord]},{"a":1,"n":"Directions","is":true,"t":4,"rt":System.Array.type(HexCoord),"sn":"Directions","ro":true}]}; }, $n);
    /*HexMath end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Source.Pooling.MonoPool$1 start.*/
    $m("Source.Pooling.MonoPool$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Function,Function,Function,Function,$n[0].Boolean,$n[0].Int32,$n[0].Int32],"pi":[{"n":"factory","pt":Function,"ps":0},{"n":"onGet","dv":null,"o":true,"pt":Function,"ps":1},{"n":"onRelease","dv":null,"o":true,"pt":Function,"ps":2},{"n":"onDestroy","dv":null,"o":true,"pt":Function,"ps":3},{"n":"collectionCheck","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"defaultCapacity","dv":1,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"maxSize","dv":10000,"o":true,"pt":$n[0].Int32,"ps":6}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[T,Function,Function,Function,$n[0].Boolean,$n[0].Int32,$n[0].Int32],"pi":[{"n":"prefab","pt":T,"ps":0},{"n":"onGet","dv":null,"o":true,"pt":Function,"ps":1},{"n":"onRelease","dv":null,"o":true,"pt":Function,"ps":2},{"n":"onDestroy","dv":null,"o":true,"pt":Function,"ps":3},{"n":"collectionCheck","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"defaultCapacity","dv":1,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"maxSize","dv":10000,"o":true,"pt":$n[0].Int32,"ps":6}],"sn":"ctor"},{"a":2,"n":"Get","t":8,"sn":"Get","rt":T},{"a":2,"n":"Release","t":8,"pi":[{"n":"instance","pt":T,"ps":0}],"sn":"Release","rt":$n[0].Void,"p":[T]},{"a":1,"n":"_collectionCheck","t":4,"rt":$n[0].Boolean,"sn":"_collectionCheck","ro":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_factory","t":4,"rt":Function,"sn":"_factory","ro":true},{"a":1,"n":"_instances","t":4,"rt":$n[1].Stack$1(T),"sn":"_instances","ro":true},{"a":1,"n":"_maxSize","t":4,"rt":$n[0].Int32,"sn":"_maxSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_onDestroy","t":4,"rt":Function,"sn":"_onDestroy","ro":true},{"a":1,"n":"_onGet","t":4,"rt":Function,"sn":"_onGet","ro":true},{"a":1,"n":"_onRelease","t":4,"rt":Function,"sn":"_onRelease","ro":true}]}; }, $n);
    /*Source.Pooling.MonoPool$1 end.*/

    /*Source.Optional.Option$1 start.*/
    $m("Source.Optional.Option$1", function (T) { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Some","is":true,"t":8,"pi":[{"n":"value","pt":T,"ps":0}],"sn":"Some","rt":$n[2].Option$1(T),"p":[T]},{"a":2,"n":"None","is":true,"t":16,"rt":$n[2].Option$1(T),"g":{"a":2,"n":"get_None","t":8,"rt":$n[2].Option$1(T),"fg":"None","is":true},"fn":"None"},{"a":2,"n":"IsSome","t":4,"rt":$n[0].Boolean,"sn":"IsSome","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Value","t":4,"rt":T,"sn":"Value"}]}; }, $n);
    /*Source.Optional.Option$1 end.*/

    /*Source.Game.HexMerge.HexDragTutorialController start.*/
    $m("Source.Game.HexMerge.HexDragTutorialController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateHandLoop","t":8,"sn":"AnimateHandLoop","rt":$n[4].IEnumerator},{"a":1,"n":"CanPlaceDraggedStack","t":8,"pi":[{"n":"draggableIndex","pt":$n[0].Int32,"ps":0},{"n":"coord","pt":HexCoord,"ps":1}],"sn":"CanPlaceDraggedStack","rt":$n[0].Boolean,"p":[$n[0].Int32,HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CompleteTutorial","t":8,"sn":"CompleteTutorial","rt":$n[0].Void},{"a":1,"n":"EnableAllDraggables","t":8,"sn":"EnableAllDraggables","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDragCancelled","t":8,"pi":[{"n":"draggableIndex","pt":$n[0].Int32,"ps":0}],"sn":"OnDragCancelled","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnDragPlaced","t":8,"pi":[{"n":"draggableIndex","pt":$n[0].Int32,"ps":0},{"n":"coord","pt":HexCoord,"ps":1}],"sn":"OnDragPlaced","rt":$n[0].Void,"p":[$n[0].Int32,HexCoord]},{"a":1,"n":"OnDragStarted","t":8,"pi":[{"n":"draggableIndex","pt":$n[0].Int32,"ps":0}],"sn":"OnDragStarted","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ShowHandAfterDelay","t":8,"sn":"ShowHandAfterDelay","rt":$n[4].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartShowHandDelay","t":8,"sn":"StartShowHandDelay","rt":$n[0].Void},{"a":1,"n":"StopHandPresentation","t":8,"sn":"StopHandPresentation","rt":$n[0].Void},{"a":1,"n":"WorldToCanvasPosition","t":8,"pi":[{"n":"worldPosition","pt":$n[3].Vector3,"ps":0}],"sn":"WorldToCanvasPosition","rt":$n[3].Vector2,"p":[$n[3].Vector3]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_canvas","t":4,"rt":$n[3].Canvas,"sn":"_canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_config","t":4,"rt":HexDragTutorialConfig,"sn":"_config"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hand","t":4,"rt":$n[3].RectTransform,"sn":"_hand"},{"a":1,"n":"_handRoutine","t":4,"rt":$n[3].Coroutine,"sn":"_handRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hexGamePresenter","t":4,"rt":$n[5].HexGamePresenter,"sn":"_hexGamePresenter"},{"a":1,"n":"_isCompleted","t":4,"rt":$n[0].Boolean,"sn":"_isCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_showHandDelayRoutine","t":4,"rt":$n[3].Coroutine,"sn":"_showHandDelayRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_worldCamera","t":4,"rt":$n[3].Camera,"sn":"_worldCamera"}]}; }, $n);
    /*Source.Game.HexMerge.HexDragTutorialController end.*/

    /*Source.Game.HexMerge.HexGameFinishedView start.*/
    $m("Source.Game.HexMerge.HexGameFinishedView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Activate","t":8,"sn":"Activate","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnButtonClicked","t":8,"sn":"OnButtonClicked","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[6].Button,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_canvasGroup","t":4,"rt":$n[3].CanvasGroup,"sn":"_canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fadeDuration","t":4,"rt":$n[0].Single,"sn":"_fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Clicked","t":2,"ad":{"a":2,"n":"add_Clicked","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addClicked","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Clicked","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeClicked","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Source.Game.HexMerge.HexGameFinishedView end.*/

    /*Source.Game.HexMerge.HexGamePresenter start.*/
    $m("Source.Game.HexMerge.HexGamePresenter", function () { return {"nested":[$n[5].HexGamePresenter.AnimationEventKind,$n[5].HexGamePresenter.AnimationEvent,$n[5].HexGamePresenter.CollapseAnimation,$n[5].HexGamePresenter.DraggableStackRuntime,$n[5].HexGamePresenter.CollapseVfxRequest,$n[5].HexGamePresenter.AudioCue],"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCollapseBatch","t":8,"pi":[{"n":"collapseBatch","pt":$n[1].List$1(HexCollapsed),"ps":0}],"sn":"AnimateCollapseBatch","rt":$n[4].IEnumerator,"p":[$n[1].List$1(HexCollapsed)]},{"a":1,"n":"ApplyTileAdded","t":8,"pi":[{"n":"added","pt":HexTileAdded,"ps":0}],"sn":"ApplyTileAdded","rt":$n[0].Void,"p":[HexTileAdded]},{"a":1,"n":"ApplyTileColor","t":8,"pi":[{"n":"tileInstance","pt":$n[5].HexTileView,"ps":0},{"n":"colorId","pt":HexColor,"ps":1}],"sn":"ApplyTileColor","rt":$n[0].Void,"p":[$n[5].HexTileView,HexColor]},{"a":1,"n":"BuildCollapseVfxPool","t":8,"sn":"BuildCollapseVfxPool","rt":$n[0].Void},{"a":1,"n":"BuildTileMaterials","t":8,"sn":"BuildTileMaterials","rt":$n[0].Void},{"a":1,"n":"BuildTilePool","t":8,"sn":"BuildTilePool","rt":$n[0].Void},{"a":1,"n":"CenterCamera","t":8,"pi":[{"n":"boardModel","pt":HexBoardModel,"ps":0}],"sn":"CenterCamera","rt":$n[0].Void,"p":[HexBoardModel]},{"a":1,"n":"ClearBoardRoot","t":8,"sn":"ClearBoardRoot","rt":$n[0].Void},{"a":1,"n":"CreateDraggableStackRuntime","t":8,"pi":[{"n":"stackSetup","pt":HexDraggableStackSetup,"ps":0},{"n":"slotIndex","pt":$n[0].Int32,"ps":1},{"n":"position","pt":$n[3].Vector3,"ps":2}],"sn":"CreateDraggableStackRuntime","rt":$n[5].HexGamePresenter.DraggableStackRuntime,"p":[HexDraggableStackSetup,$n[0].Int32,$n[3].Vector3]},{"a":1,"n":"EndDrag","t":8,"sn":"EndDrag","rt":$n[0].Void},{"a":1,"n":"EvaluateArc","t":8,"pi":[{"n":"start","pt":$n[3].Vector3,"ps":0},{"n":"destination","pt":$n[3].Vector3,"ps":1},{"n":"progress","pt":$n[0].Single,"ps":2}],"sn":"EvaluateArc","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]},{"a":1,"n":"GetAdjustedDuration","t":8,"pi":[{"n":"baseDuration","pt":$n[0].Single,"ps":0}],"sn":"GetAdjustedDuration","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetCellWorldPosition","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetCellWorldPosition","rt":$n[3].Vector3,"p":[HexCoord]},{"a":1,"n":"GetDraggableStackByIndex","t":8,"pi":[{"n":"draggableIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetDraggableStackByIndex","rt":$n[5].HexGamePresenter.DraggableStackRuntime,"p":[$n[0].Int32]},{"a":1,"n":"GetDraggableStackWorldPosition","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0}],"sn":"GetDraggableStackWorldPosition","rt":$n[3].Vector3,"p":[HexCoord]},{"a":2,"n":"GetDraggableWorldPosition","t":8,"pi":[{"n":"draggableIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetDraggableWorldPosition","rt":$n[2].Option$1(UnityEngine.Vector3),"p":[$n[0].Int32]},{"a":1,"n":"GetDropCoord","t":8,"pi":[{"n":"stackPosition","pt":$n[3].Vector3,"ps":0}],"sn":"GetDropCoord","rt":$n[2].Option$1(HexCoord),"p":[$n[3].Vector3]},{"a":2,"n":"GetGridCellWorldPosition","t":8,"pi":[{"n":"offsetCoord","pt":$n[3].Vector2Int,"ps":0}],"sn":"GetGridCellWorldPosition","rt":$n[3].Vector3,"p":[$n[3].Vector2Int]},{"a":1,"n":"GetPointerWorldPoint","t":8,"pi":[{"n":"planeY","pt":$n[0].Single,"ps":0}],"sn":"GetPointerWorldPoint","rt":$n[2].Option$1(UnityEngine.Vector3),"p":[$n[0].Single]},{"a":1,"n":"GetTileFromPool","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0},{"n":"rotation","pt":$n[3].Quaternion,"ps":1}],"sn":"GetTileFromPool","rt":$n[5].HexTileView,"p":[$n[3].Vector3,$n[3].Quaternion]},{"a":1,"n":"GetTileWorldPosition","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"tileIndex","pt":$n[0].Int32,"ps":1}],"sn":"GetTileWorldPosition","rt":$n[3].Vector3,"p":[HexCoord,$n[0].Int32]},{"a":1,"n":"HandleDragging","t":8,"sn":"HandleDragging","rt":$n[0].Void},{"a":1,"n":"OnBoardCollapsed","t":8,"pi":[{"n":"collapse","pt":HexCollapsed,"ps":0}],"sn":"OnBoardCollapsed","rt":$n[0].Void,"p":[HexCollapsed]},{"a":1,"n":"OnBoardMerged","t":8,"pi":[{"n":"plan","pt":HexMergePlan,"ps":0}],"sn":"OnBoardMerged","rt":$n[0].Void,"p":[HexMergePlan]},{"a":1,"n":"OnBoardTileAdded","t":8,"pi":[{"n":"added","pt":HexTileAdded,"ps":0}],"sn":"OnBoardTileAdded","rt":$n[0].Void,"p":[HexTileAdded]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameFinished","t":8,"pi":[{"n":"_","pt":EGameFinish,"ps":0}],"sn":"OnGameFinished","rt":$n[0].Void,"p":[EGameFinish]},{"a":1,"n":"PlaceDraggedStack","t":8,"pi":[{"n":"stack","pt":$n[5].HexGamePresenter.DraggableStackRuntime,"ps":0},{"n":"coord","pt":HexCoord,"ps":1}],"sn":"PlaceDraggedStack","rt":$n[0].Void,"p":[$n[5].HexGamePresenter.DraggableStackRuntime,HexCoord]},{"a":1,"n":"PlayCollapseVfx","t":8,"pi":[{"n":"collapseVfxRequest","pt":$n[5].HexGamePresenter.CollapseVfxRequest,"ps":0}],"sn":"PlayCollapseVfx","rt":$n[4].IEnumerator,"p":[$n[5].HexGamePresenter.CollapseVfxRequest]},{"a":1,"n":"PlayTileAudio","t":8,"pi":[{"n":"audioCue","pt":$n[5].HexGamePresenter.AudioCue,"ps":0}],"sn":"PlayTileAudio","rt":$n[0].Void,"p":[$n[5].HexGamePresenter.AudioCue]},{"a":1,"n":"ProcessAnimationQueue","t":8,"sn":"ProcessAnimationQueue","rt":$n[4].IEnumerator},{"a":1,"n":"ReleaseAllDraggableStacks","t":8,"sn":"ReleaseAllDraggableStacks","rt":$n[0].Void},{"a":1,"n":"ReleaseAllTiles","t":8,"sn":"ReleaseAllTiles","rt":$n[0].Void},{"a":1,"n":"ReleaseDraggableStack","t":8,"pi":[{"n":"stack","pt":$n[5].HexGamePresenter.DraggableStackRuntime,"ps":0}],"sn":"ReleaseDraggableStack","rt":$n[0].Void,"p":[$n[5].HexGamePresenter.DraggableStackRuntime]},{"a":1,"n":"ReleaseTile","t":8,"pi":[{"n":"tile","pt":$n[5].HexTileView,"ps":0}],"sn":"ReleaseTile","rt":$n[0].Void,"p":[$n[5].HexTileView]},{"a":1,"n":"ReplaceBoardRoot","t":8,"sn":"ReplaceBoardRoot","rt":$n[0].Void},{"a":1,"n":"RepositionCellTiles","t":8,"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"tiles","pt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"ps":1}],"sn":"RepositionCellTiles","rt":$n[0].Void,"p":[HexCoord,$n[1].List$1(Source.Game.HexMerge.HexTileView)]},{"a":1,"n":"ReturnDraggedStackToSpawn","t":8,"pi":[{"n":"stack","pt":$n[5].HexGamePresenter.DraggableStackRuntime,"ps":0}],"sn":"ReturnDraggedStackToSpawn","rt":$n[0].Void,"p":[$n[5].HexGamePresenter.DraggableStackRuntime]},{"a":2,"n":"SetDraggableEnabled","t":8,"pi":[{"n":"draggableIndex","pt":$n[0].Int32,"ps":0},{"n":"isEnabled","pt":$n[0].Boolean,"ps":1}],"sn":"SetDraggableEnabled","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":1,"n":"SpawnBoard","t":8,"pi":[{"n":"boardModel","pt":HexBoardModel,"ps":0}],"sn":"SpawnBoard","rt":$n[0].Void,"p":[HexBoardModel]},{"a":1,"n":"SpawnInitialDraggableStacks","t":8,"sn":"SpawnInitialDraggableStacks","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartMergeAnimation","t":8,"pi":[{"n":"plan","pt":HexMergePlan,"ps":0},{"n":"batchDelay","pt":$n[0].Single,"ps":1}],"sn":"StartMergeAnimation","rt":$n[0].Void,"p":[HexMergePlan,$n[0].Single]},{"a":1,"n":"StartMergeBatchAnimation","t":8,"pi":[{"n":"mergeBatch","pt":$n[1].List$1(HexMergePlan),"ps":0}],"sn":"StartMergeBatchAnimation","rt":$n[0].Void,"p":[$n[1].List$1(HexMergePlan)]},{"a":1,"n":"SubscribeToBoard","t":8,"sn":"SubscribeToBoard","rt":$n[0].Void},{"a":1,"n":"TryBeginDrag","t":8,"sn":"TryBeginDrag","rt":$n[0].Void},{"a":1,"n":"TrySpawnNextDraggableStack","t":8,"pi":[{"n":"slotIndex","pt":$n[0].Int32,"ps":0}],"sn":"TrySpawnNextDraggableStack","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"TryStartAnimationQueue","t":8,"sn":"TryStartAnimationQueue","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateDragCellMarker","t":8,"pi":[{"n":"stackPosition","pt":$n[3].Vector3,"ps":0}],"sn":"UpdateDragCellMarker","rt":$n[0].Void,"p":[$n[3].Vector3]},{"a":1,"n":"UpdateDraggedStackPosition","t":8,"sn":"UpdateDraggedStackPosition","rt":$n[0].Void},{"a":2,"n":"CanPlaceDraggedStack","t":16,"rt":Function,"g":{"a":2,"n":"get_CanPlaceDraggedStack","t":8,"rt":Function,"fg":"CanPlaceDraggedStack"},"s":{"a":2,"n":"set_CanPlaceDraggedStack","t":8,"p":[Function],"rt":$n[0].Void,"fs":"CanPlaceDraggedStack"},"fn":"CanPlaceDraggedStack"},{"a":1,"n":"BaseColorId","is":true,"t":4,"rt":$n[0].Int32,"sn":"BaseColorId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_activeMergeTweens","t":4,"rt":$n[0].Int32,"sn":"_activeMergeTweens","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_animationQueue","t":4,"rt":$n[1].Queue$1(Source.Game.HexMerge.HexGamePresenter.AnimationEvent),"sn":"_animationQueue","ro":true},{"a":1,"n":"_animationQueueRoutine","t":4,"rt":$n[3].Coroutine,"sn":"_animationQueueRoutine"},{"a":1,"n":"_animationSpeedModifier","t":4,"rt":$n[0].Single,"sn":"_animationSpeedModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_boardRoot","t":4,"rt":$n[3].Transform,"sn":"_boardRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_camera","t":4,"rt":$n[3].Camera,"sn":"_camera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cellPrefab","t":4,"rt":$n[3].GameObject,"sn":"_cellPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collapseAudio","t":4,"rt":$n[5].HexGamePresenter.AudioCue,"sn":"_collapseAudio"},{"at":[new UnityEngine.HeaderAttribute("Collapse Animation"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collapseDuration","t":4,"rt":$n[0].Single,"sn":"_collapseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collapseTileStartDelay","t":4,"rt":$n[0].Single,"sn":"_collapseTileStartDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collapseVfxLeadTime","t":4,"rt":$n[0].Single,"sn":"_collapseVfxLeadTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_collapseVfxPool","t":4,"rt":$n[7].MonoPool$1(Source.Game.HexMerge.TileCollapseVfxView),"sn":"_collapseVfxPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collapseVfxPrefab","t":4,"rt":$n[5].TileCollapseVfxView,"sn":"_collapseVfxPrefab"},{"a":1,"n":"_dragBaseY","t":4,"rt":$n[0].Single,"sn":"_dragBaseY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragCellMarker","t":4,"rt":$n[3].GameObject,"sn":"_dragCellMarker"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragLiftHeight","t":4,"rt":$n[0].Single,"sn":"_dragLiftHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_dragOffset","t":4,"rt":$n[3].Vector3,"sn":"_dragOffset"},{"a":1,"n":"_draggableEnabledBySlot","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"_draggableEnabledBySlot","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_draggablePickRadius","t":4,"rt":$n[0].Single,"sn":"_draggablePickRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_draggableSnapDuration","t":4,"rt":$n[0].Single,"sn":"_draggableSnapDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Draggable Tiles"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_draggableSpawnSpots","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_draggableSpawnSpots"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_draggableStackSequenceConfig","t":4,"rt":HexDraggableStackSequenceConfig,"sn":"_draggableStackSequenceConfig"},{"a":1,"n":"_draggableStacks","t":4,"rt":$n[1].List$1(Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime),"sn":"_draggableStacks","ro":true},{"a":1,"n":"_draggableStacksBySlot","t":4,"rt":System.Array.type(Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime),"sn":"_draggableStacksBySlot","ro":true},{"a":1,"n":"_draggedStack","t":4,"rt":$n[5].HexGamePresenter.DraggableStackRuntime,"sn":"_draggedStack"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hexColorPaletteConfig","t":4,"rt":HexColorPaletteConfig,"sn":"_hexColorPaletteConfig"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hexGame","t":4,"rt":HexGame,"sn":"_hexGame"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hexGameFinishedView","t":4,"rt":$n[5].HexGameFinishedView,"sn":"_hexGameFinishedView"},{"at":[new UnityEngine.HeaderAttribute("Layout"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hexSize","t":4,"rt":$n[0].Single,"sn":"_hexSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mergeArcDistanceFactor","t":4,"rt":$n[0].Single,"sn":"_mergeArcDistanceFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mergeArcHeight","t":4,"rt":$n[0].Single,"sn":"_mergeArcHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mergeAudio","t":4,"rt":$n[5].HexGamePresenter.AudioCue,"sn":"_mergeAudio"},{"at":[new UnityEngine.HeaderAttribute("Merge Animation"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mergeDuration","t":4,"rt":$n[0].Single,"sn":"_mergeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mergeTileStartDelay","t":4,"rt":$n[0].Single,"sn":"_mergeTileStartDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_nextDraggableStackIndex","t":4,"rt":$n[0].Int32,"sn":"_nextDraggableStackIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stackHeightStep","t":4,"rt":$n[0].Single,"sn":"_stackHeightStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Audio"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileAudioSource","t":4,"rt":$n[3].AudioSource,"sn":"_tileAudioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileBaseHeight","t":4,"rt":$n[0].Single,"sn":"_tileBaseHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_tileMaterialsByColor","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"_tileMaterialsByColor"},{"a":1,"n":"_tilePool","t":4,"rt":$n[7].MonoPool$1(Source.Game.HexMerge.HexTileView),"sn":"_tilePool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tilePrefab","t":4,"rt":$n[5].HexTileView,"sn":"_tilePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileShader","t":4,"rt":$n[3].Shader,"sn":"_tileShader"},{"a":1,"n":"_tilesByCoord","t":4,"rt":$n[1].Dictionary$2(HexCoord,System.Collections.Generic.List$1(Source.Game.HexMerge.HexTileView)),"sn":"_tilesByCoord","ro":true},{"a":2,"n":"DragCancelled","t":2,"ad":{"a":2,"n":"add_DragCancelled","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragCancelled","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragCancelled","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragCancelled","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"DragPlaced","t":2,"ad":{"a":2,"n":"add_DragPlaced","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragPlaced","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragPlaced","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragPlaced","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"DragStarted","t":2,"ad":{"a":2,"n":"add_DragStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragStarted","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragStarted","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<CanPlaceDraggedStack>k__BackingField","t":4,"rt":Function,"sn":"CanPlaceDraggedStack"}]}; }, $n);
    /*Source.Game.HexMerge.HexGamePresenter end.*/

    /*Source.Game.HexMerge.HexGamePresenter+AnimationEventKind start.*/
    $m("Source.Game.HexMerge.HexGamePresenter.AnimationEventKind", function () { return {"td":$n[5].HexGamePresenter,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Collapsed","is":true,"t":4,"rt":$n[5].HexGamePresenter.AnimationEventKind,"sn":"Collapsed","box":function ($v) { return Bridge.box($v, Source.Game.HexMerge.HexGamePresenter.AnimationEventKind, System.Enum.toStringFn(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind));}},{"a":2,"n":"Merged","is":true,"t":4,"rt":$n[5].HexGamePresenter.AnimationEventKind,"sn":"Merged","box":function ($v) { return Bridge.box($v, Source.Game.HexMerge.HexGamePresenter.AnimationEventKind, System.Enum.toStringFn(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind));}},{"a":2,"n":"TileAdded","is":true,"t":4,"rt":$n[5].HexGamePresenter.AnimationEventKind,"sn":"TileAdded","box":function ($v) { return Bridge.box($v, Source.Game.HexMerge.HexGamePresenter.AnimationEventKind, System.Enum.toStringFn(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind));}}]}; }, $n);
    /*Source.Game.HexMerge.HexGamePresenter+AnimationEventKind end.*/

    /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent start.*/
    $m("Source.Game.HexMerge.HexGamePresenter.AnimationEvent", function () { return {"td":$n[5].HexGamePresenter,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":".ctor","t":1,"p":[$n[5].HexGamePresenter.AnimationEventKind,HexTileAdded,HexMergePlan,HexCollapsed],"pi":[{"n":"kind","pt":$n[5].HexGamePresenter.AnimationEventKind,"ps":0},{"n":"tileAdded","pt":HexTileAdded,"ps":1},{"n":"merge","pt":HexMergePlan,"ps":2},{"n":"collapse","pt":HexCollapsed,"ps":3}],"sn":"$ctor1"},{"a":2,"n":"CreateCollapsed","is":true,"t":8,"pi":[{"n":"collapse","pt":HexCollapsed,"ps":0}],"sn":"CreateCollapsed","rt":$n[5].HexGamePresenter.AnimationEvent,"p":[HexCollapsed]},{"a":2,"n":"CreateMerged","is":true,"t":8,"pi":[{"n":"merge","pt":HexMergePlan,"ps":0}],"sn":"CreateMerged","rt":$n[5].HexGamePresenter.AnimationEvent,"p":[HexMergePlan]},{"a":2,"n":"CreateTileAdded","is":true,"t":8,"pi":[{"n":"tileAdded","pt":HexTileAdded,"ps":0}],"sn":"CreateTileAdded","rt":$n[5].HexGamePresenter.AnimationEvent,"p":[HexTileAdded]},{"a":2,"n":"Collapse","t":16,"rt":HexCollapsed,"g":{"a":2,"n":"get_Collapse","t":8,"rt":HexCollapsed,"fg":"Collapse"},"fn":"Collapse"},{"a":2,"n":"Kind","t":16,"rt":$n[5].HexGamePresenter.AnimationEventKind,"g":{"a":2,"n":"get_Kind","t":8,"rt":$n[5].HexGamePresenter.AnimationEventKind,"fg":"Kind","box":function ($v) { return Bridge.box($v, Source.Game.HexMerge.HexGamePresenter.AnimationEventKind, System.Enum.toStringFn(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind));}},"fn":"Kind"},{"a":2,"n":"Merge","t":16,"rt":HexMergePlan,"g":{"a":2,"n":"get_Merge","t":8,"rt":HexMergePlan,"fg":"Merge"},"fn":"Merge"},{"a":2,"n":"TileAdded","t":16,"rt":HexTileAdded,"g":{"a":2,"n":"get_TileAdded","t":8,"rt":HexTileAdded,"fg":"TileAdded"},"fn":"TileAdded"},{"a":1,"backing":true,"n":"<Collapse>k__BackingField","t":4,"rt":HexCollapsed,"sn":"Collapse"},{"a":1,"backing":true,"n":"<Kind>k__BackingField","t":4,"rt":$n[5].HexGamePresenter.AnimationEventKind,"sn":"Kind","box":function ($v) { return Bridge.box($v, Source.Game.HexMerge.HexGamePresenter.AnimationEventKind, System.Enum.toStringFn(Source.Game.HexMerge.HexGamePresenter.AnimationEventKind));}},{"a":1,"backing":true,"n":"<Merge>k__BackingField","t":4,"rt":HexMergePlan,"sn":"Merge"},{"a":1,"backing":true,"n":"<TileAdded>k__BackingField","t":4,"rt":HexTileAdded,"sn":"TileAdded"}]}; }, $n);
    /*Source.Game.HexMerge.HexGamePresenter+AnimationEvent end.*/

    /*Source.Game.HexMerge.HexGamePresenter+CollapseAnimation start.*/
    $m("Source.Game.HexMerge.HexGamePresenter.CollapseAnimation", function () { return {"td":$n[5].HexGamePresenter,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexCoord,$n[0].Int32,$n[0].Int32,HexColor,$n[1].List$1(Source.Game.HexMerge.HexTileView)],"pi":[{"n":"coord","pt":HexCoord,"ps":0},{"n":"startIndex","pt":$n[0].Int32,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2},{"n":"color","pt":HexColor,"ps":3},{"n":"tiles","pt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"ps":4}],"sn":"$ctor1"},{"a":2,"n":"Color","t":16,"rt":HexColor,"g":{"a":2,"n":"get_Color","t":8,"rt":HexColor,"fg":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},"fn":"Color"},{"a":2,"n":"Coord","t":16,"rt":HexCoord,"g":{"a":2,"n":"get_Coord","t":8,"rt":HexCoord,"fg":"Coord"},"fn":"Coord"},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"StartIndex","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_StartIndex","t":8,"rt":$n[0].Int32,"fg":"StartIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"StartIndex"},{"a":2,"n":"Tiles","t":16,"rt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"g":{"a":2,"n":"get_Tiles","t":8,"rt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"fg":"Tiles"},"fn":"Tiles"},{"a":1,"backing":true,"n":"<Color>k__BackingField","t":4,"rt":HexColor,"sn":"Color","box":function ($v) { return Bridge.box($v, HexColor, System.Enum.toStringFn(HexColor));}},{"a":1,"backing":true,"n":"<Coord>k__BackingField","t":4,"rt":HexCoord,"sn":"Coord"},{"a":1,"backing":true,"n":"<Count>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<StartIndex>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"StartIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Tiles>k__BackingField","t":4,"rt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"sn":"Tiles"}]}; }, $n);
    /*Source.Game.HexMerge.HexGamePresenter+CollapseAnimation end.*/

    /*Source.Game.HexMerge.HexGamePresenter+DraggableStackRuntime start.*/
    $m("Source.Game.HexMerge.HexGamePresenter.DraggableStackRuntime", function () { return {"td":$n[5].HexGamePresenter,"att":1048835,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[HexDraggableStackSetup,$n[0].Int32,$n[3].Vector3,$n[3].Transform,$n[1].List$1(Source.Game.HexMerge.HexTileView)],"pi":[{"n":"setup","pt":HexDraggableStackSetup,"ps":0},{"n":"slotIndex","pt":$n[0].Int32,"ps":1},{"n":"homePosition","pt":$n[3].Vector3,"ps":2},{"n":"root","pt":$n[3].Transform,"ps":3},{"n":"tiles","pt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"ps":4}],"sn":"ctor"},{"a":2,"n":"HomePosition","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_HomePosition","t":8,"rt":$n[3].Vector3,"fg":"HomePosition"},"fn":"HomePosition"},{"a":2,"n":"IsAnimating","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsAnimating","t":8,"rt":$n[0].Boolean,"fg":"IsAnimating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsAnimating","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsAnimating"},"fn":"IsAnimating"},{"a":2,"n":"IsEnabled","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEnabled","t":8,"rt":$n[0].Boolean,"fg":"IsEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsEnabled","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsEnabled"},"fn":"IsEnabled"},{"a":2,"n":"Root","t":16,"rt":$n[3].Transform,"g":{"a":2,"n":"get_Root","t":8,"rt":$n[3].Transform,"fg":"Root"},"fn":"Root"},{"a":2,"n":"Setup","t":16,"rt":HexDraggableStackSetup,"g":{"a":2,"n":"get_Setup","t":8,"rt":HexDraggableStackSetup,"fg":"Setup"},"fn":"Setup"},{"a":2,"n":"SlotIndex","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_SlotIndex","t":8,"rt":$n[0].Int32,"fg":"SlotIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"SlotIndex"},{"a":2,"n":"Tiles","t":16,"rt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"g":{"a":2,"n":"get_Tiles","t":8,"rt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"fg":"Tiles"},"fn":"Tiles"},{"a":1,"n":"__Property__Initializer__IsEnabled","t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__IsEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<HomePosition>k__BackingField","t":4,"rt":$n[3].Vector3,"sn":"HomePosition"},{"a":1,"backing":true,"n":"<IsAnimating>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsAnimating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<IsEnabled>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Root>k__BackingField","t":4,"rt":$n[3].Transform,"sn":"Root"},{"a":1,"backing":true,"n":"<Setup>k__BackingField","t":4,"rt":HexDraggableStackSetup,"sn":"Setup"},{"a":1,"backing":true,"n":"<SlotIndex>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"SlotIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Tiles>k__BackingField","t":4,"rt":$n[1].List$1(Source.Game.HexMerge.HexTileView),"sn":"Tiles"}]}; }, $n);
    /*Source.Game.HexMerge.HexGamePresenter+DraggableStackRuntime end.*/

    /*Source.Game.HexMerge.HexGamePresenter+CollapseVfxRequest start.*/
    $m("Source.Game.HexMerge.HexGamePresenter.CollapseVfxRequest", function () { return {"td":$n[5].HexGamePresenter,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[3].Vector3,$n[3].Color,$n[0].Single],"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0},{"n":"color","pt":$n[3].Color,"ps":1},{"n":"delay","pt":$n[0].Single,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"Color","t":16,"rt":$n[3].Color,"g":{"a":2,"n":"get_Color","t":8,"rt":$n[3].Color,"fg":"Color"},"fn":"Color"},{"a":2,"n":"Delay","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Delay","t":8,"rt":$n[0].Single,"fg":"Delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Delay"},{"a":2,"n":"Position","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[3].Vector3,"fg":"Position"},"fn":"Position"},{"a":1,"backing":true,"n":"<Color>k__BackingField","t":4,"rt":$n[3].Color,"sn":"Color"},{"a":1,"backing":true,"n":"<Delay>k__BackingField","t":4,"rt":$n[0].Single,"sn":"Delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Position>k__BackingField","t":4,"rt":$n[3].Vector3,"sn":"Position"}]}; }, $n);
    /*Source.Game.HexMerge.HexGamePresenter+CollapseVfxRequest end.*/

    /*Source.Game.HexMerge.HexGamePresenter+AudioCue start.*/
    $m("Source.Game.HexMerge.HexGamePresenter.AudioCue", function () { return {"td":$n[5].HexGamePresenter,"att":1057035,"a":1,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clip","t":4,"rt":$n[3].AudioClip,"sn":"Clip"},{"a":2,"n":"Pitch","t":4,"rt":$n[0].Single,"sn":"Pitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Source.Game.HexMerge.HexGamePresenter+AudioCue end.*/

    /*Source.Game.HexMerge.HexTileView start.*/
    $m("Source.Game.HexMerge.HexTileView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Renderer","t":4,"rt":$n[3].Renderer,"sn":"Renderer"}]}; }, $n);
    /*Source.Game.HexMerge.HexTileView end.*/

    /*Source.Game.HexMerge.TileCollapseVfxView start.*/
    $m("Source.Game.HexMerge.TileCollapseVfxView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ParticleSystemSetColor","is":true,"t":8,"pi":[{"n":"ps","pt":$n[3].ParticleSystem,"ps":0},{"n":"color","pt":$n[3].Color,"ps":1}],"sn":"ParticleSystemSetColor","rt":$n[0].Void,"p":[$n[3].ParticleSystem,$n[3].Color]},{"a":2,"n":"Play","t":8,"pi":[{"n":"color","pt":$n[3].Color,"ps":0}],"sn":"Play","rt":$n[0].Void,"p":[$n[3].Color]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_isPlaying","t":4,"rt":$n[0].Boolean,"sn":"_isPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[3].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_subParticleSystem","t":4,"rt":$n[3].ParticleSystem,"sn":"_subParticleSystem"},{"a":2,"n":"Completed","t":2,"ad":{"a":2,"n":"add_Completed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addCompleted","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Completed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeCompleted","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Source.Game.HexMerge.TileCollapseVfxView end.*/

    /*Tweens.AnchoredPositionTween start.*/
    $m("Tweens.AnchoredPositionTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0},{"n":"value","pt":$n[3].Vector2,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].RectTransform,$n[3].Vector2]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0}],"sn":"Current","rt":$n[3].Vector2,"p":[$n[3].RectTransform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector2,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector2,"p":[$n[3].Vector2,$n[3].Vector2,$n[0].Single]}]}; }, $n);
    /*Tweens.AnchoredPositionTween end.*/

    /*Tweens.AnchoredPositionXTween start.*/
    $m("Tweens.AnchoredPositionXTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].RectTransform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].RectTransform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.AnchoredPositionXTween end.*/

    /*Tweens.AnchoredPositionYTween start.*/
    $m("Tweens.AnchoredPositionYTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].RectTransform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].RectTransform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.AnchoredPositionYTween end.*/

    /*Tweens.AnchorMaxTween start.*/
    $m("Tweens.AnchorMaxTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0},{"n":"value","pt":$n[3].Vector2,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].RectTransform,$n[3].Vector2]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0}],"sn":"Current","rt":$n[3].Vector2,"p":[$n[3].RectTransform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector2,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector2,"p":[$n[3].Vector2,$n[3].Vector2,$n[0].Single]}]}; }, $n);
    /*Tweens.AnchorMaxTween end.*/

    /*Tweens.AnchorMinTween start.*/
    $m("Tweens.AnchorMinTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0},{"n":"value","pt":$n[3].Vector2,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].RectTransform,$n[3].Vector2]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].RectTransform,"ps":0}],"sn":"Current","rt":$n[3].Vector2,"p":[$n[3].RectTransform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector2,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector2,"p":[$n[3].Vector2,$n[3].Vector2,$n[0].Single]}]}; }, $n);
    /*Tweens.AnchorMinTween end.*/

    /*Tweens.ColorTween start.*/
    $m("Tweens.ColorTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Color,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Color]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Color,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Color,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Color,"p":[$n[3].Color,$n[3].Color,$n[0].Single]}]}; }, $n);
    /*Tweens.ColorTween end.*/

    /*Tweens.EaseType start.*/
    $m("Tweens.EaseType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BackIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"BackIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"BackInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"BackInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"BackOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"BackOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"BounceIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"BounceIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"BounceInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"BounceInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"BounceOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"BounceOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"CircIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"CircIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"CircInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"CircInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"CircOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"CircOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"CubicIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"CubicIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"CubicInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"CubicInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"CubicOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"CubicOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"ElasticIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"ElasticIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"ElasticInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"ElasticInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"ElasticOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"ElasticOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"ExpoIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"ExpoIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"ExpoInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"ExpoInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"ExpoOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"ExpoOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"Linear","is":true,"t":4,"rt":$n[8].EaseType,"sn":"Linear","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuadIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuadIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuadInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuadInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuadOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuadOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuartIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuartIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuartInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuartInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuartOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuartOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuintIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuintIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuintInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuintInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"QuintOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"QuintOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"SineIn","is":true,"t":4,"rt":$n[8].EaseType,"sn":"SineIn","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"SineInOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"SineInOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"SineOut","is":true,"t":4,"rt":$n[8].EaseType,"sn":"SineOut","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}}]}; }, $n);
    /*Tweens.EaseType end.*/

    /*Tweens.EulerAnglesTween start.*/
    $m("Tweens.EulerAnglesTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector3,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector3]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector3,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Tweens.EulerAnglesTween end.*/

    /*Tweens.EulerAnglesXTween start.*/
    $m("Tweens.EulerAnglesXTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.EulerAnglesXTween end.*/

    /*Tweens.EulerAnglesYTween start.*/
    $m("Tweens.EulerAnglesYTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.EulerAnglesYTween end.*/

    /*Tweens.EulerAnglesZTween start.*/
    $m("Tweens.EulerAnglesZTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.EulerAnglesZTween end.*/

    /*Tweens.FillMode start.*/
    $m("Tweens.FillMode", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Backwards","is":true,"t":4,"rt":$n[8].FillMode,"sn":"Backwards","box":function ($v) { return Bridge.box($v, Tweens.FillMode, System.Enum.toStringFn(Tweens.FillMode));}},{"a":2,"n":"Both","is":true,"t":4,"rt":$n[8].FillMode,"sn":"Both","box":function ($v) { return Bridge.box($v, Tweens.FillMode, System.Enum.toStringFn(Tweens.FillMode));}},{"a":2,"n":"Forwards","is":true,"t":4,"rt":$n[8].FillMode,"sn":"Forwards","box":function ($v) { return Bridge.box($v, Tweens.FillMode, System.Enum.toStringFn(Tweens.FillMode));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[8].FillMode,"sn":"None","box":function ($v) { return Bridge.box($v, Tweens.FillMode, System.Enum.toStringFn(Tweens.FillMode));}}]}; }, $n);
    /*Tweens.FillMode end.*/

    /*Tweens.FloatTween start.*/
    $m("Tweens.FloatTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.FloatTween end.*/

    /*Tweens.LightColorTween start.*/
    $m("Tweens.LightColorTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0},{"n":"value","pt":$n[3].Color,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Light,$n[3].Color]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0}],"sn":"Current","rt":$n[3].Color,"p":[$n[3].Light]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Color,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Color,"p":[$n[3].Color,$n[3].Color,$n[0].Single]}]}; }, $n);
    /*Tweens.LightColorTween end.*/

    /*Tweens.LightIntensityTween start.*/
    $m("Tweens.LightIntensityTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Light,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Light],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LightIntensityTween end.*/

    /*Tweens.LightRangeTween start.*/
    $m("Tweens.LightRangeTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Light,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Light],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LightRangeTween end.*/

    /*Tweens.LightSpotAngleTween start.*/
    $m("Tweens.LightSpotAngleTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Light,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Light,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Light],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LightSpotAngleTween end.*/

    /*Tweens.LocalEulerAnglesTween start.*/
    $m("Tweens.LocalEulerAnglesTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector3,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector3]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector3,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Tweens.LocalEulerAnglesTween end.*/

    /*Tweens.LocalEulerAnglesXTween start.*/
    $m("Tweens.LocalEulerAnglesXTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalEulerAnglesXTween end.*/

    /*Tweens.LocalEulerAnglesYTween start.*/
    $m("Tweens.LocalEulerAnglesYTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalEulerAnglesYTween end.*/

    /*Tweens.LocalEulerAnglesZTween start.*/
    $m("Tweens.LocalEulerAnglesZTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalEulerAnglesZTween end.*/

    /*Tweens.LocalPositionTween start.*/
    $m("Tweens.LocalPositionTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector3,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector3]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector3,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Tweens.LocalPositionTween end.*/

    /*Tweens.LocalPositionXTween start.*/
    $m("Tweens.LocalPositionXTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalPositionXTween end.*/

    /*Tweens.LocalPositionYTween start.*/
    $m("Tweens.LocalPositionYTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalPositionYTween end.*/

    /*Tweens.LocalPositionZTween start.*/
    $m("Tweens.LocalPositionZTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalPositionZTween end.*/

    /*Tweens.LocalRotationTween start.*/
    $m("Tweens.LocalRotationTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Quaternion,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Quaternion]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Quaternion,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Quaternion,"ps":0},{"n":"to","pt":$n[3].Quaternion,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Quaternion,"p":[$n[3].Quaternion,$n[3].Quaternion,$n[0].Single]}]}; }, $n);
    /*Tweens.LocalRotationTween end.*/

    /*Tweens.LocalScaleTween start.*/
    $m("Tweens.LocalScaleTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector3,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector3]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector3,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Tweens.LocalScaleTween end.*/

    /*Tweens.LocalScaleXTween start.*/
    $m("Tweens.LocalScaleXTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalScaleXTween end.*/

    /*Tweens.LocalScaleYTween start.*/
    $m("Tweens.LocalScaleYTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalScaleYTween end.*/

    /*Tweens.LocalScaleZTween start.*/
    $m("Tweens.LocalScaleZTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.LocalScaleZTween end.*/

    /*Tweens.PositionTween start.*/
    $m("Tweens.PositionTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector3,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector3]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector3,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Tweens.PositionTween end.*/

    /*Tweens.PositionXTween start.*/
    $m("Tweens.PositionXTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.PositionXTween end.*/

    /*Tweens.PositionYTween start.*/
    $m("Tweens.PositionYTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.PositionYTween end.*/

    /*Tweens.PositionZTween start.*/
    $m("Tweens.PositionZTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.PositionZTween end.*/

    /*Tweens.QuaternionTween start.*/
    $m("Tweens.QuaternionTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Quaternion,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Quaternion]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Quaternion,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Quaternion,"ps":0},{"n":"to","pt":$n[3].Quaternion,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Quaternion,"p":[$n[3].Quaternion,$n[3].Quaternion,$n[0].Single]}]}; }, $n);
    /*Tweens.QuaternionTween end.*/

    /*Tweens.RectTween start.*/
    $m("Tweens.RectTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Rect,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Rect]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Rect,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Rect,"ps":0},{"n":"to","pt":$n[3].Rect,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Rect,"p":[$n[3].Rect,$n[3].Rect,$n[0].Single]}]}; }, $n);
    /*Tweens.RectTween end.*/

    /*Tweens.RotationTween start.*/
    $m("Tweens.RotationTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Quaternion,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Quaternion]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Quaternion,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Quaternion,"ps":0},{"n":"to","pt":$n[3].Quaternion,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Quaternion,"p":[$n[3].Quaternion,$n[3].Quaternion,$n[0].Single]}]}; }, $n);
    /*Tweens.RotationTween end.*/

    /*Tweens.SpriteRendererAlphaTween start.*/
    $m("Tweens.SpriteRendererAlphaTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].SpriteRenderer,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].SpriteRenderer,$n[0].Single]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].SpriteRenderer,"ps":0}],"sn":"Current","rt":$n[0].Single,"p":[$n[3].SpriteRenderer],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.SpriteRendererAlphaTween end.*/

    /*Tweens.SpriteRendererColorTween start.*/
    $m("Tweens.SpriteRendererColorTween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].SpriteRenderer,"ps":0},{"n":"value","pt":$n[3].Color,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].SpriteRenderer,$n[3].Color]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].SpriteRenderer,"ps":0}],"sn":"Current","rt":$n[3].Color,"p":[$n[3].SpriteRenderer]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Color,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Color,"p":[$n[3].Color,$n[3].Color,$n[0].Single]}]}; }, $n);
    /*Tweens.SpriteRendererColorTween end.*/

    /*Tweens.TweenExtension start.*/
    $m("Tweens.TweenExtension", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"AddTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].GameObject,"ps":0},{"n":"tween","pt":$n[9].Tween$2(System.Object,System.Object),"ps":1}],"tpc":2,"tprm":["ComponentType","DataType"],"sn":"AddTween$2","rt":$n[8].TweenInstance$2(System.Object,System.Object),"p":[$n[3].GameObject,$n[9].Tween$2(System.Object,System.Object)]},{"a":2,"n":"AddTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].GameObject,"ps":0},{"n":"tween1","pt":$n[9].Tween$2(System.Object,System.Object),"ps":1},{"n":"tween2","pt":$n[9].Tween$2(System.Object,System.Object),"ps":2}],"tpc":4,"tprm":["ComponentType1","DataType1","ComponentType2","DataType2"],"sn":"AddTween","rt":System.Array.type(Tweens.TweenInstance),"p":[$n[3].GameObject,$n[9].Tween$2(System.Object,System.Object),$n[9].Tween$2(System.Object,System.Object)]},{"a":2,"n":"AddTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].GameObject,"ps":0},{"n":"tween1","pt":$n[9].Tween$2(System.Object,System.Object),"ps":1},{"n":"tween2","pt":$n[9].Tween$2(System.Object,System.Object),"ps":2},{"n":"tween3","pt":$n[9].Tween$2(System.Object,System.Object),"ps":3}],"tpc":6,"tprm":["ComponentType1","DataType1","ComponentType2","DataType2","ComponentType3","DataType3"],"sn":"AddTween$1","rt":System.Array.type(Tweens.TweenInstance),"p":[$n[3].GameObject,$n[9].Tween$2(System.Object,System.Object),$n[9].Tween$2(System.Object,System.Object),$n[9].Tween$2(System.Object,System.Object)]},{"a":2,"n":"CancelTweens","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].GameObject,"ps":0},{"n":"includeChildren","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"CancelTweens","rt":$n[3].GameObject,"p":[$n[3].GameObject,$n[0].Boolean]}]}; }, $n);
    /*Tweens.TweenExtension end.*/

    /*Tweens.TweenInstance start.*/
    $m("Tweens.TweenInstance", function () { return {"att":1048705,"a":2,"m":[{"a":4,"n":".ctor","t":1,"p":[$n[3].GameObject,$n[9].Tween],"pi":[{"n":"target","pt":$n[3].GameObject,"ps":0},{"n":"tween","pt":$n[9].Tween,"ps":1}],"sn":"ctor"},{"ab":true,"a":2,"n":"Cancel","t":8,"sn":"Cancel","rt":$n[0].Void},{"ab":true,"a":4,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":4,"n":"didReachEnd","t":4,"rt":$n[0].Boolean,"sn":"didReachEnd","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"dontInvokeWhenDestroyed","t":4,"rt":$n[0].Boolean,"sn":"dontInvokeWhenDestroyed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":4,"n":"easeFunction","t":4,"rt":Function,"sn":"easeFunction"},{"a":4,"n":"fillMode","t":4,"rt":$n[8].FillMode,"sn":"fillMode","ro":true,"box":function ($v) { return Bridge.box($v, Tweens.FillMode, System.Enum.toStringFn(Tweens.FillMode));}},{"a":4,"n":"haltTime","t":4,"rt":$n[0].Nullable$1(System.Single),"sn":"haltTime","box":function ($v) { return Bridge.box($v, System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));}},{"a":4,"n":"isDecommissioned","t":4,"rt":$n[0].Boolean,"sn":"isDecommissioned","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"isForwards","t":4,"rt":$n[0].Boolean,"sn":"isForwards","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPaused","t":4,"rt":$n[0].Boolean,"sn":"isPaused","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"loops","t":4,"rt":$n[0].Nullable$1(System.Int32),"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32, System.Nullable.toString, System.Nullable.getHashCode);}},{"a":4,"n":"pingPongInterval","t":4,"rt":$n[0].Nullable$1(System.Single),"sn":"pingPongInterval","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));}},{"a":4,"n":"repeatInterval","t":4,"rt":$n[0].Nullable$1(System.Single),"sn":"repeatInterval","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));}},{"a":2,"n":"target","t":4,"rt":$n[3].GameObject,"sn":"target","ro":true},{"a":4,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":4,"n":"usePingPong","t":4,"rt":$n[0].Boolean,"sn":"usePingPong","ro":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"useUnscaledTime","t":4,"rt":$n[0].Boolean,"sn":"useUnscaledTime","ro":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Tweens.TweenInstance end.*/

    /*Tweens.TweenInstance$2 start.*/
    $m("Tweens.TweenInstance$2", function (ComponentType, DataType) { return {"att":1048577,"a":2,"m":[{"a":4,"n":".ctor","t":1,"p":[$n[3].GameObject,$n[9].Tween$2(ComponentType,DataType)],"pi":[{"n":"target","pt":$n[3].GameObject,"ps":0},{"n":"tween","pt":$n[9].Tween$2(ComponentType,DataType),"ps":1}],"sn":"ctor"},{"a":2,"n":"AwaitDecommission","t":8,"sn":"AwaitDecommission","rt":$n[4].IEnumerator},{"ov":true,"a":2,"sl":true,"n":"Cancel","t":8,"sn":"Cancel","rt":$n[0].Void},{"ov":true,"a":4,"sl":true,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"apply","t":4,"rt":Function,"sn":"apply","ro":true},{"a":1,"n":"component","t":4,"rt":ComponentType,"sn":"component","ro":true},{"a":1,"n":"from","t":4,"rt":DataType,"sn":"from","ro":true},{"a":1,"n":"initial","t":4,"rt":DataType,"sn":"initial","ro":true},{"a":1,"n":"lerp","t":4,"rt":Function,"sn":"lerp","ro":true},{"a":1,"n":"onAdd","t":4,"rt":Function,"sn":"onAdd","ro":true},{"a":4,"n":"onCancel","t":4,"rt":Function,"sn":"onCancel"},{"a":1,"n":"onEnd","t":4,"rt":Function,"sn":"onEnd","ro":true},{"a":4,"n":"onFinally","t":4,"rt":Function,"sn":"onFinally"},{"a":1,"n":"onStart","t":4,"rt":Function,"sn":"onStart"},{"a":1,"n":"onUpdate","t":4,"rt":Function,"sn":"onUpdate","ro":true},{"a":1,"n":"to","t":4,"rt":DataType,"sn":"to","ro":true}]}; }, $n);
    /*Tweens.TweenInstance$2 end.*/

    /*Tweens.Vector2Tween start.*/
    $m("Tweens.Vector2Tween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector2,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector2]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector2,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector2,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector2,"p":[$n[3].Vector2,$n[3].Vector2,$n[0].Single]}]}; }, $n);
    /*Tweens.Vector2Tween end.*/

    /*Tweens.Vector3Tween start.*/
    $m("Tweens.Vector3Tween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector3,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector3]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector3,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Tweens.Vector3Tween end.*/

    /*Tweens.Vector4Tween start.*/
    $m("Tweens.Vector4Tween", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0},{"n":"value","pt":$n[3].Vector4,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Vector4]},{"ov":true,"a":4,"sl":true,"n":"Current","t":8,"pi":[{"n":"component","pt":$n[3].Transform,"ps":0}],"sn":"Current","rt":$n[3].Vector4,"p":[$n[3].Transform]},{"ov":true,"a":4,"sl":true,"n":"Lerp","t":8,"pi":[{"n":"from","pt":$n[3].Vector4,"ps":0},{"n":"to","pt":$n[3].Vector4,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":$n[3].Vector4,"p":[$n[3].Vector4,$n[3].Vector4,$n[0].Single]}]}; }, $n);
    /*Tweens.Vector4Tween end.*/

    /*Tweens.Core.EaseFunctions start.*/
    $m("Tweens.Core.EaseFunctions", function () { return {"att":1048960,"a":4,"s":true,"m":[{"a":1,"n":"BackIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"BackIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"BackInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"BackInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"BackOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"BackOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"BounceIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"BounceIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"BounceInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"BounceInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"BounceOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"BounceOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CircIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"CircIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CircInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"CircInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CircOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"CircOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CubicIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"CubicIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CubicInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"CubicInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CubicOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"CubicOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ElasticIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"ElasticIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ElasticInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"ElasticInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ElasticOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"ElasticOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ExpoIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"ExpoIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ExpoInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"ExpoInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ExpoOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"ExpoOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":4,"n":"GetFunction","is":true,"t":8,"pi":[{"n":"easeType","pt":$n[8].EaseType,"ps":0}],"sn":"GetFunction","rt":Function,"p":[$n[8].EaseType]},{"a":1,"n":"Linear","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"Linear","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuadIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuadIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuadInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuadInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuadOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuadOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuartIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuartIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuartInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuartInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuartOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuartOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuintIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuintIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuintInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuintInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"QuintOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"QuintOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SineIn","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"SineIn","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SineInOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"SineInOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SineOut","is":true,"t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"SineOut","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConstantA","is":true,"t":4,"rt":$n[0].Single,"sn":"ConstantA","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConstantB","is":true,"t":4,"rt":$n[0].Single,"sn":"ConstantB","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConstantC","is":true,"t":4,"rt":$n[0].Single,"sn":"ConstantC","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConstantD","is":true,"t":4,"rt":$n[0].Single,"sn":"ConstantD","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConstantE","is":true,"t":4,"rt":$n[0].Single,"sn":"ConstantE","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConstantF","is":true,"t":4,"rt":$n[0].Single,"sn":"ConstantF","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConstantG","is":true,"t":4,"rt":$n[0].Single,"sn":"ConstantG","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tweens.Core.EaseFunctions end.*/

    /*Tweens.Core.Nullable$1 start.*/
    $m("Tweens.Core.Nullable$1", function (Type) { return {"att":1048577,"a":2,"m":[{"a":4,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":".ctor","t":1,"p":[$n[9].Nullable$1(Type)],"pi":[{"n":"nullable","pt":$n[9].Nullable$1(Type),"ps":0}],"sn":"$ctor2"},{"a":4,"n":".ctor","t":1,"p":[Type],"pi":[{"n":"value","pt":Type,"ps":0}],"sn":"$ctor1"},{"a":4,"n":"Unset","t":8,"sn":"Unset","rt":$n[0].Void},{"a":2,"n":"op_Implicit","is":true,"t":8,"pi":[{"n":"test","pt":$n[9].Nullable$1(Type),"ps":0}],"sn":"op_Implicit","rt":Type,"p":[$n[9].Nullable$1(Type)]},{"a":2,"n":"op_Implicit","is":true,"t":8,"pi":[{"n":"value","pt":Type,"ps":0}],"sn":"op_Implicit$1","rt":$n[9].Nullable$1(Type),"p":[Type]},{"a":4,"n":"HasValue","t":16,"rt":$n[0].Boolean,"g":{"a":4,"n":"get_HasValue","t":8,"rt":$n[0].Boolean,"fg":"HasValue","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_HasValue","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"HasValue"},"fn":"HasValue"},{"a":4,"n":"Value","t":16,"rt":Type,"g":{"a":4,"n":"get_Value","t":8,"rt":Type,"fg":"Value"},"s":{"a":1,"n":"set_Value","t":8,"p":[Type],"rt":$n[0].Void,"fs":"Value"},"fn":"Value"},{"a":1,"backing":true,"n":"<HasValue>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"HasValue","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Value>k__BackingField","t":4,"rt":Type,"sn":"Value"}]}; }, $n);
    /*Tweens.Core.Nullable$1 end.*/

    /*Tweens.Core.Tween start.*/
    $m("Tweens.Core.Tween", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"animationCurve","t":4,"rt":pc.AnimationCurve,"sn":"animationCurve"},{"a":2,"n":"delay","t":4,"rt":$n[0].Nullable$1(System.Single),"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));}},{"a":2,"n":"dontInvokeWhenDestroyed","t":4,"rt":$n[0].Boolean,"sn":"dontInvokeWhenDestroyed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeType","t":4,"rt":$n[8].EaseType,"sn":"easeType","box":function ($v) { return Bridge.box($v, Tweens.EaseType, System.Enum.toStringFn(Tweens.EaseType));}},{"a":2,"n":"fillMode","t":4,"rt":$n[8].FillMode,"sn":"fillMode","box":function ($v) { return Bridge.box($v, Tweens.FillMode, System.Enum.toStringFn(Tweens.FillMode));}},{"a":2,"n":"isInfinite","t":4,"rt":$n[0].Boolean,"sn":"isInfinite","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"loops","t":4,"rt":$n[0].Nullable$1(System.Int32),"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32, System.Nullable.toString, System.Nullable.getHashCode);}},{"a":2,"n":"offset","t":4,"rt":$n[0].Nullable$1(System.Single),"sn":"offset","box":function ($v) { return Bridge.box($v, System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));}},{"a":2,"n":"pingPongInterval","t":4,"rt":$n[0].Nullable$1(System.Single),"sn":"pingPongInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));}},{"a":2,"n":"repeatInterval","t":4,"rt":$n[0].Nullable$1(System.Single),"sn":"repeatInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));}},{"a":2,"n":"usePingPong","t":4,"rt":$n[0].Boolean,"sn":"usePingPong","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useUnscaledTime","t":4,"rt":$n[0].Boolean,"sn":"useUnscaledTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Tweens.Core.Tween end.*/

    /*Tweens.Core.Tween$2 start.*/
    $m("Tweens.Core.Tween$2", function (ComponentType, DataType) { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":4,"n":"Apply","t":8,"pi":[{"n":"component","pt":ComponentType,"ps":0},{"n":"value","pt":DataType,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[ComponentType,DataType]},{"ab":true,"a":4,"n":"Current","t":8,"pi":[{"n":"component","pt":ComponentType,"ps":0}],"sn":"Current","rt":DataType,"p":[ComponentType]},{"ab":true,"a":4,"n":"Lerp","t":8,"pi":[{"n":"from","pt":DataType,"ps":0},{"n":"to","pt":DataType,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"Lerp","rt":DataType,"p":[DataType,DataType,$n[0].Single]},{"a":2,"n":"from","t":4,"rt":$n[9].Nullable$1(DataType),"sn":"from"},{"a":2,"n":"onAdd","t":4,"rt":Function,"sn":"onAdd"},{"a":2,"n":"onCancel","t":4,"rt":Function,"sn":"onCancel"},{"a":2,"n":"onEnd","t":4,"rt":Function,"sn":"onEnd"},{"a":2,"n":"onFinally","t":4,"rt":Function,"sn":"onFinally"},{"a":2,"n":"onStart","t":4,"rt":Function,"sn":"onStart"},{"a":2,"n":"onUpdate","t":4,"rt":Function,"sn":"onUpdate"},{"a":2,"n":"to","t":4,"rt":$n[9].Nullable$1(DataType),"sn":"to"}]}; }, $n);
    /*Tweens.Core.Tween$2 end.*/

    /*Tweens.Core.TweenEngine start.*/
    $m("Tweens.Core.TweenEngine", function () { return {"nested":[$n[9].TweenEngine.TweenBehaviour],"att":1048960,"a":4,"s":true,"m":[{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(1)],"a":4,"n":"Initialize","is":true,"t":8,"sn":"Initialize","rt":$n[0].Void},{"a":4,"n":"Update","is":true,"t":8,"sn":"Update","rt":$n[0].Void},{"a":4,"n":"instances","is":true,"t":4,"rt":$n[1].List$1(Tweens.TweenInstance),"sn":"instances","ro":true}]}; }, $n);
    /*Tweens.Core.TweenEngine end.*/

    /*Tweens.Core.TweenEngine+TweenBehaviour start.*/
    $m("Tweens.Core.TweenEngine.TweenBehaviour", function () { return {"td":$n[9].TweenEngine,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void}]}; }, $n);
    /*Tweens.Core.TweenEngine+TweenBehaviour end.*/

    }});
