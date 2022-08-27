// async function print() {
//   return "I have been printed";
// }
// console.log(print());

// Function Expression
// const print = async () => {
//   return "I have been printed";
// };

// print().then((response) => {
//   console.log(response);
// });

// fetch API

// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error" + error.message);
//   });

// Async and Await + try catch block

// async function getData() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/all");
//     console.log(response);

//     const countries = await response.json();
//     console.log(countries);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getData();

// Async and Await

async function getCountriesNames() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  return countries;
}

getCountriesNames()
  .then((DATA) => {
    console.log(DATA);
  })
  .catch((ERROR) => {
    console.log("errors:" + ERROR.message);
  });
