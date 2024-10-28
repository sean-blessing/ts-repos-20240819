"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
//npm i --save-dev @types/prompt-sync
const prompt = (0, prompt_sync_1.default)();
let str1 = prompt("Enter your name: ");
let dow = parseInt(prompt("Enter day of week: "));
let price = parseFloat(prompt("Enter price: "));
console.log("Variables:", str1, dow, price);
