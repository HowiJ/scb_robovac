import type { ReactElement } from "react";
import type { BoardState } from "./Game";

import React, { useMemo, useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { Grid } from "@mui/material";

import Game from "./Game";
import Board from "./Board";
import Controls from "./Controls";
import Instructions from "./Instructions";
import { Direction } from "./Position";

function App(_: Readonly<{}>): ReactElement {
  const game = useMemo(() => new Game(), []);
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
  function onPlace(x: number, y: number, direction: Direction): void {}

  return (
    <div className={css(styles.app)}>
      <h1>Robovac Controls</h1>
      <Grid container>
        <Grid item xs={12} xl={6} md={6} className={css(styles.section)}>
          <Board state={boardState} onPlace={onPlace} />
          <Controls
            onReport={() => console.log("Report")}
            onMove={() => {
              onMove();
              console.log("move");
            }}
            onTurnLeft={onMoveLeft}
            onTurnRight={onMoveRight}
          />
        </Grid>
        <Grid item xs={12} xl={6} md={6} className={css(styles.instruction)}>
          <Instructions />
        </Grid>
      </Grid>
    </div>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: "24px",
    textAlign: "center",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  instruction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default App;
