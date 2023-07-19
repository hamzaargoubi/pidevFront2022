import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/Model/Account';
import { Transaction } from 'src/app/Model/Transaction';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-trascform',
  templateUrl: './trascform.component.html',
  styleUrls: ['./trascform.component.css']
})
export class TrascformComponent implements OnInit {

  constructor(private transactionService:TransactionService, private router:Router) { }

  ngOnInit(): void {
    this.date = new Date();
  }
  emailRecipient : string;
  emailSource : string;
  amount : number;
  description : string;
  date : Date;

  showModal: boolean = false;





  transactionUpdate() {
    const transaction = new Transaction(new Account(null,null,this.emailSource),new Account(null,null,this.emailRecipient),
    this.amount,this.description,this.date); 
    console.log(transaction.source.email+"\n")
    console.log(transaction.recipient.email+"\n")
    console.log(transaction.amount+"\n")
    console.log(transaction.description+"\n")
    console.log(transaction.date+"\n");
    this.transactionService.addTransaction(transaction)
    .subscribe(
      response => {
        // Handle the response
        this.showModal = true;
        console.log('Post request successful:', response);
        
           },
      error => {
        // Handle the error
        this.showModal = true;
        console.error('Error occurred:', error);
      }
    );
    
  }
  closeModal() {
    // Close the success modal
    this.showModal = false;
    this.router.navigateByUrl('/transactionList');
    
  }
}
