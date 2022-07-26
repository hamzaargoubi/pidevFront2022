import { EventD } from './../../../Model/EventD';
import { Event } from 'src/app/Model/Event';
import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Association } from 'src/app/Model/Association';
@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})

export class FormEventComponent implements OnInit {

  imageBase64: any;
  imageBase641:any;
  imageBase642:any;
  imageBase643:any;
  dateEvent: NgbDateStruct;
  events:EventD;
  assoctiations:Association[];
  publicValue:string;
  typevalue:string;
  assocValue:string;

  constructor() { }

  ngOnInit(): void {
  }

  addevent(events) {
    // events.image1 = this.imageBase64;
    // events.image2 = this.imageBase641;
    // events.image3=this.imageBase642;
    // events.image4=this.imageBase643;
    // this.eventser.addevent(events).subscribe((data)=>{
    //   console.log(data)
    //   alert("Event Added" )
    //   this.route.navigate(["home"])
    //})
  }

    handleUpload(event) {
      // const file = event.target.files[0];
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //     this.imageBase64 = reader.result;
      // };
  }
  handleUpload1(event) {
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //     this.imageBase641 = reader.result;
    // };
}
handleUpload2(event) {
  // const file = event.target.files[0];
  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // reader.onload = () => {
  //     this.imageBase642 = reader.result;
  // };
}
handleUpload3(event) {
  // const file = event.target.files[0];
  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // reader.onload = () => {
  //     this.imageBase643 = reader.result;
  // };
}
}
