const fromCurrencyEl = document.querySelector(".from-currency");
const toCurrencyEl = document.querySelector(".to-currency");
const amountEl = document.querySelector(".amount");
const getRateBtn = document.querySelector(".get-rate");

getRateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getExchangeRate();
});

// **********************------**********************
async function getExchangeRate(fromCurrency, toCurrency) {
  try {
    const apiLink = "https://api.exchangerate.host/latest";
    const response = await fetch(apiLink);

    const currencyData = await response.json();
    const currencyRates = currencyData.rates;
    const baseCurrency = 1 / currencyRates[fromCurrency];
    const exchangeRate = baseCurrency * currencyRates[toCurrency];

    if (isNaN(exchangeRate)) {
      console.log("ERROR");
    }

    return exchangeRate;
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

// getExchangeRate("USD", "EUR").then((result) => console.log(result));

// **********************------**********************
async function convertCurrency(fromCurrency, toCurrency, exchangeAmount) {
  const amountExchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const convertedAmount = (exchangeAmount * amountExchangeRate).toFixed(2);

  return `${exchangeAmount} ${fromCurrency} ===> ${convertedAmount}`;
}

convertCurrency("SYP", "USD", 5000).then((result) => console.log(result));
