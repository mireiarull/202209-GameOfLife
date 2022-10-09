import setCellFutureState from "../setCellFutureState/setCellFutureState.js";
import printBoard from "../printBoard/printBoard.js";
import checkCellNeighbors from "../checkCellNeighbors/checkCellNeighbors.js";
import updateCellsState from "../updateCellState/updateCellsState.js";

const playGame = (board) => {
  printBoard(board);
  for (let xAxis = 0; xAxis < board.length; xAxis++) {
    for (let yAxis = 0; yAxis < board[xAxis].length; yAxis++) {
      const cell = board[xAxis][yAxis];
      const aliveNeighbors = checkCellNeighbors(board, cell);
      setCellFutureState(aliveNeighbors, cell);
    }
  }
  updateCellsState(board);
};

export default playGame;
