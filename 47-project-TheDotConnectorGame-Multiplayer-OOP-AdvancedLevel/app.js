// game Parameters
const HEIGHT = 750;
const GRID_SIZE = 10;
const FPS = 60;
const DELAY_END = 2;

// Derived Dimensions
const WIDTH = HEIGHT * 0.9;
const CELL = WIDTH / (GRID_SIZE + 2);
const STROKE = CELL / 12;
const DOT = STROKE;
const MARGIN = HEIGHT - (GRID_SIZE + 1) * CELL;

// Colors
const COLOR_BRAND = "#0f3057";
const COLOR_BORDER = "yellow";
const COLOR_DOT = "white";
const COLOR_AI = "orange";
const COLOR_AI_LIGHT = "rgba(255, 166, 0 , 0.3)";
const COLOR_PLAYER = "orange";
const COLOR_PLAYER_LIGHT = "rgba(126, 252, 0 , 0.3)";
const COLOR_TIE = "white";

// canvas implementation
let canvasEl = document.createElement("canvas");
canvasEl.height = HEIGHT;
canvasEl.width = WIDTH;
document.body.appendChild(canvasEl);
let canvasRect = canvasEl.getBoundingClientRect();

// Context
const conX = canvasEl.getContext("2d");
conX.lineWidth = STROKE;
conX.textAlign = "center";
conX.textBaseline = "middle";

// -----------------------THE Game Loop ------------------------
function playGame() {
  requestAnimationFrame(playGame);

  drawBoard();
  drawGrid();
}

// -----------------------drawBoard Function ------------------------
function drawBoard(params) {
  conX.fillStyle = COLOR_BRAND;
  conX.strokeStyle = COLOR_BORDER;
  conX.fillRect(0, 0, WIDTH, HEIGHT);
  conX.strokeRect(
    STROKE / 4,
    STROKE / 4,
    WIDTH - STROKE / 2,
    HEIGHT - STROKE / 2
  );
}

// -----------------------drawDot Function ------------------------
function drawDot(x, y) {
  conX.fillStyle = COLOR_DOT;
  conX.beginPath();
  conX.arc(x, y, DOT, 0, Math.PI * 2);
  conX.fill();
}

// -----------------------drawGrid Function ------------------------
function drawGrid() {
  // i is for Y Axis
  for (let i = 0; i < GRID_SIZE + 1; i++) {
    // j for X Axis
    for (let j = 0; j < GRID_SIZE + 1; j++) {
      drawDot(getGridX(j), getGridY(i));
    }
  }
}

// -----------------------getGridX Function ------------------------
function getGridX(col) {
  return CELL * (col + 1);
}

// -----------------------getGridY Function ------------------------
function getGridY(row) {
  return MARGIN + CELL * row;
}

// The Square Class
class Square {
  constructor() {}
}

playGame();
