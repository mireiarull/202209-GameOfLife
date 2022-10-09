import initialSetup from "../initialSetup/initialSetup.js";
import playGame from "../playGame/playGame.js";

const setEventListeners = (board) => {
  let playBoard = board;
  let myInterval;

  const startButtonHtml = document.querySelector(".game-control__action--play");
  startButtonHtml.addEventListener("click", () => {
    myInterval = setInterval(() => {
      playGame(board);
    }, 2000);
  });

  const nextButtonHtml = document.querySelector(".game-control__forward");
  nextButtonHtml.addEventListener("click", () => {
    clearInterval(myInterval);
    playGame(playBoard);
  });

  const resetHtml = document.querySelector(".game-control__reset");
  resetHtml.addEventListener("click", () => {
    console.log("reset");
    clearInterval(myInterval);
    playBoard = initialSetup();
    console.log(playBoard);
    playGame(playBoard);
  });
};

export default setEventListeners;
