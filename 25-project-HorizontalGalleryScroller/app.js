const slider = document.querySelector(".container");
let isDown = false;
let startX;
let scrollToLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");

  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
  startX = e.pageX - slider.offsetLeft;

  //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
  scrollToLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  // !isDown = if isDown is false
  if (!isDown) return;
  e.preventDefault();

  const distanceX = e.pageX - slider.offsetLeft;
  // console.log({ distanceX, startX });
  const walk = distanceX - startX;
  slider.scrollLeft = scrollToLeft - walk;
});
