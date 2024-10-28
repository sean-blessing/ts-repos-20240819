import * as readline from "readline";
// readline requires us to install something in node
// do a google search to figure this out!
//-> typescript node js cannot find readline or its cooresponding type declarations


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What day is it? ", function(answer) {
    console.log(`the day is: ${answer}.`);
    rl.close();
});

rl.question("What is your name? ", (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});

let dow: number = 0;
rl.question("Enter day of week: ", (dowStr) => {
    dow = parseInt(dowStr);
    rl.close();
});

console.log("Outside block: day of week: "+dow);

