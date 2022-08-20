const nums = [1, 2, 3, 4, 5];

const total = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 1);

console.log(total);
