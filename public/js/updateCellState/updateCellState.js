const updateCellState = (board) => {
  for (let xAxis = 0; xAxis < board.length; xAxis++) {
    for (let yAxis = 0; yAxis < board[xAxis].length; yAxis++) {
      const cell = board[xAxis][yAxis];
      if (cell.willBeAlive) {
        cell.cellIsAlive();
      } else {
        cell.cellIsDead();
      }
    }
  }
};

export default updateCellState;
