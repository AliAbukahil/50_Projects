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

let timeEnd;

// MouseEvent Listener
canvasEl.addEventListener("mousemove", highlightGrid);

// click El
canvasEl.addEventListener("click", click);

// -----------------------THE Game Loop ------------------------
function playGame() {
  requestAnimationFrame(playGame);

  drawBoard();
  drawSquares();
  drawGrid();
  // drawScores();
}

// -----------------------Click Function ------------------------
function click(e) {
  if (timeEnd > 0) {
    return;
  }

  selectSide();
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

// -----------------------highlightGrid Function ------------------------
function highlightGrid(e) {
  if (timeEnd > 0) {
    return;
  }

  // get mouse position relative to canvas
  let x = e.clientX - canvasRect.left;
  let y = e.clientY - canvasRect.top;

  // hihgloight the square's side
  highlightSide(x, y);
}

// ---------------------------------highlightSide Function *-*-*-*-*-*
function highlightSide(x, y) {
  // clear [reviuos highlighting
  for (let row of squares) {
    for (let square of row) {
      square.highlight = null;
    }
  }

  let rows = squares.length;
  let cols = squares[0].length;

  currentCells = [];

  OUTER: for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (squares[i][j].contains(x, y)) {
        let side = squares[i][j].highlightSide(x, y);

        if (side != null) {
          currentCells.push({ row: i, col: j });
        }

        // determine the neighbour
        let row = i,
          col = j,
          highlight,
          neighbour = true;

        if (side == Side.LEFT && j > 0) {
          // from the neighbours perspective
          col = j - 1;
          highlight = Side.RIGHT;
        } else if (side == Side.RIGHT && j < cols - 1) {
          // from the neighbours perspective
          col = j + 1;
          highlight = Side.LEFT;
        } else if (side == Side.TOP && i > 0) {
          // from the neighbours perspective
          row = i - 1;
          highlight = Side.BOTTOM;
        } else if (side == Side.BOTTOM && i < rows - 1) {
          // from the neighbours perspective
          row = i + 1;
          highlight = Side.TOP;
        } else {
          neighbour = false;
        }

        // highlighting the nieghbour
        if (neighbour) {
          squares[row][col].highlight = highlight;
          currentCells.push({ row: row, col: col });
        }

        break OUTER;
      }
    }
  }
}

// -----------------------newGame Function ------------------------
function newGame() {
  currentCells = [];

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

// ---------------------------------selectSide Function *-*-*-*-*-*
function selectSide() {
  if (currentCells == null || currentCells.length == 0) {
    return;
  }

  // select side
  let filledSquare = false;
  for (let cell of currentCells) {
    if (squares[cell.row][cell.col].selectSide()) {
      filledSquare = true;
    }
  }
  currentCells = [];

  if (filledSquare) {
    // handle game over
    if (scoreRI + scoreAI == GRID_SIZE * GRID_SIZE) {
      timeEnd = Math.ceil(DELAY_END * FPS);
    }
  } else {
    // switch the player
    playersTurn = !playersTurn;
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

  contains = (x, y) => {
    return x >= this.left && x < this.right && y >= this.top && y < this.bottom;
  };

  drawFill = () => {
    if (this.owner == null) {
      return;
    }
  };

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
    // --------------------------
    if (this.sideBottom.selected) {
      this.drawSide(Side.BOTTOM, getColor(this.sideBottom.owner, false));
    }

    if (this.sideLeft.selected) {
      this.drawSide(Side.LEFT, getColor(this.sideLeft.owner, false));
    }

    if (this.sideRight.selected) {
      this.drawSide(Side.RIGHT, getColor(this.sideRight.owner, false));
    }

    if (this.sideTop.selected) {
      this.drawSide(Side.TOP, getColor(this.sideTop.owner, false));
    }
  };

  highlightSide = (x, y) => {
    let distBottom = this.bottom - y;
    let distLeft = x - this.left;
    let distRight = this.right - x;
    let distTop = this.top;

    let distClosest = Math.min(distBottom, distLeft, distRight, distTop);

    if (distClosest == distBottom && !this.sideBottom.selected) {
      this.highlight = Side.BOTTOM;
    } else if (distClosest == distLeft && !this.sideLeft.selected) {
      this.highlight = Side.LEFT;
    } else if (distClosest == distRight && !this.sideRight.selected) {
      this.highlight = Side.RIGHT;
    } else if (distClosest == distTop && !this.sideTop.selected) {
      this.highlight = Side.TOP;
    }

    return this.highlight;
  };

  selectSide = () => {
    if (this.highlight == null) {
      return;
    }

    // select the highlighted side
    switch (this.highlight) {
      case Side.BOTTOM:
        this.sideBottom.owner = playersTurn;
        this.sideBottom.selected = true;
        break;

      case Side.LEFT:
        this.sideLeft.owner = playersTurn;
        this.sideLeft.selected = true;
        break;

      case Side.RIGHT:
        this.sideRight.owner = playersTurn;
        this.sideRight.selected = true;
        break;

      case Side.TOP:
        this.sideTop.owner = playersTurn;
        this.sideTop.selected = true;
        break;
    }

    this.highlight = null;

    this.numSelected++;
    if (this.numSelected == 4) {
      this.owner = playersTurn;

      // handle score
      if (playersTurn) {
        scoreRI++;
      } else {
        scoreAI++;
      }

      return true;
    }

    return false;
  };
}

newGame();
playGame();
