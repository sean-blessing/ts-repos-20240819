"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(id = 0, request, product, quantity = 0) {
        this.id = id;
        this.request = request;
        this.product = product;
        this.quantity = quantity;
    }
}
exports.LineItem = LineItem;
