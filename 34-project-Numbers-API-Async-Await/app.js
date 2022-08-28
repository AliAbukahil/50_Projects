// http://numbersapi.com/

const factBtn = document.querySelector("button");
const factInput = document.querySelector("input");
const factPara = document.querySelector("p");

factBtn.addEventListener("click", (e) => {
  const number = +factInput.value;

  fetchFacts(number);
});

async function fetchFacts(number) {
  try {
    const factURL = "http://numbersapi.com/";
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(`${proxyURL}${factURL}${number}`, {
      method: "GET",
      headers: {
        "x-requested-with": "text/plain",
      },
    });

    const responseData = await response.text();

    factPara.innerText = responseData;
  } catch (error) {
    console.log("Error:" + error.message);
  }
}
