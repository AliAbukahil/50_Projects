const clearBtn = document.querySelector(".clear");
const toDoList = document.querySelector("#list");
const toDoInput = document.querySelector("#input");
const toDoAddBtn = document.querySelector(".fa-plus-circle");
// -----------------------------------------------------------

// Selecting the Icons class names
const checkBtn = "fa-check-circle";
const UncheckBtn = "fa-circle-btn";
const textLineThrough = "line-through";

// To Do Container
let toDoContainer = [];
let id = 0;

// addToDo Function
function addToDo(toDo, id, done, trash) {
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
}
