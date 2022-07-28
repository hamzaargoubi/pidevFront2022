import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Model/Blog';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  urlpost="http://localhost:8081";
  private httpOptions: any;

  constructor(private http : HttpClient) {

  }

  getPostById(id):Observable<any>{
    return this.http.get(this.urlpost+"/post/"+id);
  }
  getPosts():Observable<any>{
      return this.http.get(this.urlpost+"/post/");
    }
   addPost(data:Blog,file: File){
    const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('text',data.text);
      formData.append('title',data.title);
      const url = new HttpRequest('POST', this.urlpost+"/post/", formData, {
        reportProgress: true,
        responseType: 'json'
      });
      return this.http.request(url);
    // return this.http.post(this.urlpost+"/post/",data);
   }
   getComments(idpost):Observable<any>{
    return this.http.get(this.urlpost+"/comment/post-comments/"+idpost);
  }
 addComment(data,idPost){
  console.log('test')
  return this.http.post(this.urlpost+"/comment/"+idPost,data);

 }
  }
