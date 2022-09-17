const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

const FPS = 60;
let radius = 50;
let xP, yP; // x and y Axis position
let xV, yV; // x and y Axis Velocity

xP = canvasEl.width / 2;
yP = canvasEl.height / 2;

xV = Math.floor(Math.random() * 201 + 99) / FPS;
yV = Math.floor(Math.random() * 201 + 99) / FPS;

// coin toss situation
if (Math.floor(Math.random() * 2) === 0) {
  xV = -xV;
}

if (Math.floor(Math.random() * 2) === 0) {
  yV = -yV;
}

// The Game Loop
function runGame() {
  // Moving the ball from its current position
  xP += xV;
  yP += yV;

  // clearing the canvas
  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

  // Drawing the ball
  canvasContext.beginPath();
  canvasContext.fillStyle = "orangered";
  //canvasContext.strokeStyle = "black";
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
  // canvasContext.stroke();
}

// set interval
setInterval(runGame, 1000 / FPS);
