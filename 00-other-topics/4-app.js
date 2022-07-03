const btn = document.querySelector("#bbtn");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = "orangered";
  console.log("Hello World");
});
/*
let myName = "Ali";
console.log(myName);

let regiForm = null;
console.log(regiForm);

const symbol = Symbol();

console.log(symbol);

const bigintTwo = BigInt("46548646548646549841634618416");
console.log(bigintTwo);
*/

/* function add(a, b) {
  return a + b;
}

console.log(add(5, 8)); */
/*
let city = new String("London");
console.log(city);

let movie = "BoXy";

//console.log(movie.toUpperCase());
//console.log(movie.toLowerCase());
console.log(movie);

// concatanation
let firstName = "Tony";
let lastName = "Roger";

console.log(`${firstName} ${lastName}`);

// Length property
console.log(firstName.length);
console.log(lastName.length);
*/

// finding the index of
let pet = "Birdy the Bird";
/*
console.log(pet[pet.length - 1]);
console.log(pet[pet.length - 2]);
console.log(pet[pet.length - 3]);
*/

// trim Method
/* let song = "   shallow       ";
console.log(song.trim()); */

// indexOf
/*
let str = "Please locate where locate occurs!";
let ind1 = str.indexOf("where");
console.log(ind1);

console.log(str.lastIndexOf("occurs"));
*/

// charAt method
/* console.log(pet.charAt("13")); */

// slice method
//console.log(pet.slice(4));
// starting point 4 ending Point 10
//console.log(pet.slice(4, 10));

// split method
// split returns an array
/*
const petSplitted = pet.split(" ");
console.log(petSplitted[0]);
*/

// includes method
// returns boolean
//console.log(pet.includes("z"));

// replace method
//console.log(pet.replace("the", "Moon"));

// The != Non-equality Operator
//console.log(1 != 1);

// The !== Strict Non-equality operator,

/* 
The Strict equality operator what is does is there are two conditions there, and whenever either one of them is true then we
are going to get a (true).
*/

// console.log(1 !== 1); //false
// console.log(1 !== "1"); // true
// console.log("z" !== "z"); // false
// console.log(true !== true); // false
// console.log(false !== true); // true
// console.log(0 !== ""); // true
// console.log(undefined !== null); // true
// console.log(false !== 0); // true
// console.log(true !== 1);

// if statement

// if ("TOM" === "TOM") {
//   console.log("true");
// }

/*
let score = 7;
if (score === 10) {
  console.log("Grade A");
} else if (score === 9) {
  console.log("Grade B");
} else if (score === 8) {
  console.log("Grade C");
} else {
  console.log("Bad Luck! Try again later");
}

*/

// switch statement => single condition
/* let score = 10;

switch (score) {
  case 10:
    console.log("Grade A");
} */

// default statement => checking for two conditions
// let score = 10;

// switch (score) {
//   case 10:
//     console.log("Grade A");
//     break;
//   default:
//     console.log("Grade C");
// }

// Switch default statement => checking for more than two conditions
/*
let score = 6;
switch (score) {
  case 10:
    console.log("Grade A");
    break;
  case 9:
    console.log("Grade B");
    break;
  case 8:
    console.log("Grade C");
    break;
  case 7:
    console.log("Grade D");
    break;
  default:
    console.log("Go fish!");
}
*/

// The Ternary Operator => checking for two conditions
/*let score = 10;

score === 10 ? console.log("Grade A") : console.log("Grade B");
*/

// The logical AND Operator (&&)

// Example 1
// if (10 > 5 && 5 > 4) {
//   console.log("Success");
// }

// Example 2
/*let age = 20;
if (age >= 1 && age <= 12) {
  console.log("minor");
} else if (age >= 13 && age <= 19) {
  console.log("teenager");
} else if (age === 0) {
  console.log("Stop missing around");
} else {
  console.log("adult");
}
*/

// The Logical OR || Operator
// Example 1
// if (2 > 3 || 5 < 7) {
//   console.log("Success");
// }

// Example 2
/* if (10 > 8 || 8 > 5) {
  console.log("Success");
} */

// The logical Not (!) Operator
/* let temp = 22;
if (!(temp === 20)) {
  console.log("Really!!");
}
 */

// Arrays
/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
let colors = ["red", "green", "blue"];
console.log(colors);
let mixed = ["Yellow", 45, null, undefined, NaN, true];
console.log(mixed);

// Accessing a specific value of an index
console.log(numbers[1]);
console.log(colors[1]);
console.log(mixed[3]);

// changing the Array values
numbers[4] = 25;
console.log(numbers);

// Adding to the end of an array
mixed[mixed.length] = "Gaming";
console.log(mixed);*/

// Array methods

// shift method // Removes first item in array
// let movies = ["The Lake House", "Memento"];
// console.log(movies);
// movies.shift();
// console.log(movies);

// 2 unshift method // adds first item in array
// movies.unshift("Gel");
// console.log(movies);

// 3 pop method // removes from the end of an Array
// movies.pop();
// console.log(movies);

// 4 push method //  adds to end of an array
// movies.push("monkey boy");
// console.log(movies);

let numbers = [1, 2, 3, 4, 54, 115, 789, 324];

// 5 slice method // slice(starting index, ending index ) an returns new array
//const newArr = numbers.slice(2, 5);
//const newArr = numbers.slice(-4);
//const newArr = numbers.slice(-2);
//console.log(newArr);

// 6 splice method // changes the array splice(starting index, number of items to be removed)

// Removing items from the Array and returns new array
// const newArr = numbers.splice(3, 5);
// console.log(newArr);
// console.log(numbers);

// removing and replacing ///(start, numOfIndexToRemove, numChanged, numChanged )
// const newArr = numbers.splice(0, 2, 111, 222);
// console.log(newArr);
// console.log(numbers);

// adding //////////////// (startOfIndex, ZeroAddToRemoveNothing, numAdded, numAdded )
//const newArr = numbers.splice(2, 0, 111, 222);
//console.log(newArr);
//console.log(numbers);

// 7) includes method
const moods1 = ["happy", "sad", "satisfied"];

// console.log(moods1.includes("sad"));
// console.log(moods1.includes("frustrated"));

// 8) concat method // combines two arrays together
const moods2 = ["frustrated", "uncertain", "relaxed"];
console.log(moods1.concat(moods2));
console.log(moods2.concat(moods1));

// NOT ALLOWED => error
// moods1 = [1, 2];

// const twoArr = moods1.concat(moods2);
// console.log(twoArr);

// 9) reverse method // reverses an array
// console.log(moods1.reverse());

// 10) join method // ==> converts the Array to a STRING

// const str = moods2.join("");
// const str = moods2.join(" ");
// const str = moods2.join("–– ");
// console.log(str);

// Nesting Arrays

/* const favs = [
  ["End Game", "Infinity Wars", "Civil Wars", "Iron-man", "Thor"],
  ["Batman", "Superman", "Wonder Woman"],
  ["Spider-man", "Ant-man", "Hulk", "Hawkeye"],
  ["Nolan", "Snyder", "Reeves"],
  ["DiCaprio", "Hardy", "Toby", "Andrew"],
];

console.log(favs);
console.log(favs[0][4]);
console.log(`${favs[4][0]} is a good actor`); */

// const [arr1, , arr3, , arr5] = favs;
// console.log(arr1, arr3, arr5);
