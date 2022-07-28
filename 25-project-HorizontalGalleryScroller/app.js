const slider = document.querySelector(".container");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");

  startX = e.pageX - slider.offsetLeft;
  console.log(startX);
});

slider.addEventListener("mouseup", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", (e) => {
  isDown = false;
  slider.classList.remove("active");
});
