// import playGame from "../playGame/playGame.js";
// import buttonNext from "../buttonNext/buttonNext.js";
// import buttonStart from "../buttonStart/buttonStart.js";
import playGame from "../playGame/playGame.js";

const setEventListeners = (board) => {
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
    playGame(board);
  });
};

export default setEventListeners;
