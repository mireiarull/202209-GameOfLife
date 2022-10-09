import Cell from "../Cell/Cell.js";
import playDefaultPattern from "../playDefaultPattern/playDefaultPattern.js";
import playPlayerPattern from "../playPlayerPattern/playPlayerPattern.js";
import printBoard from "../printBoard/printBoard.js";
import twoDimensionalArray from "../twoDimensionalArray/twoDimensionalArray.js";

const boardRows = 24;
const boardColumns = 50;

const initialSetup = (type) => {
  let gameBoard = twoDimensionalArray(
    (x, y) => new Cell(x, y),
    boardRows,
    boardColumns
  );

  if (type === "custom") {
    gameBoard = playPlayerPattern(gameBoard);
  } else if (type === "default") {
    gameBoard[5][13].cellIsAlive();
    gameBoard[5][14].cellIsAlive();
    gameBoard[5][15].cellIsAlive();
    gameBoard[5][19].cellIsAlive();
    gameBoard[5][20].cellIsAlive();
    gameBoard[5][21].cellIsAlive();

    gameBoard[7][11].cellIsAlive();
    gameBoard[7][16].cellIsAlive();
    gameBoard[7][18].cellIsAlive();
    gameBoard[7][23].cellIsAlive();

    gameBoard[8][11].cellIsAlive();
    gameBoard[8][16].cellIsAlive();
    gameBoard[8][18].cellIsAlive();
    gameBoard[8][23].cellIsAlive();

    gameBoard[9][11].cellIsAlive();
    gameBoard[9][16].cellIsAlive();
    gameBoard[9][18].cellIsAlive();
    gameBoard[9][23].cellIsAlive();

    gameBoard[10][13].cellIsAlive();
    gameBoard[10][14].cellIsAlive();
    gameBoard[10][15].cellIsAlive();
    gameBoard[10][19].cellIsAlive();
    gameBoard[10][20].cellIsAlive();
    gameBoard[10][21].cellIsAlive();

    gameBoard[12][13].cellIsAlive();
    gameBoard[12][14].cellIsAlive();
    gameBoard[12][15].cellIsAlive();
    gameBoard[12][19].cellIsAlive();
    gameBoard[12][20].cellIsAlive();
    gameBoard[12][21].cellIsAlive();

    gameBoard[13][11].cellIsAlive();
    gameBoard[13][16].cellIsAlive();
    gameBoard[13][18].cellIsAlive();
    gameBoard[13][23].cellIsAlive();

    gameBoard[14][11].cellIsAlive();
    gameBoard[14][16].cellIsAlive();
    gameBoard[14][18].cellIsAlive();
    gameBoard[14][23].cellIsAlive();

    gameBoard[15][11].cellIsAlive();
    gameBoard[15][16].cellIsAlive();
    gameBoard[15][18].cellIsAlive();
    gameBoard[15][23].cellIsAlive();

    gameBoard[17][13].cellIsAlive();
    gameBoard[17][14].cellIsAlive();
    gameBoard[17][15].cellIsAlive();
    gameBoard[17][19].cellIsAlive();
    gameBoard[17][20].cellIsAlive();
    gameBoard[17][21].cellIsAlive();

    printBoard(gameBoard);
    playDefaultPattern(gameBoard);
  }
  return gameBoard;
};

export default initialSetup;
