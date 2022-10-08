const twoDimensionalArray = (callback, rowX, columnY) => {
  const boardArray = new Array(rowX);
  for (let i = 0; i < rowX; i++) {
    boardArray[i] = [];
    for (let j = 0; j < columnY; j++) {
      boardArray[i][j] = callback(i, j);
    }
  }
  return boardArray;
};

export default twoDimensionalArray;
