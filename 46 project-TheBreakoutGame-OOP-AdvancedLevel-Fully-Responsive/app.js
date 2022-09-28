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

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* Resize Window Event *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
window.addEventListener("resize", setDimensions);

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* The Game Loop *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function playGame() {
  requestAnimationFrame(playGame);
  drawBackground();
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* Draw Background Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function drawBackground() {
  ConX.fillStyle = COLOR_BG;
  ConX.fillRect(0, 0, canvasEl.width, canvasEl.height);
}

// *-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-* setDimensions Function *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*- //
function setDimensions() {
  height = window.innerHeight;
  width = window.innerWidth;
  wall = WALL * (height < width ? height : width);
  canvasEl.width = width;
  canvasEl.height = height;
}

setDimensions();
playGame();
