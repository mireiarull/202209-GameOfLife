const setCellFutureState = (aliveNeighbors, cell) => {
  if (cell.isAlive && aliveNeighbors < 2) {
    cell.cellWillDie();
  } else if (cell.isAlive && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
    cell.cellWillSurvive();
  } else if (cell.isAlive && aliveNeighbors > 3) {
    cell.cellWillDie();
  } else if (!cell.isAlive && aliveNeighbors === 3) {
    cell.cellWillSurvive();
  }
  // if (cell.isAlive && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
  //   cell.cellWillSurvive();
  // } else if (!cell.isAlive && aliveNeighbors === 3) {
  //   cell.cellWillSurvive();
  // } else {
  //   cell.cellWillDie();
  // }
};

export default setCellFutureState;
