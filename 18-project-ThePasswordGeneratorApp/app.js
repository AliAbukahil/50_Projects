const rangeCharacters = document.getElementById("range-char");
const numberCharacters = document.getElementById("number-char");
const inputSubmit = document.querySelector("input[type='submit']");
const formContainer = document.querySelector("#password-form");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const uppercaseEl = document.querySelector("#uppercase");

/* 
inserting the character Codes into arrays  
Character Cheat sheet ––>> https://www.petefreitag.com/cheatsheets/ascii-codes/
*/

const lowerCaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47)
  .concat(58, 64)
  .concat(91, 96)
  .concat(123, 26);
const upperCaseCharCodes = arrayLowToHigh(65, 90);

// Synchronizing Range and Numbers Inputs
rangeCharacters.addEventListener("input", syncCharAmount);
numberCharacters.addEventListener("input", syncCharAmount);

function syncCharAmount(e) {
  const valueAmount = e.target.value;
  rangeCharacters.value = valueAmount;
  numberCharacters.value = valueAmount;
}

// Generating the Password when the form is submitted
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  const characterAmount = numberCharacters.value;
  const includeNumbers = numbersEl.value;
  const includeUppercase = uppercaseEl.value;
  const includeSymbols = symbolsEl.value;

  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
});

// function generatePassword() {}

// Character Codes Looping function
function arrayLowToHigh(low, high) {
  let array = [];

  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
