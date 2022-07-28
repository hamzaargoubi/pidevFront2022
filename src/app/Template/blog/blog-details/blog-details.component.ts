import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/Model/Blog';
import { Comment } from 'src/app/Model/Comment';
import { CommentService } from 'src/app/Services/comment.service';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog:Blog;
  comments:Comment[];
  comment : Comment;
  constructor(private postservice:PostServiceService, private commentService:CommentService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.blog = new Blog();
    this.comment = new Comment();
    this.postservice.getPostById(this.ar.snapshot.params.id).subscribe((data : Blog) => {this.blog = data;});
    this.displayComments(this.ar.snapshot.params.id);
  }

  displayComments(idpost:number){
    this.postservice.getComments(idpost).subscribe(( data:  Comment[])=>this.comments= data); 
   }

   addComment(){
    console.log(this.comment);
    this.postservice.addComment(this.comment,this.ar.snapshot.params.id);
  }

  }

  