const checkCellNeighbors = (board, cell) => {
  const { positionX } = cell;
  const { positionY } = cell;

  let aliveNeighborsCount = 0;

  const directions = {
    top: board[positionX - 1]?.[positionY - 1] || 0,
    topmiddle: board[positionX - 1]?.[positionY] || 0,
    topright: board[positionX - 1]?.[positionY + 1] || 0,
    middleleft: board[positionX]?.[positionY - 1] || 0,
    middleright: board[positionX]?.[positionY + 1] || 0,
    bottomleft: board[positionX + 1]?.[positionY - 1] || 0,
    bottommiddle: board[positionX + 1]?.[positionY] || 0,
    bottomright: board[positionX + 1]?.[positionY + 1] || 0,
  };

  const directionsArray = Object.values(directions);
  directionsArray.forEach((direction) => {
    if (direction.isAlive) {
      aliveNeighborsCount++;
    }
  });
  // if (cell.positionX === 1 && cell.positionY === 3) {
  //   console.log(aliveNeighborsCount);
  // }

  return aliveNeighborsCount;
};

export default checkCellNeighbors;
