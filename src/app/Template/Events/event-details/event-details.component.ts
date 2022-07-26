import { CommentService } from './../../../Services/comment.service';
import { Comment } from './../../../Model/Comment';
import { Commentd } from './../../../Model/Commentd';
import { Event } from 'src/app/Model/Event';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompileEntryComponentMetadata } from '@angular/compiler';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:Event;
  comment:Comment;
  comt= new Commentd();
  myDate = new Date().toString();

  constructor() {

  }

  ngOnInit(): void {

  }
  getEventID(){
  }
  getcomments(){
   // this.cs.getComments(this.event.id).subscribe((data:Comment)=>{this.comment=data;console.log(data)})
  }
  addcomments(description){

    }

/*getcomments2(){
      this.cs.getComments(this.route2.snapshot.params.id).subscribe((da)=>{
       // console.log(data['hydra:member'])
        this.comment=da['hydra:member'];
        console.log(da['hydra:member']);
      },err=>{
        console.log('error',err);
        });

    }*/

}
