import { Component, OnInit } from '@angular/core';
import { TransactionComponent } from '../transaction.component';

@Component({
  selector: 'app-listtransaction',
  templateUrl: './listtransaction.component.html',
  styleUrls: ['./listtransaction.component.css']
})
export class ListtransactionComponent implements OnInit {
  liste:number[];
  constructor() { }

  ngOnInit(): void {
    this.liste=[1,2,3]
  }

}
