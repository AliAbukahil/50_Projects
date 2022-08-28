// https://icanhazdadjoke.com/api
const jokeBtn = document.querySelector("button");
const jokePara = document.querySelector(".joke");

jokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const jokeURL = "https://icanhazdadjoke.com/";

    const response = await fetch(jokeURL, {
      headers: {
        Accept: "application/json",
      },
    });

    const jokes = await response.json();
    // console.log(jokes);

    return (jokePara.innerHTML = jokes.joke);
  } catch (error) {
    console.log("Error:" + error.message);
  }
}
