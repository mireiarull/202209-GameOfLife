import Cell from "../Cell/Cell.js";
import twoDimensionalArray from "../twoDimensionalArray/twoDimensionalArray.js";

const boardRows = 6;
const boardColumns = 6;

const initialSetup = () => {
  const gameBoard = twoDimensionalArray(
    (x, y) => new Cell(x, y),
    boardRows,
    boardColumns
  );
  // SET CELLS ALIVE
  gameBoard[1][1].cellIsAlive();
  gameBoard[1][2].cellIsAlive();
  gameBoard[2][1].cellIsAlive();
  gameBoard[2][2].cellIsAlive();

  return gameBoard;
};

export default initialSetup;
