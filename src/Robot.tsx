import type { ReactElement } from "react";

import React, { useState } from "react";
import { Direction } from "./Position";
import { StyleSheet, css } from "aphrodite";

type Props = Readonly<{
  direction: Direction;
}>;

function Robot({ direction }: Props): ReactElement {
  return (
    <div
      className={css(
        styles.robot,
        direction === Direction.UP && styles.up,
        direction === Direction.DOWN && styles.down,
        direction === Direction.LEFT && styles.left,
        direction === Direction.RIGHT && styles.right
      )}
    >
      ^
    </div>
  );
}

const styles = StyleSheet.create({
  robot: {
    transition: "0.5s linear",
    height: "80%",
    width: "80%",
    borderRadius: "100px",
    backgroundColor: "lightgrey",
    margin: "10%",
  },
  up: { transform: "rotate(0deg)" },
  down: { transform: "rotate(180deg)" },
  left: { transform: "rotate(270deg)" },
  right: { transform: "rotate(90deg)" },
});

export default Robot;
