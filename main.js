const start = document.querySelector(".start");
const names = document.querySelector(".names");
const board = document.querySelector(".board");
const result = document.querySelector(".result");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

const go_to_names = () => {
    names.style.display = "flex";
    start.style.display = "none";
};

const go_to_board = () => {
    board.style.display = "flex";
    names.style.display = "none";
};

const go_to_result = () => {
    result.style.display = "flex";
    board.style.display = "none";
};

const go_to_start = () => {
    start.style.display = "flex";
    result.style.display = "none";
};

btn1.addEventListener("click", go_to_names);
btn2.addEventListener("click", go_to_board);
btn3.addEventListener("click", go_to_result);
btn4.addEventListener("click", go_to_start);

const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const checkWinner = () => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
};

const handleClick = (index) => {
    if (board[index] !== "" || checkWinner()) return;

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
    } else if (!board.includes("")) {
        alert("It's a draw!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleClick(index));
});
