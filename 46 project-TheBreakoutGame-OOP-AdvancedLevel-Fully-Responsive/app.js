// Game Parameters
const PADDLE_WIDTH = 0.1; // as a fraction of the screen width
const PADDLE_SPEED = 0.5; // fraction of screen width per second -> it will cross 50% of the
const BALL_SPEED = 0.45; // fraction of screen height per second
const BALL_SPIN = 0.2; // ball deflection of the paddle 0 == no spin, 1 == high spin
const WALL = 0.2; // wall-ball-paddle size as a fraction of the shortest screen dimension

// Colors
const COLOR_BG = "#e64980";
const COLOR_WALL = "grey";
const COLOR_PADDLE = "white";
const COLOR_BALL = "black";

// Directions
const DIRECTIONS = {
  LEFT: 0,
  RIGHT: 1,
  STOP: 2,
};

// Setting up the canvas and context
let canvasEl = document.createElement("canvas");
document.body.appendChild(canvasEl);
const ConX = canvasEl.getContext("2d");

// DIMENSIONS
let width, height, wall;

// initializing the paddle, ball classes
let paddle, ball, touchX; // touch location

// Arrow keys Events
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* Resize Window Event *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
window.addEventListener("resize", setDimensions);

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* The Game Loop *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function playGame() {
  requestAnimationFrame(playGame);

  // update Functions
  updatePaddle();
  // draw Functions
  drawBackground();
  drawWalls();
  drawPaddle();
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* DrawBackground Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function drawBackground() {
  ConX.fillStyle = COLOR_BG;
  ConX.fillRect(0, 0, canvasEl.width, canvasEl.height);
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* DrawPaddle Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function drawPaddle() {
  ConX.fillStyle = COLOR_PADDLE;
  ConX.fillRect(
    paddle.x - paddle.w * 0.5,
    paddle.y - paddle.height / 2,
    paddle.w,
    paddle.h
  );
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* ArrowKeys Functions *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function keyDown(e) {
  switch (e.keyCode) {
    case 37: // left arrow -> move arrow to left
      movePaddle(DIRECTIONS.LEFT);
      break;
    case 39: // Right arrow -> move paddle to Right
      movePaddle(DIRECTIONS.RIGHT);
      break;
  }
}

function keyUp(e) {
  switch (e.keyCode) {
    case 37:
    case 39:
      movePaddle(DIRECTIONS.STOP);
      break;
  }
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* MovePaddle Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function movePaddle(direction) {
  switch (direction) {
    case DIRECTIONS.LEFT:
      paddle.xV = -paddle.speed;
      break;
    case DIRECTIONS.RIGHT:
      paddle.xV = paddle.speed;
      break;
    case DIRECTIONS.STOP:
      paddle.xV = 0;
      break;
  }
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* DrawWalls Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function drawWalls() {
  let halfWall = wall * 0.5;
  ConX.lineWidth = wall;
  ConX.strokeStyle = COLOR_WALL;
  ConX.beginPath();
  ConX.moveTo(halfWall, height);
  ConX.lineTo(halfWall, halfWall);
  ConX.lineTo(width - halfWall, halfWall);
  ConX.lineTo(width - halfWall, height);
  ConX.stroke();
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* newGame Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //

function newGame() {
  paddle = new Paddle(PADDLE_WIDTH, wall, PADDLE_SPEED);
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* setDimensions Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function setDimensions() {
  height = window.innerHeight;
  width = window.innerWidth;
  wall = WALL * (height < width ? height : width);
  canvasEl.width = width;
  canvasEl.height = height;
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* updatePaddle class  *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* //
function updatePaddle() {
  // move the paddle
  // let lastPaddleX = paddle.x;
  paddle.x += (paddle.xV / 1000) * 20;

  // wall collision detection for paddle

  if (paddle.x < wall + paddle.w / 2) {
    paddle.x = wall + paddle.w / 2;
  } else if (paddle.x > canvasEl.width - wall - paddle.w / 2) {
    paddle.x = canvasEl.width - wall - paddle.w / 2;
  }
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* the Paddle class  *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* //
class Paddle {
  constructor(paddleWidth, paddleHeight, paddleSpeed) {
    this.w = paddleWidth * width;
    this.h = paddleHeight / 2;
    this.x = canvasEl.width / 2;
    this.y = canvasEl.height - this.h * 3;
    this.speed = paddleSpeed * width;
    this.xV = 0;
  }
}

setDimensions();
newGame();
playGame();
