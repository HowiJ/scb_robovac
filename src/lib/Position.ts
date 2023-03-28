/** @format */

import Vector from "./Vector";

export enum Direction {
  UP = "NORTH",
  DOWN = "SOUTH",
  LEFT = "WEST",
  RIGHT = "EAST",
}

class Position {
  x: Readonly<number>;
  y: Readonly<number>;
  direction: Direction;

  static ZERO: Position = new Position(0, 0, Direction.UP);

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  static applyDirection(position: Position, vector: Vector): Position {
    return new Position(
      position.x + vector.x,
      position.y + vector.y,
      position.direction
    );
  }
}

export default Position;
