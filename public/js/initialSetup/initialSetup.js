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
    gameBoard[7][9].cellIsAlive();
    gameBoard[7][10].cellIsAlive();
    gameBoard[8][9].cellIsAlive();
    gameBoard[8][10].cellIsAlive();

    gameBoard[6][26].cellIsAlive();
    gameBoard[6][27].cellIsAlive();
    gameBoard[7][26].cellIsAlive();
    gameBoard[7][28].cellIsAlive();
    gameBoard[8][28].cellIsAlive();
    gameBoard[9][26].cellIsAlive();
    gameBoard[9][27].cellIsAlive();
    gameBoard[9][28].cellIsAlive();

    gameBoard[7][36].cellIsAlive();
    gameBoard[7][37].cellIsAlive();
    gameBoard[8][36].cellIsAlive();
    gameBoard[8][37].cellIsAlive();

    gameBoard[14][9].cellIsAlive();
    gameBoard[14][10].cellIsAlive();
    gameBoard[15][9].cellIsAlive();
    gameBoard[15][10].cellIsAlive();

    gameBoard[13][26].cellIsAlive();
    gameBoard[13][27].cellIsAlive();
    gameBoard[13][28].cellIsAlive();
    gameBoard[14][28].cellIsAlive();
    gameBoard[15][26].cellIsAlive();
    gameBoard[15][28].cellIsAlive();
    gameBoard[16][26].cellIsAlive();
    gameBoard[16][27].cellIsAlive();

    printBoard(gameBoard);
    playDefaultPattern(gameBoard);
  }
  return gameBoard;
};

export default initialSetup;
