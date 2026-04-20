using System;
using UnityEngine;

public sealed class HexGame : MonoBehaviour
{
    [SerializeField] private HexBoardSetupConfig _boardSetup;
    [SerializeField] private HexDraggableStackSequenceConfig _draggableStackSequenceConfig;
    
    private int _usedDraggableStackCount;
    private bool _isFinished;

    public HexBoardModel BoardModel { get; private set; }

    public event Action<EGameFinish> GameFinished;

    private void Awake()
    {
        CreateBoardModel();
    }

    private void Start()
    {
        RestartGameState();
    }

    public void CreateBoardModel()
    {
        if (BoardModel != null)
        {
            BoardModel.Collapsed -= OnBoardCollapsed;
        }

        if (!_boardSetup)
        {
            Debug.LogError("Hex board setup config is not assigned.", this);
            BoardModel = null;
            return;
        }

        var boardModel = new HexBoardModel(_boardSetup.Width, _boardSetup.Height);
        boardModel.BeginBatchUpdate();

        var cells = _boardSetup.Cells;

        for (int i = 0; i < cells.Length; i++)
        {
            var cellSetup = cells[i];

            if (cellSetup.Amount <= 0)
            {
                Debug.LogWarning($"Skipped board setup entry {i} because amount must be positive.", this);
                continue;
            }

            var coord = HexMath.FromOffset(cellSetup.Position);

            if (!boardModel.Exist(coord))
            {
                Debug.LogWarning($"Skipped board setup entry {i} because position {cellSetup.Position} is outside board bounds.", this);
                continue;
            }

            boardModel.AddTile(coord, new HexTile(cellSetup.Color), cellSetup.Amount);
        }
        
        boardModel.EndBatchUpdate(false);

        BoardModel = boardModel;
        BoardModel.Collapsed += OnBoardCollapsed;
    }

    public void PlaceDraggableStack(HexCoord coord, HexDraggableStackSetup stackSetup)
    {
        if (_isFinished)
        {
            return;
        }

        _usedDraggableStackCount++;
        BoardModel.AddTiles(BuildTileAdditions(coord, stackSetup));
        EvaluateFinishState();
    }

    private void RestartGameState()
    {
        _isFinished = false;
        _usedDraggableStackCount = 0;
        
        EvaluateFinishState();
    }

    private void OnBoardCollapsed(HexCollapsed _)
    {
        EvaluateFinishState();
    }

    private void EvaluateFinishState()
    {
        if (_isFinished || BoardModel == null)
        {
            return;
        }

        if (IsBoardEmpty())
        {
            Finish(EGameFinish.Win);
            return;
        }

        if (_usedDraggableStackCount >= _draggableStackSequenceConfig.Count)
        {
            Finish(EGameFinish.Lose);
        }
    }

    private bool IsBoardEmpty()
    {
        for (int y = 0; y < BoardModel.Height; y++)
        {
            for (int x = 0; x < BoardModel.Width; x++)
            {
                if (!BoardModel[HexMath.FromOffset(x, y)].IsEmpty)
                {
                    return false;
                }
            }
        }

        return true;
    }

    private void Finish(EGameFinish finish)
    {
        if (_isFinished)
        {
            return;
        }

        _isFinished = true;

        GameFinished?.Invoke(finish);
    }

    private static HexTileAddition[] BuildTileAdditions(HexCoord coord, HexDraggableStackSetup stackSetup)
    {
        HexDraggableTileGroupSetup[] groups = stackSetup.Groups;
        HexTileAddition[] additions = new HexTileAddition[groups.Length];

        for (int i = 0; i < groups.Length; i++)
        {
            additions[i] = new HexTileAddition(coord, new HexTile(groups[i].Color), groups[i].Amount);
        }

        return additions;
    }
}
