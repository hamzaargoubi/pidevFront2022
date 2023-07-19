import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  url="http://127.0.0.1:8000/accounts/"


  getAccountByEmail(email){
    return  this.http.post(this.url,email)
  }
}
