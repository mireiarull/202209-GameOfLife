import setEventListeners from "../eventListeners/setEventListeners.js";
import initialSetup from "../initialSetup/initialSetup.js";

const gameOfLife = () => {
  const board = initialSetup();
  setEventListeners(board);
};

export default gameOfLife;
