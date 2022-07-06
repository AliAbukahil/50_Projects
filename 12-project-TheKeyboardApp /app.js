const keyContainer = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");

// console.log(keyContainer);
// console.log(keyContainer[0]);
// console.log(keyContainer[0].children);

keyContainer.forEach((key) => {
  key.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.path);
    // console.log(e.path[0]);
    //console.log(e.path[0].value.toLowerCase());

    if (!e.path[0].value) return;

    let keyClicked = e.path[0].value.toLowerCase();
    textArea.value += keyClicked;
  });
});
