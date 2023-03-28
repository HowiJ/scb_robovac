/** @format */

import Actor from "./Actor";
import Vector from "./Vector";
import Position from "./Position";

export type BoardCell = 0 | Actor;
export type BoardRow = BoardCell[];
export type BoardState = BoardRow[];

class Game {
  actor: Actor = new Actor();
  // prettier-ignore
  boardState: BoardState = [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
  ];

  MAX_X: number = this.boardState[0].length - 1;
  MAX_Y: number = this.boardState.length - 1;

  /**
   * For react, we draw the board state from top left to bottom right
   * This is due to O(n^2) loop, {map(row => map(column) => cell)}
   * IE: if we had a 5x5 board, the 'first' cell (bottom left) (0,0,d)
   * by boardstate would be y,x(4,0) or boardState[4][0].
   * When we place Actor(0,0,d), we want the actor to be bottom left, hence,
   * y,x(4,0) or boardState[4][0]
   *
   * This is only the case for drawing out the board
   */
  getDrawableBoardState(): BoardState {
    return this.boardState.reverse();
  }

  /**
   * Updates the board state with the actor present
   */
  update(): BoardState {
    if (this.actor.position === null) {
      return this.boardState;
    }
    const { x: posX, y: posY } = this.actor.position;

    const boardState = this.boardState.map(
      (row: BoardRow, y: number): BoardRow =>
        row.map((_: BoardCell, x: number): BoardCell => {
          if (y === posY && x === posX) {
            return this.actor;
          } else {
            return 0;
          }
        })
    );
    this.boardState = boardState;
    return this.boardState;
  }

  placeActor(position: Position): void {
    let { x, y } = position;
    if (x < 0 || x > this.MAX_X || y < 0 || y > this.MAX_Y) {
      return;
    }

    this.actor.place(position);
  }

  moveActor(): void {
    if (this.actor.position === null) {
      return;
    }
    const vector = Vector.fromDirection(this.actor.position.direction);
    let { x, y } = Position.applyDirection(this.actor.position, vector);

    if (x < 0 || x > this.MAX_X || y < 0 || y > this.MAX_Y) {
      return;
    }

    this.actor.move();
  }

  turnActorLeft(): void {
    this.actor.left();
  }
  turnActorRight(): void {
    this.actor.right();
  }
}

export default Game;
