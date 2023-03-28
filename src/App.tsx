import type { ReactElement } from "react";
import type { BoardState } from "./Game";

import React, { useMemo, useState } from "react";
import Game from "./Game";
import Board from "./Board";
import Controls from "./Controls";

function App(_: Readonly<{}>): ReactElement {
  const game = useMemo(() => new Game(), []);
  const actor = game.actor;
  const [boardState, setBoardState] = useState<BoardState>(
    game.getDrawableBoardState()
  );

  function updateBoardState(): void {
    game.update();
    setBoardState(game.getDrawableBoardState());
  }

  function onMove() {
    game.moveActor();
    updateBoardState();
  }
  function onMoveLeft() {
    game.turnActorLeft();
    updateBoardState();
  }
  function onMoveRight() {
    game.turnActorRight();
    updateBoardState();
  }

  return (
    <div className="App">
      <Board state={boardState} />
      <div>
        Actor: {actor.position.x} {actor.position.y} {actor.position.direction}
      </div>
      <div>Game: {JSON.stringify(game.boardState)}</div>
      <Controls
        onReport={() => console.log("Report")}
        onMove={() => {
          onMove();
          console.log("move");
        }}
        onTurnLeft={onMoveLeft}
        onTurnRight={onMoveRight}
      />
    </div>
  );
}

export default App;
