import Cell from "../Cell/Cell.js";
import twoDimensionalArray from "../twoDimensionalArray/twoDimensionalArray.js";

const boardRows = 24;
const boardColumns = 50;

const initialSetup = () => {
  const gameBoard = twoDimensionalArray(
    (x, y) => new Cell(x, y),
    boardRows,
    boardColumns
  );
  // SET CELLS ALIVE
  gameBoard[5][1].cellIsAlive();
  gameBoard[1][2].cellIsAlive();
  gameBoard[2][2].cellIsAlive();
  gameBoard[3][2].cellIsAlive();
  gameBoard[2][3].cellIsAlive();
  gameBoard[5][2].cellIsAlive();

  return gameBoard;
};

export default initialSetup;
