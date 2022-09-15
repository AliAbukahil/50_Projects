const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 800;

let xP = 400;
let yP = 300;
let radius = 50;
let speed = 8;

// Arrow Directions Event Listeners
let upDir = false;
let downDir = false;
let leftDir = false;
let rightDir = false;

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// Running the Game ––> the Game loop
function runGame() {
  requestAnimationFrame(runGame);
  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
  arrowInputs();
  collisionDetection();
  drawBall();
}

// detecting the edges of the Canvas element // collision Detection
function collisionDetection() {
  // bottom boundary
  if (yP >= canvasEl.height - radius) {
    yP = canvasEl.height - radius;
  }

  // Top Boundary
  // if(yP + radius >)
}

// moving balls Function
function arrowInputs() {
  if (upDir) {
    yP = yP - speed;
  }

  if (downDir) {
    yP = yP + speed;
  }

  if (leftDir) {
    xP = xP - speed;
  }

  if (rightDir) {
    xP = xP + speed;
  }
}

// Drawing the Ball
function drawBall() {
  canvasContext.fillStyle = "white";
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

// Arrow Keys Function
function keyDown(e) {
  // keyCode 40 ArrowDown
  // keyCode 38 ArrowUp
  // keyCode 39 ArrowRight
  // kexCode 37 ArrowLeft
  // console.log(e);
  if (e.keyCode === 38) {
    upDir = true;
  }

  if (e.keyCode === 40) {
    downDir = true;
  }

  if (e.keyCode === 37) {
    leftDir = true;
  }

  if (e.keyCode === 39) {
    rightDir = true;
  }
}

function keyUp(e) {
  // keyCode 40 ArrowDown
  // keyCode 38 ArrowUp
  // keyCode 39 ArrowRight
  // kexCode 37 ArrowLeft
  // console.log(e);
  if (e.keyCode === 38) {
    upDir = false;
  }

  if (e.keyCode === 40) {
    downDir = false;
  }

  if (e.keyCode === 37) {
    leftDir = false;
  }

  if (e.keyCode === 39) {
    rightDir = false;
  }
}

runGame();
