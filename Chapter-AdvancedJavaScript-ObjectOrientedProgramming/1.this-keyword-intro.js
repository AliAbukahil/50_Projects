// Example 1 -> Dynamic Scoping

// let movie = "Avatar";

// function otherMovie(movieName) {
//   console.log(movie, movieName);
// }

// function otherOtherMovie() {
//   let movie = "District 9";

//   otherMovie("The Godfather");
// }

// otherOtherMovie();

//  Example 2 ->

let myContext = {
  movie: "Black Panther 2",
};

function otherMovie(movieDesc) {
  console.log(this.movie, movieDesc);
}

function otherOtherMovie() {
  let myContext = {
    movie: "Avatar",
  };

  otherMovie.call(myContext, "is coming");
}

// otherMovie.call(myContext, "is not coming");

// otherOtherMovie();

///////////////////////////////////////////////////
// function sum(a, b) {
//   console.log(this.sum);
//   return a + b;
// }

// let sum2 = (a, b) => {
//   console.log(this.sum2);
//   return a + b;
// };

// console.log(sum(5, 5));
// console.log(sum2(10, 10));

/////////////////////////////////////////////////////
// function isPositive(number) {
//   console.log(this.isPositive);
//   return number >= 1;
// }

// let isPositive2 = (number) => {
//   console.log(this.isPositive2);
//   return number >= 1;
// };

// console.log(isPositive(5));
// console.log(isPositive2(0));

/////////////////////////////////////////////////////
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   printNameArrow() {
//     setTimeout(() => {
//       console.log("Arrow: " + this.name);
//     }, 100);
//   }

//   printNameFunction() {
//     setTimeout(function () {
//       console.log("Function: " + this.name);
//     }, 100);
//   }
// }

// let person = new Person("Ali");
// person.printNameArrow();
// person.printNameFunction();
// console.log(this.name);
