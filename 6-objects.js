// Objects literal => Object => key-values pairs
// const address = {
//   country: "Turkey",
//   city: "Istanbul",
// };
// console.log(address);

// Accessing the object data => Method 1
// console.log(address.city);
// console.log(address.city, "is very beautiful");
// console.log(`${address.country} has an astounding scenery`);

//  Accessing the object data => Method 2 => Array brackets

// const person = {
//   name: "sam",
//   age: 31,
//   "Full Address": "Athens, Greece",
//   job: "Captain America",
//   1985: "DoB",
// };

// console.log(person);
// console.log(person.age);
// console.log(person["age"]);
// //console.log(person[age]); // won't work, should be inside a string
// console.log(person["1985"]);
// console.log(person[1985]); // it works with numbers
// console.log(person["Full Address"]);
// console.log(person["Full Address"]);

// Modifying Objects => change the object data
/*
const movieRating = {
  Deadpool: 9.1,
  "X-Men Days of Future Past": 7.9,
  "Thor Ragnorak": 9.4,
  "Wounder Woman": 9,
  Superman: 9,
};

// Modify or change the object data
movieRating.Deadpool = 9.3;
movieRating["Thor Ragnorak"] = 8.1;

console.log(movieRating);

// Updating the object ==> means create more key/value pairs
// movieRating.TheWinterSoldier = 9.8; //one way
movieRating["The Winter Soldier"] = 9.8; // second way
// movieRating.JusticeLeagueApocalypse = 5.5; // one way
movieRating["Justice League Apocalypse"] = 5.5; // second way
console.log(movieRating);
*/

// Nesting Objects within Objects

// const user = {
//   thunderBolt3: {
//     name: "Rose",
//     job: "classified",
//   },
//   payGrade: "A",
// };

// console.log(user);

// accessing information of the nested object

// console.log(user.thunderBolt3.job); // Dot notation
// console.log(user["thunderBolt3"]["job"]); // bracket notation

// Nesting Arrays within Objects

// const user2 = {
//   thunderBolt3: {
//     name: "Rose",
//     job: "classified",
//   },
//   payGrade: "A",
//   hobbies: ["golf", "walk", "give out orders"],
// };
// console.log(user2);
// console.log(user2.hobbies[2]);
// console.log(user2["hobbies"][2]);

// Nesting Objects within Arrays
// const user3 = [
//   {
//     name: "Tony",
//     job: "complicated",
//   },
//   "compassionate",
//   1986,
//   ["making suits", "destroying suits"],
// ];

// // accessing data inside of an nested Array with multiple data types

// console.log(user3);
// console.log(user3[0].job); // same result
// console.log(user3[0]["job"]); // same result
// console.log(`${user3[0]["job"]}`); // same result
// console.log(`${user3[0]["job"]}, is tony's job`); // same result
// console.log(user3[1]);
// console.log(user3[2]);
// console.log(user3[3]);
// console.log(user3[3][1]);
