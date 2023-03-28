/** @format */

import Position, { Direction } from "./Position";
import Vector from "./Vector";

export enum TurnDirection {
  LEFT,
  RIGHT,
}

interface Logger {
  log(...args: any): void;
}

class Actor {
  position: null | Position = null;

  /**
   * Facilitates the turning direction.
   * @param turnDirection
   * @returns new direction that the player is facing
   */
  private turn(turnDirection: TurnDirection): Direction {
    if (this.position == null) {
      throw new Error("No Position found, need to place or set position");
    }
    switch (this.position.direction) {
      case Direction.UP:
        return turnDirection === TurnDirection.LEFT
          ? Direction.LEFT
          : Direction.RIGHT;
      case Direction.DOWN:
        return turnDirection === TurnDirection.LEFT
          ? Direction.RIGHT
          : Direction.LEFT;
      case Direction.LEFT:
        return turnDirection === TurnDirection.LEFT
          ? Direction.DOWN
          : Direction.UP;
      case Direction.RIGHT:
        return turnDirection === TurnDirection.LEFT
          ? Direction.UP
          : Direction.DOWN;
    }
  }

  place(position: Position): this {
    this.position = position;
    return this;
  }

  move(): this {
    if (this.position === null) {
      return this;
    }
    const direction = this.position.direction;
    const vector = Vector.fromDirection(direction);
    const position = Position.applyDirection(this.position, vector);
    this.position = position;

    return this;
  }

  left(): this {
    if (this.position === null) {
      return this;
    }
    const direction = this.turn(TurnDirection.LEFT);
    this.position = new Position(this.position.x, this.position.y, direction);
    return this;
  }

  right(): this {
    if (this.position === null) {
      return this;
    }
    const direction = this.turn(TurnDirection.RIGHT);
    this.position = new Position(this.position.x, this.position.y, direction);
    return this;
  }

  report(logger: Logger): void {
    if (this.position === null) {
      return;
    }
    const { x, y, direction } = this.position;
    logger.log(x, y, direction);
  }
}

export default Actor;
