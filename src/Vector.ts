/** @format */

import { Direction } from './Position';

class Vector {
  x: Readonly<number> = 0;
  y: Readonly<number> = 0;

  static DOWN: Vector = new Vector(0, -1);
  static UP: Vector = new Vector(0, 1);
  static LEFT: Vector = new Vector(-1, 0);
  static RIGHT: Vector = new Vector(1, 0);
  static ZERO: Vector = new Vector(0, 0);

  constructor(x: number, y: number) {
    this.x = x * 1;
    this.y = y * 1;
  }

  static fromDirection(direction: Direction): Vector {
    switch (direction) {
      case Direction.UP:
        return Vector.UP;
      case Direction.DOWN:
        return Vector.DOWN;
      case Direction.LEFT:
        return Vector.LEFT;
      case Direction.RIGHT:
        return Vector.RIGHT;
    }
  }
}

export default Vector;
