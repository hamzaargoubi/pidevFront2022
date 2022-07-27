import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/Blog';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  @Input() blog:Blog;
  comments:Comment[];
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
  }
  DisplayComments(idpost:number){
    this.commentService.getComments(idpost).subscribe(( data:  Comment[])=>this.comments= data);  }

  addComment(test){
    console.log(test);
  }

  }

  