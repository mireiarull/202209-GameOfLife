import initialSetup from "./initialSetup/initialSetup.js";
import setCellFutureState from "./setCellFutureState/setCellFutureState.js";
import printBoard from "./printBoard/printBoard.js";
import checkCellNeighbors from "./checkCellNeighbors/checkCellNeighbors.js";
import updateCellState from "./updateCellState/updateCellState.js";

const playGame = () => {
  const board = initialSetup();

  let currentGeneration = 1;
  const lastGeneration = 10;

  while (currentGeneration < lastGeneration) {
    printBoard(board);
    for (let xAxis = 0; xAxis < board.length; xAxis++) {
      for (let yAxis = 0; yAxis < board[xAxis].length; yAxis++) {
        const cell = board[xAxis][yAxis];
        const aliveNeighbors = checkCellNeighbors(board, cell);
        setCellFutureState(aliveNeighbors, cell);
      }
    }
    updateCellState(board);
    console.log("debugger: Next generation");
    currentGeneration++;
  }
};

playGame();

// printBoard(board);
// check neighbour cells -> change next cell status
// print current state
// change future state for current state
