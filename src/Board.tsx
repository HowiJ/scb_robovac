import type { ReactElement } from "react";
import type { BoardState } from "./Game";

import React from "react";
import { StyleSheet, css } from "aphrodite";
import Game from "./Game";

type Props = Readonly<{
  state: BoardState;
}>;

function Board({ state }: Props): ReactElement {
  return (
    <div>
      <span>This is the game board</span>
    </div>
  );
}

export default Board;
