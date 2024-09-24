import React from 'react';

type titleProps = {
  score: number;
  newGame: () => void;
};

const Title = ({ score, newGame }: titleProps) => {
  return (
    <div className="desc">
      <div className="title">2048</div>
      <div className="control">
        <div className="score">
          <div className="scoreTitle">SCORE</div>
          {score}
        </div>
        <div onClick={newGame} className="newgame">
          New Game
        </div>
      </div>
    </div>
  );
};

export default Title;
