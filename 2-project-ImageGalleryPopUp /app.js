const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

// forEach is an array method
smallImg.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.classList.add("open");
    fullImg.classList.add("open");

    /// Changing the images dynamically by the Attribute
    const originalQuality = img.getAttribute("alt");
    fullImg.src = `img/full/${originalQuality}.jpg`;
  });
});

// Removing the Modal
modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});
