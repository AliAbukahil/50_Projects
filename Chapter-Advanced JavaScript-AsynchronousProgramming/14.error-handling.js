// -----------------------------------------------------
// Error handling -> Creating a custom error

async function getQuestion() {
  const questionsResponse = await fetch("6.questions.json");

  if (questionsResponse.status !== 200) {
    throw new Error("Error Fetching Data");
  }

  return (questionsData = await questionsResponse.json());
}

getQuestion()
  .then((Q) => console.log(Q))
  .catch((error) => console.log(error));

// let error = new Error();
// console.log(error.__proto__.__proto__.__proto__);
