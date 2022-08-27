/*
Public API Repo
https://github.com/public-apis/public-apis
*/

let cat = document.querySelector(".cat");
let fox = document.querySelector(".fox");
let dog = document.querySelector(".dog");

let catBtn = document.querySelector(".get-cat");
let foxBtn = document.querySelector(".get-fox");
let dogBtn = document.querySelector(".get-dog");

catBtn.addEventListener("click", getRandomCat);
foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

// ***************** Get random Cat ************
function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((responseData) => {
      let source = responseData.file;
      cat.innerHTML = `<img src="${source}" />`;
    })
    .catch((err) => console.log("error:" + err.message));
}

// ***************** Get random Fox ************
function getRandomFox() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((responseData) => {
      let source = responseData.image;
      fox.innerHTML = `<img src="${source}" />`;
    })
    .catch((err) => console.log("error:" + err.message));
}

// ***************** Get random Dog ************ with async await & try Catch block
async function getRandomDog() {
  try {
    const response = await fetch("https://random.dog/woof.json");

    const responseData = await response.json();

    return (dog.innerHTML = `<img src="${responseData.url}" />`);
  } catch (error) {
    console.log("error:" + error.message);
  }
}
