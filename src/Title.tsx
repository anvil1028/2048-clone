const Title = ({ score, newGame }: { score: number; newGame: () => void }) => {
  return (
    <div className="w-[600px] h-[200px] flex justify-between items-center">
      <div className="text-[80px] font-semibold text-[#776e65]">2048</div>
      <div className="flex flex-col justify-between items-center h-full p-[10px]">
        <div className="w-20 h-20 bg-[#bbada0] text-white text-[28px] font-semibold rounded-[5px] flex flex-col justify-center items-center">
          <div className="text-[18px] text-[#eee4da]">SCORE</div>
          {score}
        </div>
        <button
          onClick={newGame}
          className="w-[200px] h-[50px] bg-[#8f7a66] text-white text-[24px] font-semibold rounded-[5px] flex justify-center items-center"
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default Title;
