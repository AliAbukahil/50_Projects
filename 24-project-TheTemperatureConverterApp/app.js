const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");
const h1 = document.querySelector("h1");

tempInputs.forEach((input) => {
  input.addEventListener("input", function (e) {
    // console.log(e.target.value);
    let tempValue = parseInt(e.target.value);
    // console.log(typeof tempValue);
    let inputName = e.target.name;

    if (e.target.value == "") {
      celsiusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;

      return;
    }

    if (inputName === "celsius") {
      // Celsius to fahrenheit
      let fahrenheitValue = tempValue * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);

      // Celsius to Kelvin
      let kelvinValue = tempValue + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "fahrenheit") {
      // fahrenheit to Celsius
      let celsiusValue = (tempValue - 32) / 1.8;
      celsiusInput.value = celsiusValue.toFixed(2);

      // fahrenheit to Kelvin
      let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "kelvin") {
      // Kelvin to Celsius
      let celsiusValue = tempValue - 273.15;
      celsiusInput.value = celsiusValue.toFixed(2);

      // Kelvin to fahrenheit
      let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  });
});

// h1.addEventListener("click", function (e) {
//   document.body.style.backgroundColor = "orangered";
// });
