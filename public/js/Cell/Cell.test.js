import Cell from "./Cell.js";

describe("Given the class Cell", () => {
  describe("When it receives a positionX 4", () => {
    test("Then it should return an object with a property positionX 4", () => {
      const positionX = 4;
      const expectedClassProperty = 4;

      const newCellPosition = new Cell(positionX).positionX;

      expect(newCellPosition).toBe(expectedClassProperty);
    });
  });
});
