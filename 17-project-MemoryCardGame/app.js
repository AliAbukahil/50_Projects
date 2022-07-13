const cards = document.querySelectorAll(".memory-card");

// State management
let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

const flipCard = function () {
  // if lockBoard is true
  if (lockBoard) return;

  // the this keyword points to the exact point where the user is clicking
  // this.classList.toggle("flip");
  this.classList.add("flip");

  // not operator ! opposite of false
  if (!cardIsFlipped) {
    // First Click ––>> first Card
    cardIsFlipped = true;
    firstCard = this;
    return;
  }
  // First Click ––>> first Card
  cardIsFlipped = false;
  secondCard = this;

  checkForMatch();
};

function checkForMatch() {
  // if (firstCard.dataset.name === secondCard.dataset.name) {
  //   // a callback function
  //   disableCards();
  // } else {
  //   // a callback function
  //   unFlipCards();
  // }

  // (ternary) operator shorter cleaner
  let isMatched = firstCard.dataset.name === secondCard.dataset.name;
  isMatched ? disableCards() : unFlipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unFlipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1100);
}

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
