import initialSetup from "./initialSetup/initialSetup.js";
import setCellFutureState from "./setCellFutureState/setCellFutureState.js";
import printBoard from "./printBoard/printBoard.js";
import checkCellNeighbors from "./checkCellNeighbors/checkCellNeighbors.js";
import updateCellState from "./updateCellState/updateCellState.js";

const playGame = () => {
  const board = initialSetup();
  printBoard(board);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      const aliveNeighbors = checkCellNeighbors(board, cell);
      setCellFutureState(aliveNeighbors, cell);
      updateCellState(cell);
    }
  }
  console.log("debugger:");
  printBoard(board);
  // printBoard(board);
  // check neighbour cells -> change next cell status
  // print current state
  // change future state for current state
};

playGame();
