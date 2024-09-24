import './reset.css';
import './App.css';

import { useEffect, useState } from 'react';

import GameBoard from './Board';
import { createEmptyBoard, transList } from './functions';
import Title from './Title';
import type { Board, Direction, OverState } from './types';

function App() {
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState<OverState>('false');

  const initGame = () => {
    const newBoard = createEmptyBoard();
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    setBoard(newBoard);
    setScore(0);
    setGameover('false');
  };

  const addRandomTile = (newBoard: Board) => {
    let added = false;
    while (!added) {
      const i = Math.floor(Math.random() * 4);
      const j = Math.floor(Math.random() * 4);
      if (newBoard[i] !== undefined && newBoard[i][j] === 0) {
        newBoard[i][j] = Math.random() < 0.8 ? 2 : 4;
        added = true;
      }
    }
  };

  const checkGameover = (newBoard: Board): OverState => {
    let overstate = true;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (newBoard[i][j] === 128) return 'win';
        if (newBoard[i][j] === 0) overstate = false;
        if (i < 3 && newBoard[i][j] === newBoard[i + 1][j]) overstate = false;
        if (j < 3 && newBoard[i][j] === newBoard[i][j + 1]) overstate = false;
      }
    }
    if (overstate) return 'lose';
    else return 'false';
  };

  const moveTile = (direction: Direction) => {
    let newBoard = transList([...board], direction);
    let didMove = false;
    let newScore = score;

    newBoard = newBoard.map((row) => {
      const filteredRow = row.filter((value) => value !== 0);
      const mergedRow = [];
      for (let i = 0; i < filteredRow.length; i++) {
        if (
          i < filteredRow.length - 1 &&
          filteredRow[i] === filteredRow[i + 1]
        ) {
          mergedRow.push(filteredRow[i] * 2);
          newScore += filteredRow[i] * 2;
          i++;
          didMove = true;
        } else {
          mergedRow.push(filteredRow[i]);
        }
      }
      while (mergedRow.length < 4) {
        mergedRow.push(0);
      }
      for (let i = 0; i < 4; i++) {
        if (mergedRow[i] !== row[i]) didMove = true;
      }
      return mergedRow;
    });

    newBoard = transList(newBoard, direction, true);

    if (didMove) {
      addRandomTile(newBoard);
      setBoard(newBoard);
      setScore(newScore);
      setGameover(checkGameover(newBoard));
    }
  };

  const onKeyDown = (e: WindowEventMap['keydown']) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        moveTile('up');
        break;
      case 'ArrowDown':
      case 's':
        moveTile('down');
        break;
      case 'ArrowLeft':
      case 'a':
        moveTile('left');
        break;
      case 'ArrowRight':
      case 'd':
        moveTile('right');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (gameover === 'false') window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <>
      <Title score={score} newGame={initGame} />
      <GameBoard board={board} gameover={gameover} onGameover={initGame} />
    </>
  );
}

export default App;
