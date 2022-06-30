const sections = document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries) {
  entries.forEach((entry) => {
    console.log(entry);
    const className = entry.target.className;
  });
}

sections.forEach(function (section) {
  observer.observe(section);
});
