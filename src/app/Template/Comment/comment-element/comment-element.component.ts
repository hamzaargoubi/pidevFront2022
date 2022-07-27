import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Model/Comment';

@Component({
  selector: 'app-comment-element',
  templateUrl: './comment-element.component.html',
  styleUrls: ['./comment-element.component.css']
})
export class CommentElementComponent implements OnInit {
@Input() comment:Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
