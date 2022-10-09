const canvasEl = document.querySelector("canvas");
const conX = canvasEl.getContext("2d");

canvasEl.height = 400;
canvasEl.width = 400;

// Game Parameter
let speed = 7;
let tileCount = 20;
let snakeHeadX = 10;
let snakeHeadY = 10;
let xV = 0;
let yV = 0;
let snackX = 5;
let snackY = 5;
let snakeTailLength = 2;
let score = 0;

// derived Dimension
let tileSize = canvasEl.width / tileCount;

//----------------------------------- Arrow keys Event Listener
document.addEventListener("keydown", keyDown);

// ------------------------------------- The Game Loop
function playGame() {
  changeSnakePosition();
  clearScreen();
  drawSnake();

  setTimeout(playGame, 1000 / speed);
}

// --------------------------------------------- clearScreen Function
function clearScreen() {
  conX.fillStyle = "black";
  conX.fillRect(0, 0, canvasEl.width, canvasEl.height);
}

// ---------------------------------------- drawSnake Function
function drawSnake() {
  conX.fillStyle = "green";
  conX.fillRect(
    snakeHeadX * tileCount,
    snakeHeadY * tileCount,
    tileSize,
    tileSize
  );
}

// ----------------------------------- changeSnakePosition Function
function changeSnakePosition() {
  snakeHeadX = snakeHeadX + xV;
  snakeHeadY = snakeHeadY + yV;
}

// --------------------------------------------- keyDown Function
function keyDown(e) {
  // moving up
  if (e.keyCode === 38) {
    if (yV === 1) return;
    yV = -1;
    xV = 0;
  }

  // moving down
  if (e.keyCode === 40) {
    if (yV === -1) return;
    yV = 1;
    xV = 0;
  }

  // moving left
  if (e.keyCode === 37) {
    if (xV === 1) return;
    xV = -1;
    yV = 0;
  }
  // moving right
  if (e.keyCode === 39) {
    if (xV === -1) return;
    xV = 1;
    yV = 0;
  }
}

playGame();
