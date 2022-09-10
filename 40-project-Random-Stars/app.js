const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const starsColor = "white";
const starsNumber = 1000;
const size = 0.005; // maximum star size as a fraction of the screen width
const speed = 0.05; // fraction of screen width per second

// Setting up the stars

//--------------------- The Game Loop
let timeDiff,
  timeLast = 0;

// the animation loop
function runStars(timeNow) {
  // calculate the frame difference
  timeDiff = timeNow - timeLast;
  timeLast = timeNow;
  requestAnimationFrame(runStars);
}

// setInterval(runStars, 1000 / 60);

// randomSign Function
function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}
