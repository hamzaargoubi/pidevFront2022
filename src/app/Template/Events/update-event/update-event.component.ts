import { EventService } from './../../../Services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventD } from './../../../Model/EventD';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Association } from 'src/app/Model/Association';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  dateEvent: string
  event:EventD;
  assoctiations:Association[];
  publicValue;
  typevalue:string;
  assocValue:any;
  typeEvent:any;
  publicEvent;
  association;
  descriptionEvent;
  titleEvent

  imageBase64: any;
  imageBase641:any;
  imageBase642:any;
  imageBase643:any;


  constructor(private router:ActivatedRoute, private es:EventService, private rt:Router,private datePipe: DatePipe) {
    this.dateEvent = this.datePipe.transform(this.dateEvent, 'dd-MM-yyyy');
  }

  ngOnInit(): void {


  }
  updateEvente(d){

  }

  handleUpload(event) {
    
}
handleUpload1(event) {
  
}
handleUpload2(event) {

}
handleUpload3(event) {

}

}
