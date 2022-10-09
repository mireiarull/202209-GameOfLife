import initialSetup from "../initialSetup/initialSetup.js";

const gameOfLife = () => {
  const modal = document.querySelector(".modal");

  document.querySelector(".button__custom").addEventListener("click", () => {
    modal.style.display = "none";
    initialSetup("custom");
  });

  document.querySelector(".button__default").addEventListener("click", () => {
    modal.style.display = "none";
    initialSetup("default");
  });
};

export default gameOfLife;
