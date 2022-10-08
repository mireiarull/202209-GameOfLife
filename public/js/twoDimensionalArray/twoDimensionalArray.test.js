const { default: twoDimensionalArray } = require("./twoDimensionalArray");

describe("Given the function twoDimensionalArray", () => {
  describe("When it receives 10 and 10", () => {
    test("Then it should return a bidirection array with length 10", () => {
      const rowX = 10;
      const columnY = 10;
      const expectedLenght = 10;

      const array = twoDimensionalArray(rowX, columnY);
      const { length } = array[1];

      expect(length).toBe(expectedLenght);
    });
  });
});
