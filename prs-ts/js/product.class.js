"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id = 0, vendor, partNumber = "", name = "", price = 0.0, unit = "", photoPath = "") {
        this.id = id;
        this.vendor = vendor;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
    }
}
exports.Product = Product;
