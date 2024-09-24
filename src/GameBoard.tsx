import React from 'react';

import Tile from './Tile';
import type { Board, OverState } from './types';

type boardProps = {
  board: Board;
  gameover: OverState;
  onGameover: () => void;
};

const GameBoard = ({ board, gameover, onGameover }: boardProps) => {
  return (
    <div className={`game ${gameover === 'false' ? '' : 'gameover'}`}>
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        )),
      )}
      <div
        className="overBox"
        style={{ display: gameover === 'false' ? 'none' : '' }}
      >
        <div className="overTitle">
          {gameover === 'win' ? 'You Win!' : 'Game Over!'}
        </div>
        <div onClick={onGameover} className="overButton">
          Restart Game
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
