const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

// RunBalls Class
class RunBalls {
  constructor(xP, yP, xV, yV, radius, red, green, blue) {
    this.xP = xP;
    this.yP = yP;
    this.xV = xV;
    this.yV = yV;
    this.radius = radius;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  // Drawing The Ball
  drawBalls() {
    canvasContext.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue}`;
    canvasContext.beginPath();
    canvasContext.arc(this.xP, this.yP, this.radius, 0, Math.PI * 2);
    canvasContext.fill();
  }

  // Collision detection on edges
  updateBalls() {
    // The Right side && left side
    if (this.xP + this.radius > canvasEl.width || this.xP - this.radius < 0) {
      this.xV = -this.xV;
    }

    if (this.yP + this.radius > canvasEl.height || this.yP - this.radius < 0) {
      this.yV = -this.yV;
    }

    this.xP += this.xV;
    this.yP += this.yV;
  }
}

// The Game Loop
function animateBalls() {
  requestAnimationFrame(animateBalls);
  canvasContext.clearRect(0, 0, canvasEl.width, canvasContext.height);
}

animateBalls();
