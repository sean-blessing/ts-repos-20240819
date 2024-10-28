"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friend_1 = require("./friend");
let friends = [];
let f1 = new friend_1.Friend("Dave Grohl", 55, "dave@ff.com");
let f2 = new friend_1.Friend("Pat Smear", 61, "pat@ff.com");
friends.push(f1);
friends.push(f2);
console.log(friends);
