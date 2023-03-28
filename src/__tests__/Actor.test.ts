/** @format */

import Actor from '../Actor';
import Position, { Direction } from '../Position';

/**
 * Tests purely the movement, no collision.
 * Collision will be done via the game
 */
describe('Actor', () => {
  describe('turn', () => {
    test('right', () => {
      const actor = new Actor();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.UP);
      actor.right();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.RIGHT);
      actor.right();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.DOWN);
      actor.right();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.LEFT);
      actor.right();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.UP);
    });

    test('left', () => {
      const actor = new Actor();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.UP);
      actor.left();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.LEFT);
      actor.left();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.DOWN);
      actor.left();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.RIGHT);
      actor.left();
      expect([actor.position.x, actor.position.y]).toEqual([0, 0]);
      expect(actor.position.direction).toStrictEqual(Direction.UP);
    });
  });

  describe('place', () => {
    test('at 1,4', () => {
      const [x, y, direction] = [1, 4, Direction.DOWN];
      const actor = new Actor();
      expect(actor.position).toEqual(new Position(0, 0, Direction.UP));
      actor.place(new Position(x, y, direction));
      expect(actor.position).toEqual(new Position(x, y, direction));
    });
  });

  describe('report', () => {
    test('from initial', () => {
      const [x, y, direction] = [5, 8, Direction.LEFT];
      const actor = new Actor();
      const logger = { log: jest.fn() };
      actor.report(logger);
      expect(logger.log).toHaveBeenLastCalledWith(0, 0, Direction.UP);
      actor.position = new Position(x, y, direction);
      actor.report(logger);
      expect(logger.log).toHaveBeenLastCalledWith(x, y, direction);
    });
  });

  describe('move', () => {
    test('right', () => {
      const actor = new Actor();
      actor.position = new Position(0, 0, Direction.RIGHT);
      expect(actor.position).toEqual(new Position(0, 0, Direction.RIGHT));
      actor.move();
      expect(actor.position).toEqual(new Position(1, 0, Direction.RIGHT));
      actor.move();
      expect(actor.position).toEqual(new Position(2, 0, Direction.RIGHT));
    });

    test('left', () => {
      const actor = new Actor();
      actor.position = new Position(5, 0, Direction.LEFT);
      expect(actor.position).toEqual(new Position(5, 0, Direction.LEFT));
      actor.move();
      expect(actor.position).toEqual(new Position(4, 0, Direction.LEFT));
      actor.move();
      expect(actor.position).toEqual(new Position(3, 0, Direction.LEFT));
    });

    test('up', () => {
      const actor = new Actor();
      actor.position = new Position(0, 0, Direction.UP);
      expect(actor.position).toEqual(new Position(0, 0, Direction.UP));
      actor.move();
      expect(actor.position).toEqual(new Position(0, 1, Direction.UP));
      actor.move();
      expect(actor.position).toEqual(new Position(0, 2, Direction.UP));
    });

    test('down', () => {
      const actor = new Actor();
      actor.position = new Position(0, 5, Direction.DOWN);
      expect(actor.position).toEqual(new Position(0, 5, Direction.DOWN));
      actor.move();
      expect(actor.position).toEqual(new Position(0, 4, Direction.DOWN));
      actor.move();
      expect(actor.position).toEqual(new Position(0, 3, Direction.DOWN));
    });
  });

  describe('example inputs', () => {
    test('a [PLACE(0, 0, NORTH) -> MOVE -> REPORT -> REPORT(0, 1, NORTH)]', () => {
      // PLACE(0, 0, NORTH) -> MOVE -> REPORT -> REPORT(0, 1, NORTH)
      const logger = { log: jest.fn() };
      const actor = new Actor();
      actor.place(new Position(0, 0, Direction.UP));
      actor.move();
      actor.report(logger);
      expect(logger.log).toHaveBeenLastCalledWith(0, 1, Direction.UP);
    });

    test('b [PLACE(0, 0, NORTH) -> LEFT -> REPORT -> REPORT(0, 0, WEST)]', () => {
      // PLACE(0, 0, NORTH) -> LEFT -> REPORT -> REPORT(0, 0, WEST)
      const logger = { log: jest.fn() };
      const actor = new Actor();
      actor.place(new Position(0, 0, Direction.UP));
      actor.left();
      actor.report(logger);
      expect(logger.log).toHaveBeenLastCalledWith(0, 0, Direction.LEFT);
    });

    test('c [PLACE(1, 2, EAST) -> MOVE -> MOVE -> LEFT -> MOVE -> REPORT(3, 3, NORTH)]', () => {
      // PLACE(1, 2, EAST) -> MOVE -> MOVE -> LEFT -> MOVE -> REPORT(3, 3, NORTH)
      const logger = { log: jest.fn() };
      const actor = new Actor();
      actor.place(new Position(1, 2, Direction.RIGHT));
      actor.move();
      actor.move();
      actor.left();
      actor.move();
      actor.report(logger);
      expect(logger.log).toHaveBeenLastCalledWith(3, 3, Direction.UP);
    });
  });
});
