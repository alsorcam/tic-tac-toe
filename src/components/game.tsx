import React from 'react';
import Board from './board';
import History from './history';

export default function Game() {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const isNextX = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string | null>): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleJump(nextMove: number) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="flex flex-col gap-12">
      <Board isNextX={isNextX} squares={currentSquares} onPlay={handlePlay} />
      <History history={history} onJump={handleJump} />
    </div>
  );
}
