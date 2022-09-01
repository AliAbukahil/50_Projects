const fromCurrencyInput = document.querySelector(".from-currency");
const toCurrencyInput = document.querySelector(".to-currency");
const exchangeAmountInput = document.querySelector(".amount");
const getRateBtn = document.querySelector(".get-rate");

getRateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const fromCurrencyValue = fromCurrencyInput.value;
  const toCurrencyValue = toCurrencyInput.value;
  const exchangeAmountValue = exchangeAmountInput.value;

  if (
    fromCurrencyValue === "" ||
    toCurrencyValue === "" ||
    exchangeAmountValue === ""
  ) {
    inputError();
  } else {
    convertCurrency(fromCurrencyValue, toCurrencyValue, exchangeAmountValue)
      .then((exchangeResult) => {
        document.querySelector(".currency-item").innerText = exchangeResult;
        setTimeout(() => {
          location.reload();
        }, 6000);
      })
      .catch(() => {
        invalidCode();
      });
  }
});

// **********************------**********************
async function getExchangeRate(fromCurrency, toCurrency) {
  const apiLink = "https://api.exchangerate.host/latest";
  const response = await fetch(apiLink);

  const currencyData = await response.json();
  const currencyRates = currencyData.rates;
  const baseCurrency = 1 / currencyRates[fromCurrency];
  const exchangeRate = baseCurrency * currencyRates[toCurrency];

  if (isNaN(exchangeRate)) {
    throw new Error(invalidCode());
  }

  return exchangeRate;
}

// getExchangeRate("USD", "EUR").then((result) => console.log(result));

// **********************------**********************
async function convertCurrency(fromCurrency, toCurrency, exchangeAmount) {
  const amountExchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const convertedAmount = (exchangeAmount * amountExchangeRate).toFixed(2);

  return `${exchangeAmount} ${fromCurrency} ===> ${convertedAmount} ${toCurrency}`;
}
