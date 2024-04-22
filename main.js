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