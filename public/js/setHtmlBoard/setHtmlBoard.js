const setHtmlBoard = () => {
  const htmlSection = document.querySelector(".game-grid");

  for (let i = 0; i < 1200; i++) {
    const elementDiv = document.createElement("div");
    elementDiv.className = `cell cell--${i}`;
    htmlSection.appendChild(elementDiv);
  }
};

export default setHtmlBoard;
