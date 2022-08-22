/* function firstAction(callBack, message, anotherCallback) {
  console.log(message);
  setTimeout(callBack, 2000);
  anotherCallback();
}

function secondAction(message) {
  console.log(message);
}

function thirdAction() {
  console.log("I'm the third action");
}

setTimeout(
  () =>
    firstAction(
      () => secondAction("I'm the second action"),
      "I'm the first action",
      thirdAction
    ),
  5000
);
 */

///////////////////////**************************//////////////////////////

/* 
* 0 or more matches
+ 1 or more matches
? 0 or 1 match
^ matches the start of the string or line
$ matches the end of the string or line
\ signifies an escape sequence
. matches any single character except newline
( ) capturing group. Save to reuse later
| used as a logic OR inside a capturing group
[abc] character set. Matches one of the things in the brackets
[^abc] Negated character set. Matches anything except...
[a-zA-Z] all upper and lowercase letters. You can specify any range.
{1} exact number of matches. Comes after a set or group.
{1,5} inclusive range for number of matches
{1,} minimum number of matches
{,5} maximum number of matches
\s any whitespace character
\S any NON whitespace character
\d any digit. Same as [0-9]
\D any NON digit
\w any word character. Same as [a-zA-Z0-9_]
\W any NON word character. Same as [^a-za-z0-9_]

*/

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// creating the regular expression for testing the password value
const formValidator = /^(?=\D{8})(?=\D*\d{2})/;

usernameInput.addEventListener("input", validate);
passwordInput.addEventListener("input", validate);

function validate(eventObj) {
  if (eventObj.target.id === "username") {
    if (eventObj.target.value.length > 3) {
      eventObj.target.classList.add("valid");
      eventObj.target.classList.remove("invalid");
    } else {
      eventObj.target.classList.add("invalid");
      eventObj.target.classList.remove("valid");
    }
  }

  if (eventObj.target.id === "password") {
    if (formValidator.test(eventObj.target.value)) {
      eventObj.target.classList.add("valid");
      eventObj.target.classList.remove("invalid");
    } else {
      eventObj.target.classList.add("invalid");
      eventObj.target.classList.remove("valid");
    }
    // console.log(eventObj.target.value);
  }
}
