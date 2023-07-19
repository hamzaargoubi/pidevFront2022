import { Account } from "./Account";

export class Transaction {
  id:number;
  source : Account ;
  recipient : Account ;
  amount : number;
  description : string;
  date: Date = new Date();
  constructor(source:Account,recipient:Account,amount:number,description:string,date:Date ) {
    this.source=source;
    this.recipient = recipient;
    this.amount = amount;
    this.description = description;
    this.date = date;
  }

}