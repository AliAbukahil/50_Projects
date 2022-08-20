var teacher = "Tom";

// IIFE (Immediately Invoked Function Expression) NOT function declaration
(function anotherTeacher() {
  var teacher = "Jack";
  console.log(teacher);
})();

// anotherTeacher(); //  expected result : anotherTeacher is not defined // it can't be called again after being transferred to IIFE

(function numSquare(x) {
  console.log(x * x);
})(5);

console.log(teacher);
