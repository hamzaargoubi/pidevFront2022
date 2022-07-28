import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/Blog';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 listelement:Blog[];
  constructor(private postService:PostServiceService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data =>{ this.listelement=data;
    console.log(this.listelement)});

  }

}
