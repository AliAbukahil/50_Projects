const canvasEl = document.querySelector("canvas");
// Getting Context of canvas Element
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 600;

// Drawing on the Canvas Element
canvasContext.fillStyle = "white";
canvasContext.fillRect(100, 200, 50, 50);
canvasContext.fillStyle = "rgba(214,200,167,0.5)";
canvasContext.fillRect(100, 100, 50, 50);
canvasContext.fillRect(150, 150, 50, 50);
canvasContext.fillRect(200, 200, 50, 50);
canvasContext.fillRect(250, 250, 50, 50);
canvasContext.fillRect(300, 300, 50, 50);
canvasContext.fillRect(350, 350, 50, 50);
canvasContext.fillRect(400, 400, 50, 50);
canvasContext.fillRect(450, 450, 50, 50);
canvasContext.fillRect(500, 500, 50, 50);
canvasContext.fillRect(550, 550, 50, 50);
