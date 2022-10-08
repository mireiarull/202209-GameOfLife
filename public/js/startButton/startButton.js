import playGame from "../playGame/playGame.js";

const startButton = (board) => {
  const startButtonHtml = document.querySelector(".game-control__action--play");

  startButtonHtml.addEventListener("click", () => {
    setInterval(() => {
      playGame(board);
    }, 5000);
  });
};

export default startButton;
