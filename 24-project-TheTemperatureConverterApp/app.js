const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");

tempInputs.forEach((input) => {
  input.addEventListener("input", function (e) {
    // console.log(e.target.value);
    let tempValue = parseInt(e.target.value);
    console.log(typeof tempValue);
  });
});
