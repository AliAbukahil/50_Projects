function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

let jsClass = new Workshop("Teddy");

console.log(jsClass.constructor === Workshop);

console.log(jsClass.__proto__ === Workshop.prototype);

console.log(jsClass.__proto__);

console.log(Workshop.prototype);

console.log(Object.getPrototypeOf(jsClass));

console.log(Object.getPrototypeOf(jsClass) === Workshop.prototype);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
