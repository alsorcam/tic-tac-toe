import '@/styles/globals.css';
import React from 'react';
import Game from '../components/game';

export default function App() {
  return (
    <div className="flex flex-col gap-12">
      <h1>TIC TAC TOE</h1>
      <Game />
    </div>
  );
}
