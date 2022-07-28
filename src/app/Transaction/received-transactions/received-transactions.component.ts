import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Model/Transaction';

@Component({
  selector: 'app-received-transactions',
  templateUrl: './received-transactions.component.html',
  styleUrls: ['./received-transactions.component.css']
})
export class ReceivedTransactionsComponent implements OnInit {

  constructor() { }
  transactions : Transaction[];
  ngOnInit(): void {
  }

}
