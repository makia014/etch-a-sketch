const grid = document.querySelector(".squares");
const n = 16;
i = 0;
numberOfSquares = n * n;
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
