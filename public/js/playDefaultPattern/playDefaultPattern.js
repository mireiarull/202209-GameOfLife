import initialSetup from "../initialSetup/initialSetup.js";
import playGame from "../playGame/playGame.js";

const playDefaultPattern = (board) => {
  let playBoard = board;
  let myInterval;

  document
    .querySelector(".game-control__action--play")
    .addEventListener("click", () => {
      myInterval = setInterval(() => {
        playGame(board);
      }, 500);
    });

  document
    .querySelector(".game-control__forward")
    .addEventListener("click", () => {
      clearInterval(myInterval);
      playGame(playBoard);
    });

  document
    .querySelector(".game-control__reset")
    .addEventListener("click", () => {
      clearInterval(myInterval);
      playBoard = initialSetup("default");
      playGame(playBoard);
    });
};

export default playDefaultPattern;
