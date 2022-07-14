const rangeCharacters = document.getElementById("range-char");
const numberCharacters = document.getElementById("number-char");

// Synchronizing Range and Numbers Inputs
rangeCharacters.addEventListener("input", syncCharAmount);
numberCharacters.addEventListener("input", syncCharAmount);

function syncCharAmount(e) {
  const valueAmount = e.target.value;
  rangeCharacters.value = valueAmount;
  numberCharacters.value = valueAmount;
}
