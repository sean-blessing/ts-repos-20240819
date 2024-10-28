console.log("Welcome to the PRS TS App!");
import promptSync from "prompt-sync";
import { User } from "./user.class";
const prompt = promptSync();
let users: User[] = [];

// create some instances of users
// get user input for the values of our users
console.log("\nGet values for a User:");
console.log("======================");
let id: number = parseInt(prompt("ID: "));
let username: string = prompt("Username: ");
let password: string = prompt("Password: ");
let firstName: string = prompt("FirstName: ");
let lastName: string = prompt("LastName: ");
let phoneNumber: string = prompt("PhoneNumber: ");
let email: string = prompt("Email: ");
let u1: User = new User(id, username, password, firstName, lastName, phoneNumber, email);

// store them in a list of users
users.push(u1);

// print the users to the console
console.log("\nUsers:");
console.log("=======");
for (let user of users) {
    console.log(user);
}

// create a vendor



console.log("Bye");
