import type { ReactElement } from "react";

import React from "react";
import { StyleSheet, css } from "aphrodite";

import { Direction } from "../lib/Position";
import Robovac from "../static/robovac.png";

type Props = Readonly<{
  direction: Direction | null;
}>;

function Robot({ direction }: Props): ReactElement | null {
  if (direction == null) {
    return null;
  }

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
      <img src={Robovac} className={css(styles.img)} alt="robovac" />
    </div>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "90%",
    height: "90%",
  },
  robot: {
    // transition: "0.5s linear",
    height: "80%",
    width: "80%",
    margin: "10%",
  },
  up: { transform: "rotate(0deg)" },
  down: { transform: "rotate(180deg)" },
  left: { transform: "rotate(270deg)" },
  right: { transform: "rotate(90deg)" },
});

export default Robot;
