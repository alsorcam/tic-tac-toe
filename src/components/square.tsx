export default function Square({
  value,
  onSquareClick,
}: Readonly<Record<string, any>>) {
  return (
    <button
      className="bg-white border border-violet-200 font-bold text-5xl p-0 text-center h-28 w-28"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}
