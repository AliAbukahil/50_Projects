const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = 1500;
canvasEl.height = 720;
// --------------------------------------------------------------------
let RIScore = new Audio();
let AIScore = new Audio();
let hit = new Audio();
let wall = new Audio();

hit.src = "sounds/hit.mp3";
wall.src = "sounds/wall.mp3";
AIScore.src = "sounds/AIScore.mp3";
RIScore.src = "sounds/RIScore.mp3";

// The RI Player Paddle
const playerPaddleRI = {
  xP: 0,
  yP: canvasEl.height / 2 - 100 / 2,
  height: 100,
  width: 10,
  color: "#82c91e",
  score: 0,
};

// The AI Player Paddle
const playerPaddleAI = {
  xP: canvasEl.width - 10,
  yP: canvasEl.height / 2 - 100 / 2,
  height: 100,
  width: 10,
  color: "#228be6",
  score: 0,
};

// Creating the ball
const ball = {
  xP: canvasEl.width / 2,
  yP: canvasEl.height / 2,
  radius: 10,
  speed: 7,
  xV: 5,
  yV: 5,
  color: "#343a40",
};

// Creating the Net
const net = {
  xP: canvasEl.width / 2 - 1,
  yP: 0,
  width: 2,
  height: 10,
  color: "white",
};

// Drawing the canvas
function drawRect(xP, yP, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(xP, yP, width, height);
}

// Drawing a circle // ball
function drawCircle(xP, yP, radius, color) {
  canvasContext.fillStyle = color;
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

// Drawing the Text
function drawText(content, xP, yP, color) {
  canvasContext.fillStyle = color;
  canvasContext.font = "35px sans-serif";
  canvasContext.fillText(content, xP, yP);
}

// drawing the net
function drawNet() {
  for (let i = 0; i < canvasEl.height; i += 15) {
    drawRect(net.xP, net.yP + i, net.width, net.height, net.color);
  }
}

// runGame Function AKA The Game Loop
function runGame() {
  // clearing the canvas
  drawRect(0, 0, canvasEl.width, canvasEl.height, "#f76707");

  // Draw net Function
  drawNet();

  // Draw Score Function
  drawText(
    playerPaddleRI.score,
    (1 * canvasEl.width) / 4,
    (1 * canvasEl.height) / 10,
    "white"
  );

  drawText(
    playerPaddleRI.score,
    (3 * canvasEl.width) / 4,
    (1 * canvasEl.height) / 10,
    "white"
  );

  // drawing the paddles for RI and AI
  drawRect(
    playerPaddleRI.xP,
    playerPaddleRI.yP,
    playerPaddleRI.width,
    playerPaddleRI.height,
    playerPaddleRI.color
  );

  drawRect(
    playerPaddleAI.xP,
    playerPaddleAI.yP,
    playerPaddleAI.width,
    playerPaddleAI.height,
    playerPaddleAI.color
  );

  // drawing the ball
  drawCircle(ball.xP, ball.yP, ball.radius, ball.color);
}

// The Game Initialization function
function gameInt() {
  runGame();
}

// Looping the game to keep it Running
const FPS = 60;
setInterval(gameInt, 1000 / FPS);
