import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/Blog';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent implements OnInit {
  blog: Blog;
  constructor(private blogService : PostServiceService) { }

  ngOnInit(): void {
    this.blog=new Blog();
  }
  save(){
    this.blogService.addPost(this.blog).subscribe();
  }
}
