const { default: createEmptyObject } = require("./createEmptyObject.js");
const { default: twoDimensionalArray } = require("./twoDimensionalArray.js");

describe("Given the function twoDimensionalArray", () => {
  const callback = createEmptyObject;
  describe("When it receives a 3 and 3", () => {
    test("Then it should return a bidirection array with 3 rows and 3 columns", () => {
      const rowX = 3;
      const columnY = 3;
      const expectedArray = [
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
      ];

      const newArray = twoDimensionalArray(callback, rowX, columnY);

      expect(newArray).toEqual(expectedArray);
    });
  });
});
