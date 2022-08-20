let favColors = {
  colorOne: "Green",
  colorTwo: "Blue",
  colorThree: "Brown",
};

const colors = Object.values(favColors);
console.log(colors); // expected output Array ['Green', 'Blue', 'Brown'] we can now loop over it using the forEach

colors.forEach((color) => console.log(color));
