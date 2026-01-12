const board = document.getElementById("board");

const rows = 10;
const cols = 20;

for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
}
