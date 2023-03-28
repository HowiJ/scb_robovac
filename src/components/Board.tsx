import type { ReactElement } from "react";
import type { Direction } from "../lib/Position";
import type { BoardState, BoardRow, BoardCell } from "../lib/Game";

import React from "react";
import { StyleSheet, css } from "aphrodite";

import Robot from "./Robot";

type Props = Readonly<{
  state: BoardState;
  onPlace: (x: number, y: number, direction: Direction) => void;
}>;

function Board({ state, onPlace }: Props): ReactElement {
  return (
    <table cellSpacing="0px">
      <tbody>
        {state.map((row: BoardRow, y: number) => (
          <tr key={y}>
            {row.map((cell: BoardCell, x: number) => (
              <td key={x} className={css(styles.cell)}>
                {cell === 0 ? (
                  ""
                ) : (
                  <Robot direction={cell.position?.direction ?? null} />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: "80px",
    height: "80px",
    textAlign: "center",
    outline: "1px solid lightgrey",
  },
});

export default Board;
