let container = document.querySelector(".grid-container");

for (let i = 1; i < 257; i++) {
  let div = document.createElement("div");
  div.classList.add(`div-${i}`);
  div.classList.add(`item`);
  container.appendChild(div);
}

console.log(container);
