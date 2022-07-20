const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll(".list-item");

let draggedItem = null;

// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
for (let a = 0; a < listItems.length; a++) {
  const item = listItems[a];
  //console.log(item);

  item.addEventListener("dragstart", function () {
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 50);
  });

  item.addEventListener("dragend", function () {
    setTimeout(function () {
      item.style.display = "block";
      draggedItem = null;
    }, 50);
  });

  for (let b = 0; b < lists.length; b++) {
    const list = lists[b];
    //console.log(list);
    list.addEventListener("dragover", function (e) {
      // why e.preventDefault(), cuz by default not allowed to drag and drop inside other html elements, that why we prevent it!
      e.preventDefault();
    });

    list.addEventListener("dragenter", function (e) {
      // same here as above
      e.preventDefault();
      list.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    });

    list.addEventListener("dragleave", function () {
      list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
    });

    list.addEventListener("drop", function (e) {
      e.preventDefault();
      list.appendChild(draggedItem);
      list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
    });
  }
}
