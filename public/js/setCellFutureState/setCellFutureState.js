const setCellFutureState = (aliveNeighbors, currentCell) => {
  if (currentCell.isAlive && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
    currentCell.cellWillBeAlive();
  } else {
    currentCell.cellWillDie();
  }

  if (!currentCell.isAlive && aliveNeighbors === 3) {
    currentCell.willBeAlive();
  }
  // if isAlive === true && aliveNeighbourCount === 2 || 3 --> willBeAlive === true -- else false
  // if isAlive === false && aliveNeighbourCount === 3 || --> willBeAlive === true
};

export default setCellFutureState;
