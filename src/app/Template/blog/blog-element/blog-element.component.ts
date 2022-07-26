import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/Blog';

@Component({
  selector: 'app-blog-element',
  templateUrl: './blog-element.component.html',
  styleUrls: ['./blog-element.component.css']
})
export class BlogElementComponent implements OnInit {
  @Input() blog:Blog;
  constructor() { }

  ngOnInit(): void {
  }

}
