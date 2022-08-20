const getQuestionsBtn = document.querySelector("button");
const questionsContainer = document.querySelector(".q-container");

getQuestionsBtn.addEventListener("click", getData);

function getData() {
  let getQuestions = (questions) => {
    return new Promise((resolve, reject) => {
      const data = new XMLHttpRequest();

      data.addEventListener("readystatechange", function () {
        if (this.status === 200 && this.readyState === 4) {
          const questionsRetrieved = JSON.parse(data.responseText);
          return resolve(questionsRetrieved);
        }

        if (this.readyState === 4) {
          return reject("Error Fetching Data");
        }
      });

      data.open("GET", questions, true); // Setting up the request
      data.send(); // sending the request
    });
  };

  // Step 1
  //   getQuestions("questions/6.questions1-2.json")
  //     .then((quesitonsData) => {
  //       console.log("Questions 1-2:", quesitonsData);
  //     })
  //     .catch((error) => {
  //       console.log("Rejected:", error);
  //     });

  // Step 2
  getQuestions("questions/6.questions1-2.json")
    .then((questionsData) => {
      console.log("Question 1-2:", questionsData);
      return getQuestions("questions/6.questions3-4.json");
    })
    .then((questionsData) => {
      console.log("Question 3-4:", questionsData);
      return getQuestions("questions/6.questions5-6.json");
    })
    .then((questionsData) => {
      console.log("Question 5-6:", questionsData);
      return getQuestions("questions/6.questions7-8.json");
    })
    .then((questionsData) => {
      console.log("Question 7-8:", questionsData);
      return getQuestions("questions/6.questions9-10.json");
    })
    .then((questionsData) => {
      console.log("Question 9-10:", questionsData);
    })
    .catch((error) => {
      console.log(error);
    });
}
