import type { Board, Direction } from './types';

const createEmptyBoard = (): Board => {
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
      const row = newBoard[i];
      for (let j = 0; j < 4; j++) {
        const row2 = board[i];
        if (row !== undefined && row2 !== undefined) row[j] = row2[3 - j];
      }
      if (row !== undefined) newBoard[i] = row;
    }
  } else if (
    (direction === 'up' && !revert) ||
    (direction === 'down' && revert)
  ) {
    for (let i = 0; i < 4; i++) {
      const row = newBoard[i];
      for (let j = 0; j < 4; j++) {
        const row2 = board[j];
        if (row !== undefined && row2 !== undefined) row[j] = row2[3 - i];
      }
      if (row !== undefined) newBoard[i] = row;
    }
  } else if (
    (direction === 'down' && !revert) ||
    (direction === 'up' && revert)
  ) {
    for (let i = 0; i < 4; i++) {
      const row = newBoard[i];
      for (let j = 0; j < 4; j++) {
        const row2 = board[3 - j];
        if (row !== undefined && row2 !== undefined) row[j] = row2[i];
      }
      if (row !== undefined) newBoard[i] = row;
    }
  }
  return newBoard;
};

export { transList, createEmptyBoard };
