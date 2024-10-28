"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendor = void 0;
class Vendor {
    constructor(id = 0, code = "", name = "", address = "", city = "", state = "", zip = "", phoneNumber = "", email = "") {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
exports.Vendor = Vendor;
