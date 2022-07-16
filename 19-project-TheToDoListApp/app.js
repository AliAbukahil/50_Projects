const clearBtn = document.querySelector(".clear");
const toDoList = document.querySelector("#list");
const toDoInput = document.querySelector("#input");
const toDoAddBtn = document.querySelector(".fa-plus-circle");
// -----------------------------------------------------------

// Selecting the Icons class names
const checkBtn = "fa-check-circle";
const UncheckBtn = "fa-circle-btn";
const textLineThrough = "line-through";

// addToDo Function
function addToDo(toDo, id, done, trash) {
  const toDoDone = done ? checkBtn : UncheckBtn;
  const toDoLine = done ? textLineThrough : "";
}
