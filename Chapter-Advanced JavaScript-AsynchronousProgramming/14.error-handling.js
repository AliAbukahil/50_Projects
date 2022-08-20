// -----------------------------------------------------
// Error handling -> Creating a custom error

async function getQuestions() {
  // const questionsResponse = await fetch("6.questions.json");
  const questionsResponse = await fetch("6.123questions.json");

  if (questionsResponse.status !== 200) {
    throw new Error("Error Fetching Data");
  }

  return (questionsData = await questionsResponse.json());
}

getQuestions()
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
