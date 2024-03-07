// create a grid of squares
const createGrid = (numberOfSquares) => {
  const grid = document.querySelector(".squares");

  // empty grid before creating new one
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }

  i = 0;

  totalSquares = numberOfSquares * numberOfSquares;
  while (i <= totalSquares) {
    const row = document.createElement("div");
    row.classList.add("row", "flex");
    for (let j = 0; j < numberOfSquares; j++) {
      let div = document.createElement("div");
      div.classList.add("square");
      row.appendChild(div);
    }
    grid.appendChild(row);
    i += numberOfSquares;
  }
};

// get number of squares per side for the grid;
const setGrid = () => {
  const setNumber = document.querySelector(".set");
  setNumber.addEventListener("click", () => {
    const n = parseInt(
      prompt("How many squares per side? (no more than 100 please)", "")
    );

    if (!n || n > 100 || n < 4) {
      createGrid(16);
      setHoverEffect();
    } else {
      createGrid(n);
      setHoverEffect();
    }
  });
};
createGrid(16);
setGrid();

// create a function to add a gray background color
const colorGray = (el) => {
  el.classList.add("gray");
};

// create a hover effect for the grid div elements
const setHoverEffect = () => {
  const divs = document.querySelectorAll(".square");
  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      colorGray(e.target);
    });
  });
};

setHoverEffect();
