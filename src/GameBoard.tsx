import Tile from './Tile';
import type { Board, OverState } from './types';

const GameBoard = ({
  board,
  gameover,
  onGameover,
}: {
  board: Board;
  gameover: OverState;
  onGameover: () => void;
}) => {
  return (
    <div className="relative w-[600px] h-[600px] grid grid-cols-4 grid-rows-4 gap-5 p-[10px] bg-[#bbada0]">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        )),
      )}
      <div
        className="flex justify-center items-center absolute w-full h-full bg-[rgba(187,173,160,0.6)] flex-col"
        style={{ display: gameover === 'false' ? 'none' : '' }}
      >
        <div className="text-[80px] font-semibold mb-5">
          {gameover === 'win' ? 'You Win!' : 'Game Over!'}
        </div>
        <button
          onClick={onGameover}
          className="p-[10px] rounded-[5px] bg-[#8f7a66] text-white text-[20px] font-semibold"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
