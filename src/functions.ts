import type { Board, Direction } from './types';

const createEmptyBoard = () => {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
};

const transList = (
  board: Board,
  direction: Direction,
  revert: boolean = false,
) => {
  const newBoard = createEmptyBoard();
  if (direction === 'left') {
    return board;
  } else if (direction === 'right') {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newBoard[i][j] = board[i][3 - j];
      }
    }
  } else if (
    (direction === 'up' && !revert) ||
    (direction === 'down' && revert)
  ) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newBoard[i][j] = board[j][3 - i];
      }
    }
  } else if (
    (direction === 'down' && !revert) ||
    (direction === 'up' && revert)
  ) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newBoard[i][j] = board[3 - j][i];
      }
    }
  }
  return newBoard;
};

export { transList, createEmptyBoard };
