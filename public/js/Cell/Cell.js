class Cell {
  positionX;
  positionY;
  isAlive = false;
  willBeAlive = false;

  constructor(rowX, columY) {
    this.positionX = rowX;
    this.positionY = columY;
  }

  cellIsAlive() {
    this.isAlive = true;
  }

  cellIsDead() {
    this.isAlive = false;
  }

  cellWillBeAlive() {
    this.willBeAlive = true;
  }

  cellWillDie() {
    this.willBeAlive = false;
  }

  cellOnClick() {
    this.isAlive = true;
  }
}

export default Cell;
