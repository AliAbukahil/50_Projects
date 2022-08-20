// function Workshop(teacher) {
//   this.teacher = teacher;
// }

// Workshop.prototype.ask = function (desc) {
//   console.log(this.teacher, desc);
// };

// let js = new Workshop("Teddy");
// let django = new Workshop("John");

// js.ask("is a great teacher");
// django.ask("is also a great teacher");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// let arr = ["Iron", "Man"];
// arr.push("captain America");

// let object = {
//   name: "Ninja Turtle",
//   city: "New York sewers",
//   getIntro() {
//     console.log(`${this.name} from ${this.city}`);
//   },
// };

// let object2 = {
//   name: "Aditya",
// };

// function fun() {
//   //
// }

// Prototype chain
// console.log(arr.__proto__.__proto__.__proto__); // null
// console.log(arr.__proto__.__proto__); // Object
// console.log(arr.__proto__); // [] of methods

// Prototype chain
// console.log(object.__proto__.__proto__); // null
// console.log(object.__proto__); // {} of methods

// console.log(arr.__proto__.__proto__.__proto__); // null
// console.log(fun.__proto__.__proto__); // {} of methods
// console.log(fun.__proto__); // ƒ () { [native code] }

// Never do this ––>> just for learning purposes
// object2.__proto__ = object;
// console.log(object2);
// console.log(object2.__proto__);

// console.log(object2.city);
// console.log(object.city);

// Array.prototype.monkey = function () {
//   console.log("Who let the cats out!?");
// };

// arr.monkey();

// The Repetition of the bind() method

let name = {
  firstName: "car",
  lastName: "bus",
};

const printName = function (hometown, country, state) {
  console.log(
    `${this.firstName} ${this.lastName}, ${hometown}, ${country}, ${state}`
  );
};

let printMyName = printName.bind(name, "garage", "new York");
printMyName("oilLand");

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "garage", "Hollywood");
printMyName2("oilLand");

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(1, 3));
