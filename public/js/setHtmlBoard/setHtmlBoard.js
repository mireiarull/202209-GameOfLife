const setHtmlBoard = () => {
  const htmlSection = document.querySelector(".game-grid");
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 50; j++) {
      const elementDiv = document.createElement("div");
      elementDiv.className = `cell cell--${i}-${j}`;
      htmlSection.appendChild(elementDiv);
    }
  }
};

export default setHtmlBoard;
