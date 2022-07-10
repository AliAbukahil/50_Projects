const canvas = document.getElementById("drawing-canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const strokeThickness = document.getElementById("size");
const colorBtn = document.getElementById("color");
const clearBtn = document.getElementById("clear");

/*

****************HTMLCanvasElement.getContext()************

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext

*************CanvasRenderingContext2D***************

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

*/

const ctx = canvas.getContext("2d");

console.log(ctx);

let size = 10;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;

  console.log(e);
});

canvas.addEventListener("mouseup", function (e) {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", function (e) {
  if (isPressed === true) {
    const axisX = e.offsetX;
    const axisY = e.offsetY;

    drawCircle(axisX, axisY);
    drawLine(x, y, axisX, axisY);
    x = axisX;
    y = axisY;
  }
});

// Drawing lines
function drawLine(startPointX, startPointY, endPointX, endPointY) {
  ctx.beginPath();
  ctx.moveTo(startPointX, startPointY);
  ctx.lineTo(endPointX, endPointY);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Drawing circles
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Increase Btn
increaseBtn.addEventListener("click", function () {
  size += 1;

  if (size > 50) size = 50;
  updateSize();
});

// Decrease Btn
decreaseBtn.addEventListener("click", function () {
  size -= 1;

  if (size < 1) size = 1;
  updateSize();
});

// Color Btn
colorBtn.addEventListener("change", function (e) {
  color = e.target.value;

  console.log(e.target.value);
  console.log(color);
});

// clear Btn
clearBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Updating the Stroke width Dynamically

function updateSize() {
  strokeThickness.innerText = size;
}
