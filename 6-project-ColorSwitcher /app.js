const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");

switchBtn.addEventListener("click", function () {
  let red = getRandomNum();
  let green = getRandomNum();
  let blue = getRandomNum();

  const colorString = `rgb(${red},${green},${blue})`;
  //console.log(colorString);

  body.style.backgroundColor = colorString;
  switchPara.innerText = colorString;
});

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}
