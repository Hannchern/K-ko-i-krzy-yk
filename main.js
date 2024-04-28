const start = document.querySelector(".start");
const names = document.querySelector(".names");
const board = document.querySelector(".board");
const result = document.querySelector(".result");
const current_user_name = document.querySelector(".current_user_name");

const u1 = document.querySelector(".user1");
const u2 = document.querySelector(".user2");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

let user1_name;
let user2_name;

const get_user1_name = () => {
    user1_name = u1.value;
};

const get_user2_name = () => {
    user2_name = u2.value;
};

const go_to_names = () => {
    names.style.display = "flex";
    start.style.display = "none";
};

const go_to_board = () => {
    get_user1_name();
    get_user2_name();
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

const cells = document.querySelectorAll(".field");
let currentPlayer = "X";
let data_board = ["", "", "", "", "", "", "", "", ""];

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
        if (data_board[a] && data_board[a] === data_board[b] && data_board[a] === data_board[c]) {
            return true;
        }
    }

    return false;
};

const updateCurrentPlayerDisplay = () => {
    current_user_name.textContent = currentPlayer === "X" ? user1_name : user2_name;
};

const handleClick = (index) => {
    if (data_board[index] !== "" || checkWinner()) return;

    data_board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWinner()) {
        alert(`Player ${currentPlayer === "X" ? user1_name : user2_name} wins!`);
        go_to_result();
    } else if (!data_board.includes("")) {
        alert("It's a draw!");
        go_to_result();
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateCurrentPlayerDisplay();
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleClick(index));
});

updateCurrentPlayerDisplay();

btn1.addEventListener("click", go_to_names);
btn2.addEventListener("click", go_to_board);
btn3.addEventListener("click", go_to_result);
btn4.addEventListener("click", go_to_start);
