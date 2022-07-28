import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Model/Account';
import { Transaction } from 'src/app/Model/Transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {
  transaction:Transaction;
  recipients:Account[];
  sources:Account[];
  sourceId:string;
  recipientId:string;
  constructor() { }

  ngOnInit(): void {
    this.transaction = new Transaction();
  }
  save(recipientId,sourceId){
    console.log(recipientId.sourceId);

  }

}
