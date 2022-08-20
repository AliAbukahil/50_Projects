// This is what's happening under the syntactic sugar of class OOP

function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function (msg) {
  this.ask(msg);
};

let jsClass = new AnotherWorkshop("Noah");

jsClass.speakUp("teaches JS???");

// console.log(jsClass.__proto__);
// console.log(jsClass.__proto__.__proto__);
// console.log(jsClass.__proto__.__proto__.__proto__);
// console.log(jsClass.__proto__.__proto__.__proto__.__proto__);
// jsClass.ask("who is he?");
