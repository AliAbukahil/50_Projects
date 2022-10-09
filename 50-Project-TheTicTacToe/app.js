const boxes = document.querySelectorAll(".box");
const boxesArray = Array.from(boxes);
console.log(boxesArray);
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btn");

// Game Parameter
const player1 = "O";
const player2 = "X";
let playersTurn = player1;

let choices = [];

drawBoard();

function drawBoard() {
  boxesArray.forEach((box, index) => {
    let border = "";

    if (index < 3) {
      border += "border-bottom: 2px solid white;";
    }

    if (index % 3 == 0) {
      border += "border-right: 2px solid white;";
    }

    if (index % 3 == 2) {
      border += "border-left: 2px solid white;";
    }

    if (index > 5) {
      border += "border-top: 2px solid white;";
    }

    box.style = border;
  });
}
