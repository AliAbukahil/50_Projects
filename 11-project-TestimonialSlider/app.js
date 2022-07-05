const slides = document.querySelector(".slider").children;
const indicatorImgs = document.querySelector(".indicator").children;

console.log(indicatorImgs); // this will return an array of images

// Loop 1
for (let i = 0; i < indicatorImgs.length; i++) {
  ///////////
  indicatorImgs[i].addEventListener("click", () => {
    // Loop 2
    for (let j = 0; j < indicatorImgs.length; j++) {
      indicatorImgs[j].classList.remove("active");
    }

    indicatorImgs[i].classList.add("active");

    const id = indicatorImgs[i].getAttribute("data-id");

    // Loop 3
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}
