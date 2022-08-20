// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

/*
XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
*/

/*
An HTTP requeest is made in 4 easy steps

1- Instantiate a new XHR Object
2- Create the Request (Request Setup)
3- Decide what to do with the data received/fetched if the request is successful
4- Send the request
*/

/* Getting Local Data From a TXT File  */

const btn = document.querySelector("button");
const paragraph = document.querySelector("p");

btn.addEventListener("click", textData);

function textData() {
  // 1) create an XHRHttpRequest Object
  const NewXHRObject = new XMLHttpRequest();
  // console.log(NewXHRObject);

  // 2) create the request
  NewXHRObject.open("GET", "5.info.txt", true); // true means code is going to run "Asynchronously", false otherwise "Synchronous" which we don't want

  // 3)
  NewXHRObject.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      // console.log(this);
      paragraph.innerHTML = this.responseText;
      paragraph.style.backgroundColor = "orangered";
      paragraph.style.fontSize = "24px";
      paragraph.style.color = "#fff";
    }
  };

  // 4) send the request
  NewXHRObject.send();
}
