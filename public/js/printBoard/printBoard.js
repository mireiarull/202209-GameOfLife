const printBoard = (board) => {
  // for (let i = 0; i < board.length; i++) {
  //   console.log(
  //     board[i].map((cell) => {
  //       if (cell.isAlive) {
  //         return 1;
  //       }
  //       return 0;
  //     })
  //   );
  // }

  const boardToPrint = board.flat();
  for (let i = 0; i < boardToPrint.length; i++) {
    if (boardToPrint[i].isAlive) {
      document.querySelector(`.cell--${i}`).classList.remove("cell--dead");
      document.querySelector(`.cell--${i}`).classList.add("cell--alive");
    } else {
      document.querySelector(`.cell--${i}`).classList.remove("cell--alive");
      document.querySelector(`.cell--${i}`).classList.add("cell--dead");
    }
  }
};

export default printBoard;
