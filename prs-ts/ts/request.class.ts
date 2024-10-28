import { User } from "./user.class";

export class Request {
  id: number;
  user?: User;
  requestNumber: string;
  description: string;
  justification: string;
  dateNeeded: Date;
  deliveryMode: string;
  status: string;
  submittedDate: Date;
  reasonForRejection: string;

  constructor(
    id: number = 0,
    user?: User,
    requestNumber: string = "",
    description: string = "",
    justification: string = "",
    dateNeeded: Date = new Date(),
    deliveryMode: string = "",
    status: string = "",
    submittedDate: Date = new Date(),
    reasonForRejection: string = ""
  ) {
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
