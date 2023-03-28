/** @format */

import Game from "../lib/Game";
import Position, { Direction } from "../lib/Position";

describe("Game", () => {
  describe("update", () => {
    test("draws the board with actor", () => {
      const game = new Game();
      const actor = game.actor;
      expect(game.boardState[4][1]).not.toBe(actor);
      actor.place(new Position(1, 4, Direction.DOWN));
      game.update();
      expect(game.boardState[4][1]).toBe(actor);
    });
  });

  describe("moveActor", () => {
    test("can move actor", () => {
      const game = new Game();
      game.placeActor(new Position(1, 1, Direction.UP));
      game.update();
      expect(game.boardState[1][1]).toBe(game.actor);
      game.moveActor();
      game.update();
      expect(game.boardState[1][1]).not.toBe(game.actor);
      expect(game.boardState[2][1]).toBe(game.actor);
    });

    test("actor cannot move past max", () => {
      const game = new Game();
      game.placeActor(new Position(4, 4, Direction.UP));
      game.update();
      expect(game.boardState[4][4]).toBe(game.actor);
      game.moveActor();
      game.update();
      expect(game.boardState[4][4]).toBe(game.actor);
      game.turnActorRight();
      game.moveActor();
      game.update();
      expect(game.boardState[4][4]).toBe(game.actor);
    });
  });

  describe("turn actor", () => {
    test("turnActorLeft", () => {
      const game = new Game();
      game.placeActor(new Position(0, 0, Direction.UP));
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.UP));
      game.turnActorLeft();
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.LEFT));
      game.turnActorLeft();
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.DOWN));
      game.turnActorLeft();
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.RIGHT));
    });
    test("turnActorRight", () => {
      const game = new Game();
      game.placeActor(new Position(0, 0, Direction.UP));
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.UP));
      game.turnActorRight();
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.RIGHT));
      game.turnActorRight();
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.DOWN));
      game.turnActorRight();
      expect(game.actor.position).toEqual(new Position(0, 0, Direction.LEFT));
    });
  });

  describe("placeActor", () => {
    test("places actor", () => {
      const game = new Game();
      game.placeActor(new Position(3, 3, Direction.DOWN));
      expect(game.actor.position).toEqual(new Position(3, 3, Direction.DOWN));
    });

    test("cannot place actor in invalid spot", () => {
      const game = new Game();
      game.placeActor(new Position(game.MAX_X + 1, 0, Direction.DOWN));
      expect(game.actor.position).toBeNull();
      game.placeActor(new Position(0, game.MAX_Y + 1, Direction.LEFT));
      expect(game.actor.position).toBeNull();
      game.placeActor(new Position(-1, 0, Direction.RIGHT));
      expect(game.actor.position).toBeNull();
      game.placeActor(new Position(0, -1, Direction.UP));
      expect(game.actor.position).toBeNull();
    });
  });
});
