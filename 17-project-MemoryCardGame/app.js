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
    if (firstCard.dataset.name === secondCard.dataset.name) {
      // it is a match ––> disable the cards
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      // ––> not a match ––> unFlip the Cards
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1100);
    }
  }
};

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
