const printBoard = (board) => {
  for (let i = 0; i < board.length; i++) {
    console.log(
      board[i].map((cell) => {
        if (cell.isAlive === true) {
          return 1;
        }
        return 0;
      })
    );
  }
};

export default printBoard;
