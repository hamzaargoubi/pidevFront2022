import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlpost="http://localhost:8081/accounts";
  private httpOptions: any;

  constructor(private http : HttpClient) {

  }

  getUserAccount(id):Observable<any>{
    return this.http.get(this.urlpost+"/user-accounts/");
  }
  getOtherAccounts():Observable<any>{
      return this.http.get(this.urlpost+"/other-accounts/");
    }
  }
