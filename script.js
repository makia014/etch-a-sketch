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

// create a function to add a colorful background
const colorize = (el) => {
  let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  el.style.backgroundColor = color;
};

// create a hover effect for the grid div elements
const setHoverEffect = (type) => {
  const divs = document.querySelectorAll(".square");
  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      switch (type) {
        case "color":
          colorize(e.target);
          break;
        default:
          colorGray(e.target);
      }
    });
  });
};

setHoverEffect();

// create a colorful effect
const colorBtn = document.querySelector(".color");
colorBtn.addEventListener("click", (e) => {
  setHoverEffect(e.target.textContent);
});
