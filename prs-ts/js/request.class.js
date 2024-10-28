"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request {
    constructor(id = 0, user, requestNumber = "", description = "", justification = "", dateNeeded = new Date(), deliveryMode = "", status = "", submittedDate = new Date(), reasonForRejection = "") {
        this.id = id;
        this.user = user;
        this.requestNumber = requestNumber;
        this.description = description;
        this.justification = justification;
        this.dateNeeded = dateNeeded;
        this.deliveryMode = deliveryMode;
        this.status = status;
        this.submittedDate = submittedDate;
        this.reasonForRejection = reasonForRejection;
    }
}
exports.Request = Request;
