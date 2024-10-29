"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function getWinnerMsg(count) {
    let msg = "";
    if (count <= 3) {
        msg = "Great work! You are a mathematical wizard.";
    }
    else if (count <= 7) {
        msg = "Not too bad! You've got some potential.";
    }
    else {
        msg = "What took you so long? Maybe you should take some lessons.";
    }
    return msg;
}
function getWholeNumber(promptStr) {
    let nbr = 0;
    let success = false;
    while (!success) {
        console.log();
        let strInput = prompt("Enter guess: ");
        nbr = Number(strInput);
        if (!isNaN(nbr) && Number.isInteger(nbr)) {
            success = true;
        }
        else {
            console.log("Invalid entry. Must be a whole number. Try again.");
        }
    }
    return nbr;
}
console.log("Welcome to the Guess the Number Game!");
console.log("+++++++++++++++++++++++++++++++++++++");
let choice = "y";
while (choice != "n") {
    let theNbr = getRandomNumber();
    console.log("\nI'm thinking of a number from 1 to 100.\nTry to guess it.");
    console.log("HINT: nbr is " + theNbr);
    let guess = 0;
    let count = 0;
    while (guess != theNbr) {
        console.log();
        guess = getWholeNumber("Enter guess: ");
        count++;
        let diff = guess - theNbr;
        if (diff < -10) {
            console.log("Way too low! guess again.");
        }
        else if (diff < 0) {
            console.log("Too low! guess again.");
        }
        else if (diff > 10) {
            console.log("Way too high! guess again.");
        }
        else if (diff > 0) {
            console.log("Too high! guess again.");
        }
        else {
            console.log(`You got it in ${count} tries.`);
            console.log(getWinnerMsg(count));
        }
    }
    console.log();
    choice = prompt("Try again? (y/n): ");
}
console.log("\nBye - Come back soon!");
