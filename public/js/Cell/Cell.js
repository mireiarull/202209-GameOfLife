class Cell {
  positionX;
  positionY;
  isAlive = false;
  willBeAlive = false;

  constructor(rowX, columY) {
    this.positionX = rowX;
    this.positionY = columY;
  }

  cellRevives() {
    this.willBeAlive = true;
  }

  cellOnClick() {
    this.isAlive = true;
  }
}

export default Cell;
