//DEFINE ELEMENTS:

let container = document.querySelector(".grid-container");
const gridChoice = document.querySelector(".pop-up");
const eraser = document.querySelector(".eraser");
const activate = document.querySelector(".active");
const reset = document.querySelector(".reset");

// Prompt()
let gridSize;
let finalSize;

gridChoice.addEventListener("click", function () {
  gridSize = Number(prompt("Choose grid size per size"));
  finalSize = gridSize * gridSize;
});

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.classList.add(`div-${i}`);
  div.classList.add(`item`);
  container.appendChild(div);
}

const divNodeList = document.querySelectorAll(".item");

//Reset

reset.addEventListener("click", function () {
  for (let i = 0; i < divNodeList.length; i++) {
    divNodeList[i].classList.remove("hover");
  }
});

// Active:

activate.addEventListener("click", function () {
  for (let i = 0; i < divNodeList.length; i++) {
    divNodeList[i].addEventListener("mouseover", function hover() {
      divNodeList[i].classList.add("hover");
    });
  }
});

//Eraser:

eraser.addEventListener("click", function () {
  for (let i = 0; i < divNodeList.length; i++) {
    divNodeList[i].addEventListener("mouseover", function hover() {
      divNodeList[i].classList.remove("hover");
    });
  }
});
