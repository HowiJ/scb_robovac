/** @format */

import type { ReactElement } from 'react';

import React, { useMemo } from 'react';
import Game from './Game';
import Board from './Board';
import Controls from './Controls';

function App(_: Readonly<{}>): ReactElement {
  const game = useMemo(() => new Game(), []);
  const actor = game.actor;

  return (
    <div className='App'>
      <Board game={game} />
      <div>
        Actor: {actor.position.x} {actor.position.y} {actor.position.direction}
      </div>
      <div>Game: {JSON.stringify(game.boardState)}</div>
      <Controls />
    </div>
  );
}

export default App;
