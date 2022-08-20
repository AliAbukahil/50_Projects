// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// Example 1 ==> make a Request to get the users

// let jsonPlaceholder = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  console.log(jsonPlaceholder);

// --------------------------------- -------------------------------
// // Example 2 ==> make a Request to get the users

// res.json()
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((users) => {
    console.log(users);
    console.log(users[3].address.geo.lng);
    console.log(users[3]["address"]["geo"]["lng"]);
    console.log(
      `${users[3]["address"]["geo"]["lng"]}, is the longitude address of ${users[3]["name"]}`
    );
    // for (const key of users) {
    //   console.log(key.name);
    // }
    // users.forEach((user, index) => {
    //   console.log(user, index);
    // });
  })
  .catch((error) => console.log(error));
