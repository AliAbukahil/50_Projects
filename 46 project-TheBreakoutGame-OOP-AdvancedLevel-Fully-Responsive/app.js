// Game Parameters
const PADDLE_WIDTH = 0.1; // as a fraction of the screen width
const PADDLE_SPEED = 0.5; // fraction of screen width per second -> it will cross 50% of the
const BALL_SPEED = 0.45; // fraction of screen height per second
const BALL_SPIN = 0.2; // ball deflection of the paddle 0 == no spin, 1 == high spin
const WALL = 0.2; // wall-ball-paddle size as a fraction of the shortest screen dimension
const MIN_BOUNCE_ANGLE = 30; // min bounce angle from the horizontal in degrees

// Colors
const COLOR_BG = "black";
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
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* Resize Window Event *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
window.addEventListener("resize", setDimensions);

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* The Game Loop *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function playGame() {
  requestAnimationFrame(playGame);

  // update Functions
  updatePaddle();
  updateBall();
  // draw Functions
  drawBackground();
  drawWalls();
  drawPaddle();
  drawBall();
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*applyBallSpeed Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function applyBallSpeed(angle) {
  ball.xV = ball.speed * Math.cos(angle);
  ball.yV = -ball.speed * Math.sin(angle);
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* DrawBackground Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function drawBackground() {
  ConX.fillStyle = COLOR_BG;
  ConX.fillRect(0, 0, canvasEl.width, canvasEl.height);
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* drawBall Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function drawBall() {
  ConX.fillStyle = COLOR_BALL;
  ConX.fillRect(ball.x - ball.w / 2, ball.y - ball.h / 2, ball.w, ball.h);
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* updateBall Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function updateBall() {
  // Move the Ball
  ball.x += (ball.xV / 1000) * 55;
  ball.y += (ball.yV / 1000) * 55;

  // Bouncing the Ball of the walls
  if (ball.x < wall + ball.w / 2) {
    ball.x = wall + ball.w / 2;
    ball.xV = -ball.xV;
    // spinBall();
  } else if (ball.x > canvasEl.width - wall - ball.w / 2) {
    ball.x = canvasEl.width - wall - ball.w / 2;
    ball.xV = -ball.xV;
    // spinBall();
  } else if (ball.y < wall + ball.h / 2) {
    ball.y = wall + ball.h / 2;
    ball.yV = -ball.yV;
    // spinBall();
  }

  // Bouncing the ball of the paddle
  if (
    ball.y > paddle.y - paddle.h * 0.5 - ball.h * 0.5 &&
    ball.y < paddle.y + paddle.h * 0.5 &&
    ball.x > paddle.x - paddle.w * 0.5 - ball.w * 0.5 &&
    ball.x < paddle.x + paddle.w * 0.5 + ball.w * 0.5
  ) {
    ball.y = paddle.y + paddle.h * 0.5 + ball.h * 0.5;
    ball.yV = -ball.yV;
  }
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* DrawPaddle Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function drawPaddle() {
  // ConX.fillStyle = pupSticky ? PupType.STICKY.color : COLOR_PADDLE;
  ConX.fillRect(
    paddle.x - paddle.w * 0.5,
    paddle.y - paddle.h / 2,
    paddle.w,
    paddle.h
  );
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* ArrowKeys Functions *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function keyDown(e) {
  switch (e.keyCode) {
    case 32: // space key => to serve the ball
      serveBall();
      break;
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
  ball = new Ball(wall, BALL_SPEED);
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* serveBall Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function serveBall() {
  if (ball.yV !== 0) {
    return false;
  }

  let minBounceAngle = (MIN_BOUNCE_ANGLE / 180) * Math.PI; // radians
  let range = Math.PI - minBounceAngle * 2;
  let angle = Math.random() * range + minBounceAngle;
  applyBallSpeed(angle);
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

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* the Ball class  *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* //
class Ball {
  constructor(ballSize, ballSpeed) {
    this.w = ballSize;
    this.h = ballSize;
    this.x = paddle.x;
    this.y = paddle.y - paddle.h / 2 - this.h / 2;
    this.speed = ballSpeed * height;
    this.xV = 0;
    this.yv = 0;
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
