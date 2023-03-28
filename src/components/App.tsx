import type { ReactElement } from "react";
import type { BoardState } from "../lib/Game";
import Position from "../lib/Position";

import React, { useMemo, useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { Grid, Paper, Stack, Typography } from "@mui/material";

import { Direction } from "../lib/Position";
import Board from "./Board";
import Controls from "./Controls";
import Game from "../lib/Game";
import Instructions from "./Instructions";
import Report from "./Report";

function App(): ReactElement {
  const game = useMemo(() => new Game(), []);
  const [reportPosition, setReportPosition] = useState<Position | null>(null);
  const [boardState, setBoardState] = useState<BoardState>(
    game.getDrawableBoardState()
  );

  function updateBoardState(): void {
    game.update();
    setBoardState(game.getDrawableBoardState());
  }
  function onPlace(x: number, y: number, direction: Direction): void {
    game.placeActor(new Position(x, y, direction));
    updateBoardState();
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
  function onReport() {
    game.actor.report({
      log: (x: number, y: number, direction: Direction) => {
        setReportPosition(new Position(x, y, direction));
        console.log(x, y, direction);
      },
    });
  }

  return (
    <Stack paddingTop="24px" alignItems="center">
      <Typography variant="h2">Robovac Controls</Typography>
      <Grid item container spacing={1}>
        <Grid item xs={12} xl={6} md={6} className={css(styles.section)}>
          <Paper elevation={1}>
            <Stack alignItems="center" gap="12px" padding="12px">
              <Board state={boardState} onPlace={onPlace} />
              <Controls
                onReport={onReport}
                onMove={onMove}
                onTurnLeft={onMoveLeft}
                onTurnRight={onMoveRight}
              />
            </Stack>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          className={css(styles.instruction)}
          flexDirection="column"
          gap="10px"
        >
          <Stack spacing={1}>
            <Instructions />
            <Report
              position={reportPosition}
              onHide={() => setReportPosition(null)}
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

const styles = StyleSheet.create({
  section: {
    "@media(max-width: 900px)": {
      alignItems: "center",
    },
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  instruction: {
    "@media(max-width: 900px)": {
      alignItems: "center",
    },
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
});

export default App;
