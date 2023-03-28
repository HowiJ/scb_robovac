/** @format */

import React, { useMemo } from 'react';
import Game from './Game';

function App() {
  const game = useMemo(() => new Game(), []);
  const actor = game.actor;

  return (
    <div className='App'>
      <div>
        Actor: {actor.position.x} {actor.position.y} {actor.position.direction}
      </div>
      <div>Game: {JSON.stringify(game.boardState)}</div>
    </div>
  );
}

export default App;
