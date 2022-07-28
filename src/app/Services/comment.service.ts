import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
urlcomment="http://localhost:8081/commment/";
  constructor(private http : HttpClient) { }

  getComments(idpost):Observable<any>{
      return this.http.get(this.urlcomment+"post-comments/"+idpost);
    }
   addComment(data,idPost){
    console.log('test')
    return this.http.post(this.urlcomment+idPost,data);

   }
   

  }

