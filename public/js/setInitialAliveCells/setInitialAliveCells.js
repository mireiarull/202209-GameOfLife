const setInitialAliveCells = (board) => {
  board[1][1].cellIsAlive();
  return board;
};

export default setInitialAliveCells;
