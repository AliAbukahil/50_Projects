const strengthener = document.querySelector(".strengthener");
/* Selecting the input element through type attribute */
const passwordInput = document.querySelector('input[type="text"]');
const passwordCheck = document.querySelector(".password-check");

passwordInput.addEventListener("input", updateStrengthener);

function updateStrengthener() {
  const assessments = calculatePasswordStrength(passwordInput.value);

  let strength = 100;
  passwordCheck.innerHTML = "";

  assessments.forEach((assessment) => {
    if (assessment == null) return;

    strength -= assessment.strengthLost;
    const pwdCheckEl = document.createElement("p");
    pwdCheckEl.innerHTML = assessment.pwdCheck;
    passwordCheck.appendChild(pwdCheckEl);
  });

  strengthener.style.setProperty("--strength-amount", strength);
}

function calculatePasswordStrength(password) {
  const assessment = [];
  assessment.push(lengthAssessment(password));
  return assessment;
}

function lengthAssessment(password) {
  const length = password.length;

  if (length <= 5) {
    return {
      pwdCheck: "Password is too short",
      strengthLost: 40,
    };
  }

  if (length <= 10) {
    return {
      pwdCheck: "Password could be longer",
      strengthLost: 15,
    };
  }
}
