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

// snake body Array
const snakeBody = [];

//----------------------------------- Arrow keys Event Listener
document.addEventListener("keydown", keyDown);

// ------------------------------------- The Game Loop
function playGame() {
  changeSnakePosition();
  clearScreen();
  snackColiDete();
  drawSnack();
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
  conX.fillStyle = "orange";
  for (let i = 0; i < snakeBody.length; i++) {
    let part = snakeBody[i];
    conX.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeBody.push(new SnakeBody(snakeHeadX, snakeHeadY));

  if (snakeBody.length > snakeTailLength) {
    snakeBody.shift();
  }

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

// ----------------------------------- drawSnack Function

function drawSnack() {
  conX.fillStyle = "red";
  conX.fillRect(snackX * tileCount, snackY * tileCount, tileSize, tileSize);
}

// --------------------------- snackColiDete function

function snackColiDete() {
  if (snackX === snakeHeadX && snackY === snakeHeadY) {
    snackX = Math.floor(Math.random() * tileCount);
    snackY = Math.floor(Math.random() * tileCount);
    snakeTailLength++;
    score++;
    speed++;
    eatSnack.play();
  }
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

// ---------------------------The SnakeBody Class
class SnakeBody {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

playGame();
