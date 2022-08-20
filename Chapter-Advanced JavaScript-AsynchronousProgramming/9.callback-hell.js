const getQuestionsBtn = document.querySelector("button");
const questionsContainer = document.querySelector(".q-container");

getQuestionsBtn.addEventListener("click", getQuestions);

/* Old School of doing XMLHttpRequest object and the callback hell */

function getQuestions() {
  let getQuestionData = (questions, callBack) => {
    // Step 1
    const data = new XMLHttpRequest();

    // Step 3
    data.addEventListener("readystatechange", function () {
      if (this.status === 200 && this.readyState === 4) {
        const questionsRetrieved = JSON.parse(this.responseText);
        return callBack(undefined, questionsRetrieved);
      }

      if (this.readyState === 4) {
        return callBack("Error Fetching Data", undefined);
      }
    });

    // Step 2
    data.open("GET", questions, true);

    // step4
    data.send();
  };

  // The Definition of callback hell
  getQuestionData("questions/6.questions1-2.json", (error, questionsData) => {
    console.log(questionsData);

    getQuestionData("questions/6.questions3-4.json", (error, questionsData) => {
      console.log(questionsData);

      getQuestionData(
        "questions/6.questions5-6.json",
        (error, questionsData) => {
          console.log(questionsData);

          getQuestionData(
            "questions/6.questions7-8.json",
            (error, questionsData) => {
              console.log(questionsData);

              getQuestionData(
                "questions/6.questions9-10.json",
                (error, questionsData) => {
                  console.log(questionsData);
                }
              );
            }
          );
        }
      );
    });
  });
}
