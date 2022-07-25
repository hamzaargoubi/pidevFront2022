import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() b:Blog;
 listelement:Blog[];
  constructor() { }

  ngOnInit(): void {
    this.listelement=[1,2,3,4,5,6]
  }

}
