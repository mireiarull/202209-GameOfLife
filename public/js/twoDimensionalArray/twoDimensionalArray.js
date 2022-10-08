const twoDimensionalArray = (rowX, columnY) => {
  const boardArray = new Array(columnY);
  for (let i = 0; i < boardArray.length; i++) {
    boardArray[i] = new Array(rowX);
  }
  return boardArray;
};

export default twoDimensionalArray;
