import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Model/Account';
import { Transaction } from 'src/app/Model/Transaction';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe( 
      (transactions:Transaction[])  => {
        this.transactions = transactions;
        console.log(transactions)
      });
  }
  
  delete(id:any):void{
    this.transactionService.deleteTransaction(id)
    .subscribe(

      (data)=>{console.log("success")
    }, 
    (error)=>{console.log(error.message)}
    );

  }

}
