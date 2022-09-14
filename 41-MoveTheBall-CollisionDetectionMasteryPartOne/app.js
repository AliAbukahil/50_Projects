const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 800;

let xP = 400;
let yP = 300;
let radius = 50;
let speed = 10;

// Running the Game ––> the Game loop
function runGame() {
  requestAnimationFrame(runGame);

  drawBall();
}

// Drawing the Ball
function drawBall() {
  canvasContext.fillStyle = "white";
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

runGame();
