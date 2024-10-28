import { Square } from "./square.class";
let nbr1: number = 11;
let admin: boolean = false;
let firstName: string = "George";
let price: number = 25.99;
let message: string = `Hello, ${firstName}, 
the price is \$${price}, ${nbr1} days left, and admin is ${admin}.
`;

console.log(message);

let movie = {
  id: 1,
  title: "Star Wars",
  year: 1977,
  rating: "PG",
  director: "George Lucas",
};

console.log(movie);

let evenNumbers: number[] = [2, 4, 6, 8, 10];
console.log("evenNumbers:", evenNumbers);

let nbrs: string = "";
for (let i = 0; i < evenNumbers.length; i++) {
  nbrs += evenNumbers[i] + ", ";
}
console.log(nbrs);

let a: any = 5;
a = "hello";

const DAYS_OF_WEEK: number = 7;

// Create a square
let s1: Square = new Square(5);
console.log("square area = " + s1.area());
