"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// readline requires us to install something in node
// do a google search to figure this out!
//-> typescript node js cannot find readline or its cooresponding type declarations
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What day is it? ", function (answer) {
    console.log(`the day is: ${answer}.`);
    rl.close();
});
rl.question("What is your name? ", (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
});
let dow = 0;
rl.question("Enter day of week: ", (dowStr) => {
    dow = parseInt(dowStr);
    rl.close();
});
console.log("Outside block: day of week: " + dow);
