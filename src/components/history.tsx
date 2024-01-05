import React from 'react';

interface HistoryProps {
  history: Array<Array<string | null>>;
  onJump: Function;
}

export default function History({ history, onJump }: Readonly<HistoryProps>) {
  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => onJump(move)}>{description}</button>
      </li>
    );
  });

  return <ol className="flex flex-col-reverse gap-2 items-center">{moves}</ol>;
}
