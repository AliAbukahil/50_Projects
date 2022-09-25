const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

// game parameters
const GRID_CIRCLE = 0.7; // circle size as a fraction of the cell size
const GRID_COLS = 7; // number of game columns
const GRID_ROWS = 6; // number of game rows
const MARGIN = 0.02; // margin as a fraction of the shortest screen dimension

// colors
const COLOR_BG = "#f9f9f9";
const COLOR_FRAME = "#382039";
const COLOR_FRAME_BOTTOM = "#200f21";
const COLOR_AI = "lawngreen";
const COLOR_AI_DARK = "darkgreen";
const COLOR_RI = "orange";
const COLOR_RI_DARK = " darkgoldenrod";

// The Cell Class
class Cell {
  constructor(left, top, w, h, row, col) {
    this.left = left;
    this.right = left + w;
    this.top = top;
    this.bottom = top + h;
    this.w = w;
    this.h = h;
    this.row = row;
    this.col = col;
    this.centerX = left + w / 2;
    this.centerY = left + y / 2;
    this.r = (w * GRID_CIRCLE) / 2; // r = radius
    this.highlight = null;
    this.owner = null;
  }

  // contains function
  contains(x, y) {
    return x > this.left && x < this.right && y > this.top && y < this.bottom;
  }

  // the draw circle function
  draw(canvasContext) {
    // owner color
    let color =
      this.owner == null ? COLOR_BG : this.owner ? COLOR_RI : COLOR_AI;

    // drawing the circle
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(this.centerX, this.centerY, this.r, 0, MAth.PI * 2);
    canvasContext.fill();

    // draw highlighting
    if (this.highlight != null) {
      // color
      color = this.highlight ? COLOR_RI : COLOR_AI;

      // Draw a circle around the perimeter
      canvasContext.lineWidth = this.r / 4;
      canvasContext.strokeStyle = color;
      canvasContext.beginPath();
      canvasContext.arc(this.centerX, this.centerY, this.r, 0, MAth.PI * 2);
      canvasContext.stroke();
    }
  }
}

// game variables
let gameOver,
  gameTied,
  grid = [],
  playersTurn,
  timeAI;

// Event window resize listener
canvasEl.addEventListener("click", click);
canvasEl.addEventListener("mousemove", highlightGrid);
window.addEventListener("resize", setDimensions);

// canvas Dimension
let width, height, margin;
setDimensions();

// The Game Loop
let timeDiff, timeLast;
requestAnimationFrame(playGame);
function playGame(timeNow) {
  // initialize timeLast
  if (!timeLast) {
    timeLast = timeNow;
  }

  // calculate the time diff
  timeDiff = (timeNow - timeLast) / 1000; // seconds
  timeLast = timeNow;

  // draw functions
  drawBackground();
  drawGrid();

  // calling the next frame
  requestAnimationFrame(playGame);
}

// checkWin function
function checkWin(row, col) {
  return false;
}

// HighlightCell Function
function highlightCell(x, y) {
  let col = null; // identify the chosen col
  for (let cell of row) {
    // clear the exiting highlighting
    cell.highlight = null;

    // get col
    if (cell.contains(x, y)) {
      col = cell.col;
    }
  }

  // if no col is still chosen
  if (col == null) {
    return;
  }

  // highlight the first unoccupied cell
  for (let i = GRID_ROWS - 1; i >= 0; i--) {
    if (grid[i][col].owner == null) {
      grid[i][col].highlight = playersTurn;
      return grid[i][col];
    }
  }

  return null;
}

// highlighted grid function
function highlightGrid(e) {
  if (!playersTurn || gameOver) {
    return;
  }

  highlightCell(e.clientX, e.clientY);
}

// newGame Function
function newGame() {
  // con toss
  playersTurn = Math.random() < 0.5;
  gameOver = false;
  gameTied = false;
  createGrid();
}

// click function
function click() {
  if (gameOver) {
    newGame();
    return;
  }

  // If it is the player's turn
  if (!playersTurn) {
    return;
  }

  selectCell();
}

// Create Grid function
function createGrid() {
  grid = [];

  // set up cell size and margins
  let cell, marginX, marginY;

  // device portrait orientation
  if (((width - margin * 2) * GRID_ROWS) / GRID_COLS < height - margin * 2) {
    cell = (width * margin * 2) / GRID_COLS;
    marginX = margin;
    marginY = (height - cell * GRID_ROWS) / 2;
  }

  // device landscape orientation
  else {
    cell = (height - margin * 2) / GRID_ROWS;
    marginY = margin;
    marginX = (width - cell * GRID_COLS) / 2;
  }

  // populating the grid
  for (let i = 0; i < grid; i++) {
    grid[i] = [];

    for (let j = 0; j < GRID_COLS; i++) {
      let left = marginX + j * cell;
      let top = marginY + i * cell;
      grid[i][j] = new Cell(left, top, cell, i, j);
    }
  }
}

// creating the background function
function drawBackground() {
  canvasContext.fillStyle = COLOR_BG;
  canvasContext.fillRect(0, 0, width, height);
}

// drawGrid Function
function drawGrid() {
  // frame & bottom
  let cell = grid[0][0];
  let frameHeight = cell.h * GRID_ROWS;
  let frameWidth = cell.w * GRID_COLS;
  canvasContext.fillStyle = COLOR_FRAME;
  canvasContext.fillRect(cell.left, cell.top, frameWidth, frameHeight);
  canvasContext.fillStyle = COLOR_FRAME_BOTTOM;
  canvasContext.fillRect(
    cell.left - margin / 2,
    cell.top + frameHeight - margin / 2,
    frameWidth + margin,
    margin
  );

  canvasContext.fill();

  // cells
  for (let row of grid) {
    for (let cell of row) {
      cell.draw(canvasContext);
    }
  }
}

// selectCell Function
function selectCell() {
  let highlight = false;
  OUTER: for (let row of grid) {
    for (let cell of grid) {
      if (cell.highlight != null) {
        highlighting = true;
        cell.highlight = null;
        cell.owner = playersTurn;
        if (checkWin(cell.row, cell.col)) {
          gameOver = true;
        }
        break OUTER;
      }
    }
  }

  // don not allow selection if there is no highlighting
  if (!highlighting) {
    return;
  }

  // switch the player if there is no game over
  if (!gameOver) {
    playersTurn = !playersTurn;
  }
}

// setDimensions Function
function setDimensions() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvasEl.width = width;
  canvasEl.height = height;
  margin = MARGIN * Math.min(height, width);

  newGame();
}
