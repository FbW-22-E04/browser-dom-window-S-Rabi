"use strict";

let guess = -2;
// The loop for the program,
do {
  let randomNumber10 = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  for (
    attempts = 0;
    attempts < 3 && guess != randomNumber10 && guess != -1;
    attempts++
  ) {
    guess = prompt("Guess a number from 1-10:\n");
  }
  // To quit the program:
  if (guess == -1) break;
  if (guess == randomNumber10) {
    let output =
      "You guessed the right number!\n The number or tries was: " + attempts;
    alert(output);
    console.log(output);
  } else if (guess != randomNumber10) {
    let output =
      "Sorry. Wrong guesses.\n The correct number was:" +
      randomNumber10 +
      "\n Your tries: " +
      attempts;
    alert(output);
    console.log(output);
  }
} while (guess != -1);
