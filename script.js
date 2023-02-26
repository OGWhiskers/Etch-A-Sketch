//DEFINE ELEMENTS:

let container = document.querySelector(".grid-container");
const gridChoice = document.querySelector(".pop-up");
const eraser = document.querySelector(".eraser");
const activate = document.querySelector(".active");
const reset = document.querySelector(".reset");

// Prompt()
let gridSize;

// Create divs

function removeDivs() {
  for (let i = 0; i < gridSize; i++) {
    let div = document.querySelectorAll(".item");
    let div2 = Array.prototype.slice.call(div);
    div2 = [];
  }
}

function createDivs() {
  function getGridSize() {
    let div;
    let div2;

    function removeDivs() {
      div = document.querySelectorAll(".item");
      div2 = Array.prototype.slice.call(div);
      div2 = [];
    }

    gridSize = Number(prompt("Choose grid size per size"));

    if (typeof div === `undefined`) {
      for (let i = 0; i < gridSize; i++) {
        removeDivs();
        div = document.createElement("div");
        div.classList.add(`div-${i}`);
        div.classList.add(`item`);
        container.appendChild(div);
      }
    }
  }

  gridChoice.addEventListener("click", getGridSize);
}
createDivs();

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

// Trying to create pop-up that ask for user to enter num of square per side. Then the existing grid is removed and a new grid is generated in the same total space(Meaninng the squares themselves will increase depending on available space). User max is 100

// 1) Create button for user to use prompt ###########
// 2) Convert input into number ############
// 3) Create function to generate grid ########
// 4) Use input from user as para for function
// 5) Remove existing grid and add new gird
// 6) Make squares fill up grid container
// 7) User input max is 100 ###########
