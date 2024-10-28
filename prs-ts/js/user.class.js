"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id = 0, username = "", password = "", firstName = "", lastName = "", phoneNumber = "", email = "", reviewer = false, admin = false) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.reviewer = reviewer;
        this.admin = admin;
    }
}
exports.User = User;
