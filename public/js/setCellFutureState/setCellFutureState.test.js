import Cell from "../Cell/Cell.js";
import setCellFutureState from "./setCellFutureState.js";

describe("Given the function setCellFutureState", () => {
  describe("When it receives 2 neighbours and a cell object", () => {
    test("Then it should return the cell upadated with its next generation status", () => {
      const neighbours = 2;
      const cell = new Cell();
      const expecedFutureState = false;

      const futurState = setCellFutureState(neighbours, cell).isAlive;

      expect(futurState).toBe(expecedFutureState);
    });
  });
});
