const blockEl = document.querySelector("#block");
const verticalPosition = document.querySelector("#position-y");
const horizontalPosition = document.querySelector("#position-x");
const blockSize = document.querySelector("#size");
const shapeSelector = document.querySelector("#shape-select");

const okBtn = document.querySelector("#ok-btn");

const rgbaR = document.querySelector("#rgba-r");
const rgbaG = document.querySelector("#rgba-g");
const rgbaB = document.querySelector("#rgba-b");
const rgbaA = document.querySelector("#rgba-a");

const rgbaContainer = document.querySelector(".rgba-container");
const rgbaInputs = rgbaContainer.querySelectorAll("input");

// console.log(rgbaInputs);

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

// Background color Changer RGBA
for (let i = 0; i < rgbaInputs.length; ++i) {
  //console.log(rgbaInputs[i]);
  rgbaInputs[i].addEventListener("change", function () {
    blockEl.style.backgroundColor = `
    rgba(
    ${rgbaR.value},
    ${rgbaG.value},
    ${rgbaB.value},
    ${rgbaA.value}
    )`;
  });
}

// background-color: rgba(red, green, blue, alpha);
