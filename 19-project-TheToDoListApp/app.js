const clearBtn = document.querySelector(".clear");
const toDoList = document.querySelector("#list");
const toDoInput = document.querySelector("#input");
const toDoAddBtn = document.querySelector(".fa-plus-circle");
// -----------------------------------------------------------

// Selecting the Icons class names
const checkBtn = "fa-check-circle";
const UncheckBtn = "fa-circle-thin";
const textLineThrough = "line-through";
//-------------------------------------------------------------

//-------------------------------------------------------------

// To Do Container
let toDoContainer = [];
let id = 0;

//-------------------------------------------------------------
// addToDo Function
function addToDo(toDo, id, done, trash) {
  if (trash === true) return;

  const toDoDone = done ? checkBtn : UncheckBtn;
  const toDoLine = done ? textLineThrough : "";
  const item = `
    <li class="item">
      <i class="fa ${toDoDone} complete" status="complete" id="${id}"></i>
      <p class="text ${toDoLine}">${toDo}</p>
      <i  class="fa fa-trash-o delete" status="delete" id="${id}"></i>
    </li>
  `;
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  const toDoItemPosition = "beforeend";
  toDoList.insertAdjacentHTML(toDoItemPosition, item);
}

// addToDo("Buy Coffee", 0, false, false);
// addToDo("Buy Coffee", 0, true, false);
// addToDo("Buy Coffee", 0, true, true);

//-------------------------------------------------------------

// Adding a to-do to the list when the enter Key is pressed

document.addEventListener("keyup", displayToDo);

// Adding a to-do to the list when the + icon is clicked

toDoAddBtn.addEventListener("click", displayToDo);

// DisplayToDo Function

function displayToDo(event) {
  // 13 is the keycode for enter
  if (
    event.keyCode === 13 ||
    event.target.classList.value === "fa fa-plus-circle"
  ) {
    const toDo = input.value;
    // Checking whether the input field is NOT empty
    if (toDo) {
      addToDo(toDo, id, false, false);
      toDoContainer.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
      id++;
    }

    input.value = "";
  }
}
