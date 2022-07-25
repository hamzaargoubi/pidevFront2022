import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  comments = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }
  addcomment(description){

  }
}
