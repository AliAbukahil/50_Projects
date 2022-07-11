const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");
//console.log(keys);

keys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  // console.log(key);
  // console.log(key.dataset);
  // console.log(key.dataset.note);
  noteAudio.currentTime = 0; // to play the sound multiple times
  noteAudio.play();
  key.classList.add("active");

  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
