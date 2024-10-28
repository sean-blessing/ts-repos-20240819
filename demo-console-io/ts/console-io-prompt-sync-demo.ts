import promptSync from "prompt-sync";
//npm i --save-dev @types/prompt-sync

const prompt = promptSync();
let str1: string = prompt("Enter your name: ");
let dow: number = parseInt(prompt("Enter day of week: "));
let price: number = parseFloat(prompt("Enter price: "));

console.log("Variables:", str1, dow, price);
