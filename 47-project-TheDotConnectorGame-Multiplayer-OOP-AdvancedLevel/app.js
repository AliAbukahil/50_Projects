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

// Side Object
const Side = {
  BOTTOM: 0,
  LEFT: 1,
  RIGHT: 2,
  TOP: 3,
};

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

// Game Variables
let currentCells, playersTurn, squares;

// -----------------------THE Game Loop ------------------------
function playGame() {
  requestAnimationFrame(playGame);

  drawBoard();
  drawSquares();

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

// -----------------------drawLine Function ------------------------
function drawLine(x0, y0, x1, y1, color) {
  conX.strokeStyle = color;
  conX.beginPath();
  conX.moveTo(x0, y0);
  conX.lineTo(x1, y1);
  conX.stroke();
}

// -----------------------drawSquares Function ------------------------
function drawSquares() {
  for (let row of squares) {
    for (let Square of row) {
      Square.drawSides();
      Square.drawFill();
    }
  }
}

// -----------------------getColor Function ------------------------
function getColor(player, light) {
  if (player) {
    return light ? COLOR_PLAYER_LIGHT : COLOR_PLAYER;
  } else {
    return light ? COLOR_PLAYER_LIGHT : COLOR_AI;
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

// -----------------------highlightSide Function ------------------------
// function highlightSide(x,y) {

// }

// -----------------------newGame Function ------------------------
function newGame() {
  playersTurn = Math.random() >= 0.5;

  // set up the Squares array
  squares = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    squares[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      squares[i][j] = new Square(getGridX(j), getGridY(i), CELL, CELL);
    }
  }
}

// The Square Class
class Square {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.bottom = y + h;
    this.left = x;
    this.right = x + w;
    this.top = y;
    this.highlight = null;
    this.numSelected = 0;
    this.sideBottom = { owner: null, selected: false };
    this.sideLeft = { owner: null, selected: false };
    this.sideRight = { owner: null, selected: false };
    this.sideTop = { owner: null, selected: false };
  }

  drawSide = (side, color) => {
    switch (side) {
      case side.BOTTOM:
        drawLine(this.left, this.bottom, this.right, this.bottom, color);
        break;

      case side.LEFT:
        drawLine(this.left, this.top, this.left, this.bottom, color);
        break;

      case side.RIGHT:
        drawLine(this.right, this.top, this.right, this.bottom, color);
        break;

      case side.TOP:
        drawLine(this.left, this.top, this.right, this.top, color);
        break;

      default:
        break;
    }
  };

  drawSides = () => {
    // Highlighting
    if (this.highlight != null) {
      this.drawSide(this.highlight, getColor(playersTurn, true));
    }
  };

  highlightSide = (x, y) => {
    let distBottom = this.bottom - y;
    let distLeft = x - this.left;
    let distRight = this.right - x;
    let distTop = this.top;

    let distClosest = Math.min(distBottom, distLeft, distRight, distTop);

    if(distClosest == distBottom && !this.sideBottom.selected ) {
      this.highlight = Side.BOTTOM
    } else if(distClosest == distLeft && !this.sideLeft.selected ) {
      this.highlight = Side.LEFT
  }else if(distClosest == distRight && !this.sideRight.selected ) {
      this.highlight = Side.RIGHT
  }else if(distClosest == distTop && !this.sideTop.selected ) {
      this.highlight = Side.TOP
  };

  return this.highlight
}

newGame();
playGame();
