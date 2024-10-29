import promptSync from "prompt-sync";
const prompt = promptSync();

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getWinnerMsg(count: number): string {
  let msg: string = "";
  if (count <= 3) {
    msg = "Great work! You are a mathematical wizard.";
  } else if (count <= 7) {
    msg = "Not too bad! You've got some potential.";
  } else {
    msg = "What took you so long? Maybe you should take some lessons.";
  }
  return msg;
}

function getWholeNumber(promptStr: string): number {
  let nbr: number = 0;
  let success: boolean = false;
  while (!success) {
    console.log();
    let strInput: string = prompt("Enter guess: ");
    nbr = Number(strInput);
    if (!isNaN(nbr) && Number.isInteger(nbr)) {
      success = true;
    } else {
      console.log("Invalid entry. Must be a whole number. Try again.");
    }
  }
  return nbr;
}

console.log("Welcome to the Guess the Number Game!");
console.log("+++++++++++++++++++++++++++++++++++++");

let choice: string = "y";
while (choice != "n") {
  let theNbr = getRandomNumber();
  console.log("\nI'm thinking of a number from 1 to 100.\nTry to guess it.");
  console.log("HINT: nbr is " + theNbr);
  let guess: number = 0;
  let count: number = 0;
  while (guess != theNbr) {
    console.log();
    guess = getWholeNumber("Enter guess: ");
    count++;
    let diff = guess - theNbr;
    if (diff < -10) {
      console.log("Way too low! guess again.");
    } else if (diff < 0) {
      console.log("Too low! guess again.");
    } else if (diff > 10) {
      console.log("Way too high! guess again.");
    } else if (diff > 0) {
      console.log("Too high! guess again.");
    } else {
      console.log(`You got it in ${count} tries.`);
      console.log(getWinnerMsg(count));
    }
  }
  console.log();
  choice = prompt("Try again? (y/n): ");
}
console.log("\nBye - Come back soon!");
