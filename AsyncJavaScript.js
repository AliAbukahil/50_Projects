/*
const button = document.querySelector("button");

const alertMe = () => {
  console.log("You clicked me!");
};

button.addEventListener("click", alertMe);
 */

// **********************  ***********************

/* 
function showImage(url, type, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = type;
  console.log(xhr);

  xhr.onload = function () {
    callback(xhr.response);
  };
  xhr.send();
}

function createImage(blob) {
  const objectURL = URL.createObjectURL(blob);
  const imageElement = document.createElement("img");
  imageElement.src = objectURL;
  imageElement.style.width = "150px";
  document.body.appendChild(imageElement);
}

showImage("apple.jpg", "blob", createImage);
 */

// ******************* *********************
/* 
Do NOTE that not all callbacks are asynchronous, some do run synchronicity, an Example is when we use forEach() loop
*/

const fruits = ["orange", "Pineapple", "Kiwi"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
