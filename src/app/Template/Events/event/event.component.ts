import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,Output } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any = [];

  term:any

  date:Date=new Date("2019-01-16");
  page =1;
  itemsPerPage = 3;
  totalItems: any;
  url = "http://localhost:8000/api/events?page=${page}";


  constructor() { }

  ngOnInit(): void {
    this.getEvent2();
  }
  getEvent2(){
  }
  getPage() {



  }
  delete(id){
    if(window.confirm('Are sure you want to delete this event ?')){


  }

}







/*loadevent(){
    this.es.getevent().subscribe((data) => {
      this.events = data['hydra:member'];
      console.log(data['hydra:member'
    ]); }); }*/
    /*getEvents(){
      this.es.getevent().subscribe((data)=>{
       // console.log(data['hydra:member'])
        this.events=data['hydra:member'];
        console.log(data['hydra:member']);
      },err=>{
        console.log('error',err);
        });
    getEvents(){
      this.es.getevent().subscribe((data)=>{this.events=data;console.log(data)})


    }*/
     }
