const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income-tracker");
const expenseEl = document.querySelector("#expense-tracker");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income-tracker .list");
const expenseList = document.querySelector("#expense-tracker .list");
const allList = document.querySelector("#all .list");
const lists = document.querySelectorAll(".list");

// Tabs
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// Input Buttons
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.querySelector("#expense-title-input");
const expenseAmount = document.querySelector("#expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.querySelector("#income-title-input");
const incomeAmount = document.querySelector("#income-amount-input");

// Necessary Variables
//let Entry_LIST = [];
let Entry_LIST;
let [balance, income, outcome] = [0, 0, 0]; // destructuring assignment
let [deleteIcon, editIcon] = ["fas fa-trash", "far fa-edit"]; // destructuring assignment

// Whenever json.parse() is used, this means we're changing
// json lang into javascript Object or value
Entry_LIST = JSON.parse(localStorage.getItem("entry-list")) || [];
updateUI();

// expenseBtn Event listener
expenseBtn.addEventListener("click", function () {
  show(expenseEl);
  hide([incomeEl, allList]);
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
});

// incomeBtn Event listener
incomeBtn.addEventListener("click", function () {
  show(incomeEl);
  hide([expenseEl, allList]);
  active(incomeBtn);
  inactive([expenseBtn, allBtn]);
});

// allBtn Event listener
allBtn.addEventListener("click", function () {
  show(allList);
  hide([incomeEl, expenseEl]);
  active(allBtn);
  inactive([incomeBtn, expenseBtn]);
});

// addExpanse Event Listener
addExpense.addEventListener("click", budgetOut);

// addIncome Event Listener
addIncome.addEventListener("click", budgetIn);

// Lists Event Listener
lists.forEach(function (list) {
  list.addEventListener("click", function (e) {
    // console.log(e.target.localName);
    // console.log(e.target.attributes.class.value);
    // console.log(e.target.parentNode.parentNode);

    if (e.target.localName !== "i") return;
    let targetBtn = e.target.attributes.class.value;
    let entry = e.target.parentNode.parentNode;
    let targetId = entry.attributes.id.value;
    console.log(targetId);
  });
});

// addExpense / addIncome Enter key Event Listener
document.addEventListener("keypress", function (e) {
  // !== is not equal
  if (e.key !== "Enter") return;
  budgetOut(e);
  budgetIn(e);
});

// budgetOut Function
function budgetOut(e) {
  e.preventDefault();
  if (!expenseTitle.value || !expenseAmount.value) return;

  let expense = {
    type: "expense",
    title: expenseTitle.value,
    amount: parseInt(expenseAmount.value), // parseInt to convert a String to a number
  };

  Entry_LIST.push(expense);

  updateUI();
  clearInput([expenseTitle, expenseAmount]);
}

// budgetIn Function
function budgetIn(e) {
  e.preventDefault();
  if (!incomeTitle.value || !incomeAmount.value) return;

  let income = {
    type: "income",
    title: incomeTitle.value,
    amount: parseFloat(incomeAmount.value), // parseFloat to convert a String to a number
  };

  Entry_LIST.push(income);

  updateUI();
  clearInput([incomeTitle, incomeAmount]);
}

// updateUI Function
function updateUI() {
  income = calculateTotal("income", Entry_LIST);
  outcome = calculateTotal("expense", Entry_LIST);
  balance = Math.abs(calculateBalance(income, outcome));

  let sign = income >= outcome ? "$" : "-$";

  // Updating the UI
  balanceEl.innerHTML = `<p>${sign}</p><p>${balance}</p>`;
  incomeTotalEl.innerHTML = `<p>$</p><p>${income}</p>`;
  outcomeTotalEl.innerHTML = `<p>$</p><p>${outcome}</p>`;

  clearElement([expenseList, incomeList, allList]);

  // Printing in the List ul
  Entry_LIST.forEach((entry, index) => {
    if (entry.type === "expense") {
      showEntry(expenseList, entry.type, entry.title, entry.amount, index);
    } else if (entry.type === "income") {
      showEntry(incomeList, entry.type, entry.title, entry.amount, index);
    }

    showEntry(allList, entry.type, entry.title, entry.amount, index);
  });

  updateChart(income, outcome);

  localStorage.setItem("entry-list", JSON.stringify(Entry_LIST));
}

// clearElement Function
function clearElement(elements) {
  elements.forEach((element) => {
    element.innerHTML = "";
  });
}

// showEntry Function
function showEntry(list, type, title, amount, id) {
  const entry = `<li id="${id}" class="${type}">
                    <div class="entry">${title}: $${amount}</div>
                    <div class="action">
                      <i class="far fa-edit"></i>
                      <i class="fas fa-trash"></i>
                    </div>
              </li>`;
  const position = "afterbegin";
  list.insertAdjacentHTML(position, entry);
}

// ClearInput Function
function clearInput(inputs) {
  inputs.forEach((input) => {
    input.value = "";
  });
}

// calculateTotal Function
function calculateTotal(type, list) {
  let sum = 0;
  list.forEach((entry) => {
    if (entry.type === type) {
      sum += entry.amount;
    }
  });
  return sum;
}

// calculateBalance Function
function calculateBalance(income, outcome) {
  return income - outcome;
}

// show Function
function show(element) {
  element.classList.remove("hide");
}

// hide Function
function hide(elements) {
  elements.forEach((element) => {
    element.classList.add("hide");
  });
}

// active Function
function active(element) {
  element.classList.add("active");
}

// inactive Function
function inactive(elements) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}
