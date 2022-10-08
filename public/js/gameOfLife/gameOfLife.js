import eventListeners from "../eventListeners/eventListeners.js";
import initialSetup from "../initialSetup/initialSetup.js";

const gameOfLife = () => {
  const board = initialSetup();
  eventListeners(board);
};

export default gameOfLife;
