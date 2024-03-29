const rangeCharacters = document.getElementById("range-char");
const numberCharacters = document.getElementById("number-char");
const inputSubmit = document.querySelector("input[type='submit']");
const formContainer = document.querySelector("#password-form");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const uppercaseEl = document.querySelector("#uppercase");
const passwordDisplay = document.querySelector("#password-display");

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
  const includeUppercase = uppercaseEl.checked;
  const includeNumbers = numbersEl.checked;
  const includeSymbols = symbolsEl.checked;

  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  passwordDisplay.innerText = password;
});

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = lowerCaseCharCodes; // default style is set to lowercase if the dose not want to include numbers,symbols,uppercase
  // if checkbox in is checked
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);
  if (includeUppercase) charCodes = charCodes.concat(upperCaseCharCodes);

  const passwordCharacters = [];
  for (let h = 0; h < characterAmount; h++) {
    let characterCodes =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCodes));
  }

  return passwordCharacters.join("");
}

// Character Codes Looping function
function arrayLowToHigh(low, high) {
  let array = [];

  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
