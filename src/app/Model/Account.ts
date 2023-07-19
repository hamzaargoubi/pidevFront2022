export class Account {
  account_type:string;
  balance:number;
  email:string;

  constructor(account_type:string,balance:number,email:string) {
    this.account_type = account_type;
    this.balance = balance;
    this.email = email;
  }
}