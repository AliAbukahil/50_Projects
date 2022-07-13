const cards = document.querySelectorAll(".memory-card");

// State management
let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

const flipCard = function () {
  // if lockBoard is true
  if (lockBoard) return;

  // for the double click on the card
  if (this === firstCard) return;

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

  resetBoard();
}

function unFlipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1100);
}

// for the double click on the card
function resetBoard() {
  // Destructuring assignment
  [cardIsFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// IIFE ––> Immediately Invoked Function Expression => function is called
// Immediately after its definition

// Shuffling the Deck of functions
(function shuffle() {
  cards.forEach((card) => {
    let randomPositions = Math.floor(Math.random() * 12);
    card.style.order = randomPositions;
  });
})();

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
