/** @format */

import Game from "../lib/Game";
import Position, { Direction } from "../lib/Position";

describe("Game", () => {
  describe("draws Actor", () => {
    test("at 1,4", () => {
      const game = new Game();
      const actor = game.actor;
      actor.place(new Position(1, 4, Direction.DOWN));
      game.update();
      expect(game.boardState[4][1]).toBe(actor);
      actor.move();
      game.update();
      expect(game.boardState[3][1]).toBe(actor);
    });
  });
});
