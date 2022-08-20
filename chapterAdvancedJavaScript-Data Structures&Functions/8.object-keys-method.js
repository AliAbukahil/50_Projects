let favColors = {
  colorOne: "Green",
  colorTwo: "Blue",
  colorThree: "Brown",
};

let keys = Object.keys(favColors);
console.log(keys); // result an array :D ['colorOne', 'colorTwo', 'colorThree'] –– now we can loop using the forEach :D

keys.forEach((key) => {
  console.log(key);
});
