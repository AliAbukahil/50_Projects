// *************** DOM => Document Object Modal *************** //
// DOM is like entry point from JavaScript to the world of HTML and CSS

// ----------------------------------//
// **** Selecting Methods => Getting HTML by their Class
// const heading = document.getElementsByClassName("title");
// console.log(heading);

// ----------------------------//
// // **** Selecting Methods => Getting HTML by their ID
// const dogImg = document.getElementById("dog-img");
// console.log(dogImg);

// ----------------------------//
// // **** Selecting Methods => querySelectorAll ==> It selects all elements that share that selector

// const dogTraits = document.querySelectorAll(".item");
// console.log(dogTraits);

// ----------------------------//
// // **** Selecting Methods => querySelector ==> It selects only one element that has the selector

// const dogImg = document.querySelector("#dog-img");
// console.log(dogImg);

// *********** Property #1 ==> innerText

// const paragraph = document.querySelector("p");
// console.log(paragraph.innerText);
// paragraph.innerText = "Hello Dogs";

// *********** Property #2 ==> textContent => it shows text as it is in the HTML document

// const paragraph2 = document.querySelector("p");
// console.log(paragraph2.textContent);

// *********** Property #3 ==> innerHTML ==> it create new element
// Example 1
// const ulEle = document.querySelector("ul");
// console.log(ulEle.innerHTML);

// Example 2 += it create new element
// const ul = document.querySelector("ul");
// ul.innerHTML += "<li>Item 4 </li>";
// console.log(ul.innerHTML);

////******************* Methods ********************** */

// ********** Method #1 ==> getAttribute()

// const paragraph = document.querySelector("p");
// console.log(paragraph.getAttribute("id"));

// ********** Method #2 setAttribute() ==> creates new attribute for HTML element
// const paragraph = document.querySelector("p");
// paragraph.setAttribute("class", "paragraph123");
// console.log(paragraph.getAttribute("class"));

// ************Property #4 => Traversing the DOM Properties

/* 
parentElement
children
previousElementSibling
nextElementSibling
*/

// 1) parentElement

// const para = document.querySelector("p");
// console.log(para.parentElement);

// 2) children

// const body = document.body;
// console.log(body.children);
// console.log(body.children[0]);
// console.log(body.children[3]);

// 3) previousElementSibling   4) nextElementSibling

// ("ul li:nth-child(2)") inside the two quotes in realm of CSS, that why we can type this
// const item = document.querySelector("ul li:nth-child(2)");
// console.log(item.previousElementSibling.innerHTML);
// console.log(item.nextElementSibling.innerHTML);

// ************Property #555 => style

// const image = document.querySelector("img");
// const para = document.querySelector("p");
// console.log(image);
// console.log(para);

// image.style.width = "700px";
// para.style.backgroundColor = "thistle";
// para.style.padding = "20px";
// para.style.color = "black";
// para.style.lineHeight = "1.8";
// para.style.fontSize = "20px";

// ************Property #6 => classList

// para.classList.add("for-fun");

// ************ Method #333 => getComputedStyles()
// const imageProps = getComputedStyle(image);
// console.log(imageProps);
// image.style.width = "800px";
// image.style.height = "600px";

// console.log(imageProps.height);
// console.log(imageProps.width);

// ****** Method #4 & #555 => createElement & appendChild

// // 1) The element is created
// const newItem = document.createElement("li");

// // 2) The element is given a content/texts
// newItem.innerText = "Cute little beasts";
// //console.log(newItem);

// // 3) we need a parent to adopt this element

// const ulParent = document.querySelector("ul");
// ulParent.appendChild(newItem);

// newItem.style.backgroundColor = "#ccc";
// ulParent.style.backgroundColor = "green";

// // ********* Method #666 insertBefore() // to insert an element wherever you please

// // step 1)
// const firstItem = document.querySelector("ul li:first-child");
// console.log(firstItem);

// // step 2)
// const newItem2 = document.createElement("li");
// newItem2.innerText = "Protective";
// console.log(newItem2);

// // step 3)
// ulParent.insertBefore(newItem2, firstItem);

// ******* Method #777 => append() appends multiple elements at once to a parent element

// // 1)
// const newH5 = document.createElement("h5");
// const newH6 = document.createElement("h6");

// // 2)
// newH5.innerText = "Cats";
// newH6.innerText = "Birds";

// console.log(newH5);
// console.log(newH6);

// // 3)
// const mainContainer = document.querySelector(".heading_container");
// mainContainer.append(newH5, newH6);

// newH5.style.fontSize = "1.9rem";
// newH6.classList.add("for-fun");

// // ***** Method #888 => prepend() // to switch position of elements
// mainContainer.prepend(newH6, newH5);

// // ***** Method #999 => removeChild() ==> it requires a parent element to remove the Child inside
// // Example 1

// // const toDoListParent = document.querySelector("ol");
// const toDoItemChild = document.querySelector("ol li:nth-child(3)");
// console.log(toDoItemChild);
// toDoListParent.removeChild(toDoItemChild);
// Example 2

//const body = document.body;
// const childToBeRemovedFromBody = document.querySelector(".heading_container");
// console.log(childToBeRemovedFromBody);
// body.removeChild(childToBeRemovedFromBody);

// ***** Method #999 => remove() it doesn't require a parent Element
//toDoItemChild.remove();
