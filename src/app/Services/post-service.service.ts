import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  urlpost="http://localhost:8081";
  private httpOptions: any;

  constructor(private http : HttpClient) {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'mon-jeton',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      
    })
  }


  getPosts(idpost):Observable<any>{
      return this.http.get(this.urlpost+"/post/"+idpost);
    }
   addPost(data){
    return this.http.post(this.urlpost+"/post/",data);
   }
  }