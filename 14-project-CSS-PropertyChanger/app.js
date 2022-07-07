const blockEl = document.querySelector("#block");
const verticalPosition = document.querySelector("#position-y");
const horizontalPosition = document.querySelector("#position-x");
const blockSize = document.querySelector("#size");
const shapeSelector = document.querySelector("#shape-select");
const okBtn = document.querySelector("#ok-btn");
console.log(shapeSelector);

// vertical Position changer
verticalPosition.addEventListener("change", function () {
  blockEl.style.top = verticalPosition.value + "px";
});

// Horizontal Position changer
horizontalPosition.addEventListener("change", function () {
  blockEl.style.left = horizontalPosition.value + "px";
});

// size Changer
blockSize.addEventListener("change", () => {
  blockEl.style.transform = "scale(" + blockSize.value + ")";
});

// Shape Selector
okBtn.addEventListener("click", function () {
  let shapeOption = shapeSelector.value;

  if (shapeOption === "1") {
    blockEl.style.borderRadius = 0;
  } else if (shapeOption === "2") {
    blockEl.style.borderRadius = "50%";
  }
});
