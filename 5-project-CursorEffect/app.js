const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

// on the window object
window.addEventListener("mousemove", cursor);

function cursor(event) {
  // console.log(event.pageX);
  // console.log(event.pageY);
  mouseCursor.style.top = event.pageY + "px";
  mouseCursor.style.left = event.pageX + "px";
}

navLinks.forEach((link) => {
  // listener for mouse out
  link.addEventListener("mouseout", function () {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });

  // listener for mouse over
  link.addEventListener("mouseover", function () {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});
