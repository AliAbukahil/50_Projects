let names = ["John", "Sandy", "Mark", "Sandra"];
let nums = [1, 5, 5, 9, 11, 8, 212, 313, 115, 1245];

// console.log(names.sort()); // Sorting based on Alphabet order
// console.log(nums.sort()); // [1, 11, 115, 1245, 212, 313, 5, 5, 8, 9]

/* 
if result > 0 we want b to come first
if result = 0 -> we want unchanged
if result < 0 -> a
*/

// compare callBack Function in the sort() Method
// let sortFunc = nums.sort((a, b) => {
//   return a - b;
// });

// console.log(sortFunc); // got arranged from small to big

/* 
if result > 0 we want a to come first
if result = 0 -> we want unchanged
if result < 0 -> b
*/

// compare callBack Function in the sort() Method
let sortFunc = nums.sort((a, b) => {
  return b - a;
});

console.log(sortFunc); // got arranged from big to small
