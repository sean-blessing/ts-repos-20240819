"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(side = 0) {
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
