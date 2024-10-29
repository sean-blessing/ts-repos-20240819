import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("Hello");

let name: string = prompt("What's your name? ");
console.log(`Hello ${name}`);

console.log("Bye");
