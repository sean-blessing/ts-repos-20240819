"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleIO = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class ConsoleIO {
    getWholeNumber(promptStr) {
        let nbr = 0;
        let success = false;
        while (!success) {
            console.log();
            let strInput = prompt(promptStr);
            nbr = Number(strInput);
            if (!isNaN(nbr) && Number.isInteger(nbr)) {
                success = true;
            }
            else {
                console.log("Invalid entry. Must be a whole number. Try again.");
            }
        }
        return nbr;
    }
    getString(promptStr, vals) {
        let str = "";
        let success = false;
        while (!success) {
            str = prompt(promptStr);
            if (vals.includes(str.toLocaleLowerCase())) {
                success = true;
            }
            else {
                console.log(`Invalid entry. Must be in acceptable values: ${vals}.`);
            }
        }
        return str;
    }
    printHeader(headerStr) {
        console.log(headerStr);
        let lineBreak = "";
        for (const char of headerStr) {
            lineBreak += "-";
        }
        console.log(lineBreak);
    }
}
exports.ConsoleIO = ConsoleIO;
