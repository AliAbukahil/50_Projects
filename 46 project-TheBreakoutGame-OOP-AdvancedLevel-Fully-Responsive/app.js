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

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* Resize Window Event *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
window.addEventListener("resize", setDimensions);

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* The Game Loop *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function playGame() {
  requestAnimationFrame(playGame);

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

// the Paddle class
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
