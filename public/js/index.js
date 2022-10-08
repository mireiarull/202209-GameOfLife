import twoDimensionalArray from "./twoDimensionalArray/twoDimensionalArray.js";
import Cell from "./Cell/Cell.js";

const boardRows = 3;
const boardColumns = 3;

const newBoard = twoDimensionalArray(
  (x, y) => new Cell(x, y),
  boardRows,
  boardColumns
);
console.log(newBoard);
