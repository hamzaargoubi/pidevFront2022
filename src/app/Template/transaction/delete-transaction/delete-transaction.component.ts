import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css']
})
export class DeleteTransactionComponent implements OnInit {
  id : string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ;
      if (this.id) {
        this.deleteTransaction();
      }
    });
  }

  deleteTransaction(): void {
    this.transactionService.deleteTransaction(this.id)
      .subscribe(
        () => {
          this.router.navigate(['/transactionList']);
          // Handle success, e.g., show success message or navigate to a different page
        },
        (error: any) => {
          
          console.error('Error deleting transaction:', error);
          this.router.navigate(['/transactionList']);
          // Handle error, e.g., show error message
        }
      );
  }

}
