import type { ReactElement, MouseEvent } from "react";

import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { Box } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@mui/icons-material";

import { BoardCell } from "../lib/Game";
import { Direction } from "../lib/Position";
import Robot from "./Robot";

type Props = Readonly<{
  data: BoardCell;
  onSelect: (direction: Direction) => void;
}>;

function Cell({ data, onSelect }: Props): ReactElement {
  const [isCellClicked, setIsCellClicked] = useState<boolean>(false);
  if (data !== 0) {
    return <Robot direction={data.position?.direction ?? null} />;
  }

  function onCellClick() {
    setIsCellClicked(true);
  }
  function onDirectionClick(
    event: React.MouseEvent<HTMLElement>,
    direction: Direction
  ): void {
    event.stopPropagation();
    onSelect(direction);
    setIsCellClicked(false);
  }

  return (
    <Box onClick={onCellClick} position="relative" height="100%" width="100%">
      {isCellClicked && (
        <>
          <Box
            className={css(styles.direction, styles.up)}
            onClick={(event: MouseEvent<HTMLElement>) =>
              onDirectionClick(event, Direction.UP)
            }
          >
            <KeyboardArrowUp />
          </Box>
          <Box
            className={css(styles.direction, styles.right)}
            onClick={(event: MouseEvent<HTMLElement>) =>
              onDirectionClick(event, Direction.RIGHT)
            }
          >
            <KeyboardArrowRight />
          </Box>
          <Box
            className={css(styles.direction, styles.down)}
            onClick={(event: MouseEvent<HTMLElement>) =>
              onDirectionClick(event, Direction.DOWN)
            }
          >
            <KeyboardArrowDown />
          </Box>
          <Box
            className={css(styles.direction, styles.left)}
            onClick={(event: MouseEvent<HTMLElement>) =>
              onDirectionClick(event, Direction.LEFT)
            }
          >
            <KeyboardArrowLeft />
          </Box>
        </>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  direction: {
    position: "absolute",
    cursor: "pointer",
  },
  up: {
    left: "calc(50% - 12px)",
    top: 0,
  },
  down: {
    left: "calc(50% - 12px)",
    bottom: 0,
  },
  left: {
    left: 0,
    top: "calc(50% - 12px)",
  },
  right: {
    right: 0,
    top: "calc(50% - 12px)",
  },
});

export default Cell;
