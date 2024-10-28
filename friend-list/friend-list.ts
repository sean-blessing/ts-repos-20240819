import { Friend } from "./friend";

let friends: Friend[] = [];

let f1: Friend = new Friend("Dave Grohl", 55, "dave@ff.com");
let f2: Friend = new Friend("Pat Smear", 61, "pat@ff.com");

friends.push(f1);
friends.push(f2);

console.log(friends);
