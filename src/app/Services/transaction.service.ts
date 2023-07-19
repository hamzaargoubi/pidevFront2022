import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../Model/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }
  url="http://127.0.0.1:8081/transaction/"


  getTransactionByUUID(uuid){
  return  this.http.get(this.url+uuid)
  }

  addTransaction(transaction){
    return this.http.post(this.url,transaction);
  }

  updateTransaction(transaction) {
    return this.http.put(this.url,transaction)
  }

  getTransactions(){
    return this.http.get(this.url)
  }

  deleteTransaction(id) {
    return this.http.delete(this.url+id)
  }

  // updateUser(transaction){
  //   return this.http.post(this.url,transaction);
  // }
}
