let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard; //sum = 17

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Whoo! You've got Blackjack");
} else {
  console.log("You're out of the game!");
}
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
