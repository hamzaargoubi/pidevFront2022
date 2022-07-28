import { Account } from "./Account";

export class Transaction{
  receipient: Account;
  source: Account;
  amount: number;
  description:string;
  approved: boolean;
}
