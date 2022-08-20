// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

let myPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    //resolve("Success");
    reject("whoopise");
  }, 1000);
});

/* better than this committed code is the .then() + .catch() method */
// myPromise.then(
//   (successMsg) => {
//     console.log(successMsg);
//   },
//   (errorMsg) => {
//     console.log(errorMsg);
//   }
// );

// .then() + .catch() better
myPromise
  .then((successMsg) => {
    console.log(successMsg);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
