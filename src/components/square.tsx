export default function Square({
  value,
  onSquareClick,
}: Readonly<Record<string, any>>) {
  return (
    <button
      className="bg-white border border-[#999] float-start font-bold text-xl leading-8 h-8 -mr-0.5 -mt-0.5 p-0 text-center w-8"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}
