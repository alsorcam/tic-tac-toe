import Square from './square';

interface BoardProps {
  isNextX: boolean;
  squares: Array<string | null>;
  onPlay: Function;
}
export default function Board({
  isNextX,
  squares,
  onPlay,
}: Readonly<BoardProps>) {
  function handleClick(i: number): void {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isNextX ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = `${winner} has won!`;
  } else {
    const isTie = squares.every((item) => item != null);
    if (isTie) {
      status = "It's a tie!";
    } else {
      status = `${isNextX ? 'X' : 'O'}'s turn`;
    }
  }

  const squareItems = squares.map((_, idx) => (
    <Square
      key={idx}
      value={squares[idx]}
      onSquareClick={() => handleClick(idx)}
    />
  ));

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="font-bold text-2xl text-violet-800">{status}</h2>
      <div className="grid grid-cols-3 gap-0 shadow-2xl shadow-violet-200">
        {squareItems}
      </div>
    </div>
  );
}

function calculateWinner(squares: Array<any>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const element of lines) {
    const [a, b, c] = element;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
