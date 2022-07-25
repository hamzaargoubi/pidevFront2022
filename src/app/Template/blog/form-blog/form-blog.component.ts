import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/Blog';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent implements OnInit {
  blog: Blog;
  constructor() { }

  ngOnInit(): void {
    this.blog=new Blog();
  }

}
