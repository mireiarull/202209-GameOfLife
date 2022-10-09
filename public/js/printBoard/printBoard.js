const printBoard = (board) => {
  const boardToPrint = board;
  for (let i = 0; i < boardToPrint.length; i++) {
    for (let j = 0; j < boardToPrint[i].length; j++) {
      if (boardToPrint[i][j].isAlive) {
        document
          .querySelector(`.cell--${i}-${j}`)
          .classList.remove("cell--dead");
        document.querySelector(`.cell--${i}-${j}`).classList.add("cell--alive");
      } else {
        document
          .querySelector(`.cell--${i}-${j}`)
          .classList.remove("cell--alive");
        document.querySelector(`.cell--${i}-${j}`).classList.add("cell--dead");
      }
    }
  }
};

export default printBoard;
