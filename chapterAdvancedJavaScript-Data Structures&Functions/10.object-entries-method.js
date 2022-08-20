let favColors = {
  colorOne: "Green",
  colorTwo: "Blue",
  colorThree: "Brown",
};
// Object.entries() converts all key value pairs into arrays

const entries = Object.entries(favColors);
console.log(entries); // expected output 3 Arrays items
// 0: (2) ['colorOne', 'Green']
// 1: (2) ['colorTwo', 'Blue']
// 2: (2) ['colorThree', 'Brown']

entries.forEach((entry) => console.log(entry[0])); // expected output 3 Arrays
// entries.forEach(([key, value]) => console.log(`${key}: ${value}`)); // 3 strings

// The for...in statement

// for (const property in favColors) {
//   console.log(`${property}: ${favColors[property]}`);
// }
