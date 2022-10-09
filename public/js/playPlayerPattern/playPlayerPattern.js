import playGame from "../playGame/playGame.js";

const playPlayerPattern = (board) => {
  const userBoard = board;
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 50; j++) {
      const cellHtml = document.querySelector(`.cell--${i}-${j}`);
      cellHtml.addEventListener("click", () => {
        userBoard[i][j].cellIsAlive();
        cellHtml.classList.add("cell--alive");
      });
    }
  }

  let myInterval;

  document
    .querySelector(".game-control__action--play")
    .addEventListener("click", () => {
      myInterval = setInterval(() => {
        playGame(userBoard);
      }, 1000);
    });

  document
    .querySelector(".game-control__forward")
    .addEventListener("click", () => {
      clearInterval(myInterval);
      playGame(userBoard);
    });

  document
    .querySelector(".game-control__reset")
    .addEventListener("click", () => {
      clearInterval(myInterval);
      location.reload();
    });
};

export default playPlayerPattern;
