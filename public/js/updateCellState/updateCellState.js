const updateCellState = (cell) => {
  if (cell.willBeAlive) {
    cell.cellIsAlive();
  } else {
    cell.cellIsDead();
  }
};

export default updateCellState;
