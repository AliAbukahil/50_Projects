// https://jsonplaceholder.typicode.com/

const getDataBtn = document.querySelector("button");
const usersContainer = document.querySelector(".users-container");

getDataBtn.addEventListener("click", getData);

function getData() {
  //////////////////////////////
  const data = new XMLHttpRequest();

  ////////////////////////////
  data.addEventListener("readystatechange", function () {
    if (this.status === 200 && this.readyState === 4) {
      // console.log(this.responseText);

      let users = JSON.parse(this.responseText);

      console.log(users);
    }
  });

  ////////////////////////////
  data.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  data.send();
}
