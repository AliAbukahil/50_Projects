// Introduction to DOM Events
/* 
1- user clicks
2- user hovers
3- user scrolls
4- fills out a form
5- user double clicks
6- user mouses over an element
7- user drags and drops
8- user presses key
and so many more
*/

// *-*-*-*-*-*---The click Event---*-*-*-*-*-*
const changeBTN = document.querySelector(".change-bg");
const resetBTN = document.querySelector(".reset-bg");

// changeBTN.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#8fc0a9";
//   console.log("The background has been changed");
// });

// resetBTN.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#fff";
//   console.log(`The background is set back to white`);
// });

// *********** The double click event *******************//
// changeBTN.addEventListener("dblclick", function () {
//   document.body.style.backgroundColor = "orangered";
//   console.log(`The Change button  has been dblclicked `);
// });

// resetBTN.addEventListener("dblclick", () => {
//   document.body.style.backgroundColor = "#fff";
//   console.log(`The Change button  has been dblclicked and reset back `);
// });

// ********************* The mouseover event *******************//
// changeBTN.addEventListener("mouseover", function () {
//   document.body.style.backgroundColor = "red";
// });

// resetBTN.addEventListener("mouseover", function () {
//   document.body.style.background = "yellow";
// });

// // *****************  The mouseout event ******************** //
// changeBTN.addEventListener("mouseout", function () {
//   document.body.style.backgroundColor = "blue";
// });

// resetBTN.addEventListener("mouseout", function () {
//   document.body.style.backgroundColor = "orange";
// });

// *-*-*-*-*-*-*-*-*-*-*- The scroll Event  *-*-*-*--*-*-*-*-*--*- //
// this event is on the window object
// window.addEventListener("scroll", () => {
//   document.body.style.lineHeight = "2.1";
//   document.body.style.backgroundColor = "orangered";
//   document.body.style.color = "#fff";
// });

// *-*-*-*-*-*-*-* The Key events *-*-*-*-*-*-*-*-*-*-*-*-*-* ///
// 1) keydown
const textTnput = document.querySelector('input[type="text"]');
// *-*-* selecting by the attribute input[type="text"]

// textTnput.addEventListener("keydown", function (event) {
//   console.log("keydown");
// });

// 2) keyup
// textTnput.addEventListener("keyup", function (event) {
//   console.log("keyup");
// });

// 3) keypress
// textTnput.addEventListener("keypress", function (event) {
//   console.log("keypress");
// });

// ************** The event object *-*-*-*-*-*-*-*

textTnput.addEventListener("click", function (event) {
  console.log(event.clientX);
});
