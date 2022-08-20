// JS runtime at a glance

divide(100, 5);

function multiply(x, y) {
  const result = x * y;
  console.log(result);
}

function sum(x, y) {
  const result = x + y;
  console.log(result);
  multiply(20, 30);
}

function subtract(x, y) {
  const result = x - y;
  console.log(result);
  sum(30, 50);
}

function divide(x, y) {
  const result = x / y;
  console.log(result);
  subtract(50, 40);
}
