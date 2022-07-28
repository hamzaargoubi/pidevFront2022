import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Model/Transaction';

@Component({
  selector: 'app-transaction-element',
  templateUrl: './transaction-element.component.html',
  styleUrls: ['./transaction-element.component.css']
})
export class TransactionElementComponent implements OnInit {
  @Input() transaction : Transaction;
  @Input() recipient: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
