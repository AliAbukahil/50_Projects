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
  assessment.push(lowercaseAssessment(password));
  assessment.push(uppercaseAssessment(password));
  return assessment;
}

// Length assessment Function
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

// lowercase Character assessment Function
function lowercaseAssessment(password) {
  return characterTypeAssessment(password, /[a-z]g/, "lowercase characters");
}

// uppercase Character assessment Function
function uppercaseAssessment(password) {
  return characterTypeAssessment(password, /[A-Z]g/, "uppercase characters");
}

// character Type Assessment Function
function characterTypeAssessment(password, regX, assessmentType) {
  const characterMatch = password.match(regX) || [];
  console.log(characterMatch);

  if (characterMatch.length === 0) {
    return {
      pwdCheck: `Password has no ${assessmentType}`,
      strengthLost: 20,
    };
  }

  if (characterMatch <= 2) {
    return {
      pwdCheck: `Password must have more ${assessmentType}`,
      strengthLost: 5,
    };
  }
}
