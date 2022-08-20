//(3) -> The third way of invoking a function: the new keyword

// function movieFunc(movieDesc) {
//   console.log(this.name, movieDesc);
// }

// let newEmptyObject = new movieFunc("ooops");

// // console.log(new movieFunc("oops"));

// newEmptyObject.name = "The new Empty Object ";

// console.log(newEmptyObject);

/////////////////////////////////////////////7

// const User = function (firstName, courseCount) {
//   this.firstName = firstName;
//   this.courseCount = courseCount;
//   this.getCourseCount = function () {
//     console.log(`Course count is :${this.courseCount}`);
//   };
// };

// const ali = new User("Ali", 3);
// console.log(ali);

// const majde = new User("Majde", 1);
// console.log(majde);

///////////////////////////////////////////////////7
// function Car(make, modal, year) {
//   this.make = make;
//   this.modal = modal;
//   this.year = year;
// }

// const car1 = new Car("Eagle", "Talson TSi", 1993);
// console.log(car1.modal);
