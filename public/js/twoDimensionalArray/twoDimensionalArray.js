const twoDimensionalArray = (callback, rowX, columnY) => {
  const boardArray = new Array(columnY);
  for (let i = 0; i < columnY; i++) {
    boardArray[i] = [];
    for (let j = 0; j < rowX; j++) {
      boardArray[i][j] = callback;
    }
  }
  return boardArray;
};

export default twoDimensionalArray;
