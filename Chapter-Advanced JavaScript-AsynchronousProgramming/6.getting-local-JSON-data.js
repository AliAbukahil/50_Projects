// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

const questionsBtn = document.querySelector("button");
const questionsContainer = document.querySelector(".questions-container");

questionsBtn.addEventListener("click", getQuestions);

/* This Is Asynchronous Code */

function getQuestions() {
  const newXHRObject = new XMLHttpRequest();
  // console.log(newXHRObject);

  // step 2) setting up the request
  newXHRObject.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  // step 3) what we want to do when we get the request.
  newXHRObject.onload = function () {
    // console.log(this);
    if (this.status === 200 && this.readyState === 4) {
      let questions = JSON.parse(this.responseText); // JSON.parse() needed so the Date can be readable in JavaScript
      let questionResult = "";

      questions.forEach((question) => {
        console.log(question);

        questionResult += `
        <ul>
          <p>${question.name}</p>
            <li>${question.phone}</li>
            <li>${question.website}</li>
            <li>${question.email}</li>
            <h4>${question.company.name}</h4>
              <h5>${question.company.catchPhrase}</h5>
        </ul>
        `;
      });
      questionsContainer.innerHTML = questionResult;
    }
  };

  // step 4) sending the request
  newXHRObject.send();
}

// // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

// const questionsBtn = document.querySelector("button");
// const questionsContainer = document.querySelector(".questions-container");

// questionsBtn.addEventListener("click", getQuestions);

// /* This Is Asynchronous Code */

// function getQuestions() {
//   const newXHRObject = new XMLHttpRequest();
//   // console.log(newXHRObject);

//   // step 2) setting up the request
//   newXHRObject.open("GET", "6.questions.json", true);

//   // step 3) what we want to do when we get the request.
//   newXHRObject.onload = function () {
//     // console.log(this);
//     if (this.status === 200 && this.readyState === 4) {
//       let questions = JSON.parse(this.responseText); // JSON.parse() needed so the Date can be readable in JavaScript
//       let questionResult = "";

//       questions.forEach((question) => {
//         questionResult += `
//         <ul>
//           <p>${question.question}</p>
//             <li>${question.choiceA}</li>
//             <li>${question.choiceB}</li>
//             <li>${question.choiceC}</li>
//             <li>${question.choiceD}</li>
//         </ul>
//         `;
//       });

//       questionsContainer.innerHTML = questionResult;
//     }
//   };

//   // step 4) sending the request
//   newXHRObject.send();
// }
