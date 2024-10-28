"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = void 0;
class Friend {
    constructor(name = "", age = 0, email = "", bff = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
}
exports.Friend = Friend;
