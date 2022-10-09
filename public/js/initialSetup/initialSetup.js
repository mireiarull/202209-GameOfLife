import Cell from "../Cell/Cell.js";
import twoDimensionalArray from "../twoDimensionalArray/twoDimensionalArray.js";

const boardRows = 24;
const boardColumns = 50;
// const boardRows = 6;
// const boardColumns = 6;

const initialSetup = () => {
  const gameBoard = twoDimensionalArray(
    (x, y) => new Cell(x, y),
    boardRows,
    boardColumns
  );

  // SET CELLS ALIVE
  // gameBoard[0][0].cellIsAlive();
  // gameBoard[5][1].cellIsAlive();
  // gameBoard[1][2].cellIsAlive();
  // gameBoard[2][2].cellIsAlive();
  // gameBoard[3][2].cellIsAlive();
  // gameBoard[5][2].cellIsAlive();

  gameBoard[1][3].cellIsAlive();
  gameBoard[1][4].cellIsAlive();
  gameBoard[1][5].cellIsAlive();
  gameBoard[1][9].cellIsAlive();
  gameBoard[1][10].cellIsAlive();
  gameBoard[1][11].cellIsAlive();

  gameBoard[3][1].cellIsAlive();
  gameBoard[3][6].cellIsAlive();
  gameBoard[3][8].cellIsAlive();
  gameBoard[3][13].cellIsAlive();

  gameBoard[4][1].cellIsAlive();
  gameBoard[4][6].cellIsAlive();
  gameBoard[4][8].cellIsAlive();
  gameBoard[4][13].cellIsAlive();

  gameBoard[5][1].cellIsAlive();
  gameBoard[5][6].cellIsAlive();
  gameBoard[5][8].cellIsAlive();
  gameBoard[5][13].cellIsAlive();

  gameBoard[6][3].cellIsAlive();
  gameBoard[6][4].cellIsAlive();
  gameBoard[6][5].cellIsAlive();
  gameBoard[6][9].cellIsAlive();
  gameBoard[6][10].cellIsAlive();
  gameBoard[6][11].cellIsAlive();

  gameBoard[8][3].cellIsAlive();
  gameBoard[8][4].cellIsAlive();
  gameBoard[8][5].cellIsAlive();
  gameBoard[8][9].cellIsAlive();
  gameBoard[8][10].cellIsAlive();
  gameBoard[8][11].cellIsAlive();

  gameBoard[9][1].cellIsAlive();
  gameBoard[9][6].cellIsAlive();
  gameBoard[9][8].cellIsAlive();
  gameBoard[9][13].cellIsAlive();

  gameBoard[10][1].cellIsAlive();
  gameBoard[10][6].cellIsAlive();
  gameBoard[10][8].cellIsAlive();
  gameBoard[10][13].cellIsAlive();

  gameBoard[11][1].cellIsAlive();
  gameBoard[11][6].cellIsAlive();
  gameBoard[11][8].cellIsAlive();
  gameBoard[11][13].cellIsAlive();

  gameBoard[13][3].cellIsAlive();
  gameBoard[13][4].cellIsAlive();
  gameBoard[13][5].cellIsAlive();
  gameBoard[13][9].cellIsAlive();
  gameBoard[13][10].cellIsAlive();
  gameBoard[13][11].cellIsAlive();

  return gameBoard;
};

export default initialSetup;
