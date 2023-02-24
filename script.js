//DEFINE ELEMENTS:

let container = document.querySelector(".grid-container");
//const divNodeList = document.querySelectorAll(".item");

for (let i = 1; i < 257; i++) {
  let div = document.createElement("div");
  div.classList.add(`div-${i}`);
  div.classList.add(`item`);
  container.appendChild(div);
}
const divNodeList = document.querySelectorAll(".item");

for (let i = 0; i < divNodeList.length; i++) {
  divNodeList[i].addEventListener("mouseover", function hover() {
    divNodeList[i].classList.add("hover");
  });
}
