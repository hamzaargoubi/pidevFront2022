import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  urlaudit = "http://localhost:8000/api/audits";
  constructor(private http:HttpClient) { }

  addaudits(data){
    return this.http.post(this.urlaudit,data)
  }
}
