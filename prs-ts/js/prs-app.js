"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to the PRS TS App!");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const user_class_1 = require("./user.class");
const prompt = (0, prompt_sync_1.default)();
let users = [];
// create some instances of users
// get user input for the values of our users
console.log("\nGet values for a User:");
console.log("======================");
let id = parseInt(prompt("ID: "));
let username = prompt("Username: ");
let password = prompt("Password: ");
let firstName = prompt("FirstName: ");
let lastName = prompt("LastName: ");
let phoneNumber = prompt("PhoneNumber: ");
let email = prompt("Email: ");
let u1 = new user_class_1.User(id, username, password, firstName, lastName, phoneNumber, email);
// store them in a list of users
users.push(u1);
// print the users to the console
console.log("\nUsers:");
console.log("=======");
for (let user of users) {
    console.log(user);
}
console.log("Bye");
