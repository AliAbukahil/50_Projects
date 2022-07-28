const video = document.querySelector(".video");
const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");

speed.addEventListener("mousemove", (e) => {
  const x = e.pageX - speed.offsetLeft;
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
  const percent = x / speed.offsetWidth;
  const min = 0.1;
  const max = 5;
  const width = Math.round(percent * 100) + "%";
  const playBackRateVariable = percent * (max - min) + min;
  bar.style.width = width;
  bar.textContent = playBackRateVariable.toFixed(2) + "x";
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate
  video.playbackRate = playBackRateVariable;
});
