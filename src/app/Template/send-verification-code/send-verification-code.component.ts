import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/Model/Email';

@Component({
  selector: 'app-send-verification-code',
  templateUrl: './send-verification-code.component.html',
  styleUrls: ['./send-verification-code.component.css']
})
export class SendVerificationCodeComponent implements OnInit {

  email:Email;
  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(){
console.log(this.email);
  }
}
