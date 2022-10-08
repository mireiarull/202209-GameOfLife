import Cell from "../Cell/Cell.js";
import twoDimensionalArray from "../twoDimensionalArray/twoDimensionalArray.js";

const boardRows = 3;
const boardColumns = 3;

const gameBoard = twoDimensionalArray(
  (x, y) => new Cell(x, y),
  boardRows,
  boardColumns
);

export default gameBoard;
