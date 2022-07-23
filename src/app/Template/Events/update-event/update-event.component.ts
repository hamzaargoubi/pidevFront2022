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
this.es.geteventID(this.router.snapshot.params.id).subscribe((data:EventD)=>{
this.association=data.association;
this.dateEvent=data.dateEvent;
this.typeEvent=data.typeEvent;
this.descriptionEvent=data.descriptionEvent;
this.publicEvent=data.publicEvent;
this.titleEvent=data.titleEvent;

console.log(data)

    })
  }
  updateEvente(d){
d.image1=this.imageBase64
d.image2=this.imageBase641
d.image3=this.imageBase642
d.image4=this.imageBase643
    this.es.updateEvent(this.router.snapshot.params.id,d).subscribe(()=>{
      this.rt.navigate(['/events'])
      alert('Event Updated Succefuly')
    })
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imageBase64 = reader.result;
    };
}
handleUpload1(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
      this.imageBase641 = reader.result;
  };
}
handleUpload2(event) {
const file = event.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
    this.imageBase642 = reader.result;
};
}
handleUpload3(event) {
const file = event.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
    this.imageBase643 = reader.result;
};
}

}
