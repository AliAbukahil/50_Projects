const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

// ------------------ Drawing Lines
canvasContext.beginPath();
canvasContext.moveTo(250, 250); // 250 x Axis, y Axis
canvasContext.lineTo(400, 350); // x Axis, y Axis
canvasContext.lineTo(600, 150); // x Axis, y Axis
canvasContext.lineTo(700, 450); // x Axis, y Axis
canvasContext.lineTo(1000, 50); // x Axis, y Axis
canvasContext.lineTo(1500, 250); // x Axis, y Axis
canvasContext.lineTo(1500, 650); // x Axis, y Axis
canvasContext.lineTo(250, 650); // x Axis, y Axis
canvasContext.lineTo(250, 250); // x Axis, y Axis
canvasContext.strokeStyle = "white";
canvasContext.stroke();

// ------------------ Drawing Arcs
// https://mathsisfun.com/geometry/radians.html
canvasContext.beginPath();
canvasContext.arc(750, 350, 50, 0, Math.PI); // x,y,radius,
canvasContext.stroke();

// ------------------ Drawing Circles

canvasContext.beginPath();
canvasContext.arc(1200, 200, 50, 0, Math.PI * 2); // x,y,radius,
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(200, 300, 50, 0, Math.PI * 2); // x,y,radius,
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(400, 400, 50, 0, Math.PI * 2); // x,y,radius,
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(600, 500, 50, 0, Math.PI * 2); // x,y,radius,
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(800, 600, 50, 0, Math.PI * 2); // x,y,radius,
canvasContext.stroke();
