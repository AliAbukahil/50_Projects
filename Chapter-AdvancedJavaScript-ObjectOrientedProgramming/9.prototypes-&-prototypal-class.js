/* The behind scene of the class keyword,
 it is just code syntactic sugar */
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (desc) {
  console.log(this.teacher, desc);
};

let js = new Workshop("Teddy"); // instance of the workshop class
let django = new Workshop("John");

js.ask("is a great teacher");
django.ask("is  also a great teacher");

console.log(typeof js);
console.log(typeof django);
// ------------------------------------
// Instance ––> Instantiating

// class Workshop {
//   ask(question) {
//     // do something
//   }
// }

// instance of the Workshop class --> new Workshop()
