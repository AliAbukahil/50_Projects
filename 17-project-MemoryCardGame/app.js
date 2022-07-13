const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;

const flipCard = function () {
  // the this keyword points to the exact point where the user is clicking
  this.classList.toggle("flip");

  // not operator ! opposite of false
  if (!cardIsFlipped) {
    // First Click ––>> first Card
    cardIsFlipped = true;
    firstCard = this;
  } else {
    // First Click ––>> first Card
    cardIsFlipped = false;
    secondCard = this;

    // checking whether the card matches
  }
};

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
