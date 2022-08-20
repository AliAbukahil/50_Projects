const getDataBtn = document.querySelector("button");
const cat = document.querySelector(".cat");
const dog = document.querySelector(".dog");

getDataBtn.addEventListener("click", getData);

function getData() {
  let getToDos = (callback) => {
    // step 1 instantiate XMLHttpRequest
    const data = new XMLHttpRequest();
    // console.log(data);

    // step 3
    // instead of onload(), adding eventListener on the ready state change
    data.addEventListener("readystatechange", function () {
      if (this.status === 200 && this.readyState === 4) {
        // console.log(this.responseText);
        const dataRetrieved = JSON.parse(data.responseText);
        return callback(undefined, dataRetrieved);
      }

      if (this.readystate === 4) {
        return callback("Error Fetching Data", undefined);
      }
    });

    // step 2 call the open Method on the data XMLHttpRequest Object
    data.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);

    // Step 4 sending the data
    data.send();
  };

  cat.classList.add("show");

  getToDos((error, toDoData) => {
    if (error) {
      return error;
    }

    if (toDoData) {
      console.log(toDoData);
    }
  });

  dog.classList.add("show");
}
