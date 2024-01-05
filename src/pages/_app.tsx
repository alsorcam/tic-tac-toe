import '@/styles/globals.css';
import React from 'react';
import Game from '../components/game';

export default function App() {
  return (
    <div className="flex flex-col gap-12 items-center">
      <h1 className="font-bold text-5xl text-violet-900">Tic Tac Toe</h1>
      <Game />
    </div>
  );
}
