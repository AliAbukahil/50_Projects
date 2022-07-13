const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;

const flipCard = function () {
  // the this keyword points to the exact point where the user is clicking
  this.classList.toggle("flip");

  // not operator ! opposite of false
  if (!cardIsFlipped) {
    cardIsFlipped = true;
    firstCard = this;
  } else {
    cardIsFlipped = false;
    secondCard = this;
  }
};

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
