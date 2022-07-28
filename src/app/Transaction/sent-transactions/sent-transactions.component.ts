import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Model/Transaction';

@Component({
  selector: 'app-sent-transactions',
  templateUrl: './sent-transactions.component.html',
  styleUrls: ['./sent-transactions.component.css']
})
export class SentTransactionsComponent implements OnInit {
  transactions : Transaction[];
  constructor() { }

  ngOnInit(): void {
  }

}
