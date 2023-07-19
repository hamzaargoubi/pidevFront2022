import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/Model/Account';
import { Transaction } from 'src/app/Model/Transaction';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private datePipe: DatePipe
  ) { }
      id : string;
      emailRecipient : string;
      emailSource : string;
      amount : number;
      description : string;
      date : string;

  showModal: boolean = false;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ;
    });
    this.transactionService.getTransactionByUUID(this.id).subscribe((data:Transaction)=>{
      const unformatedDate = data.date
      this.date = this.datePipe.transform(unformatedDate, 'yyyy-MM-dd');
      this.emailRecipient = data.recipient.email
      this.emailSource = data.source.email
      this.amount = data.amount
      this.description=  data.description
    })
  }

  transactionUpdate() {
    const transaction = new Transaction(new Account(null,null,this.emailSource),new Account(null,null,this.emailRecipient),
    this.amount,this.description,this.date); 
    transaction.id = parseInt(this.id);
    console.log(transaction.source.email+"\n")
    console.log(transaction.recipient.email+"\n")
    console.log(transaction.amount+"\n")
    console.log(transaction.description+"\n")
    console.log(transaction.date+"\n");
    this.transactionService.updateTransaction(transaction)
    .subscribe(
      response => {
        // Handle the response
        this.showModal = true;
        console.log('update request successful:', response);
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
