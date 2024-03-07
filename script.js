// create a grid of squares
const grid = document.querySelector(".squares");
const n = 16;
i = 0;
const numberOfSquares = n * n;
while (i <= numberOfSquares) {
  const row = document.createElement("div");
  row.classList.add("row", "flex");
  for (let j = 0; j < n; j++) {
    let div = document.createElement("div");
    div.classList.add("square");
    row.appendChild(div);
  }
  grid.appendChild(row);
  i += n;
}

// create a function to add a gray background color
const colorGray = (el) => {
  el.classList.add("gray");
};

// create a hover effect for the grid div elements
const divs = document.querySelectorAll(".square");
divs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    colorGray(e.target);
  });
});
