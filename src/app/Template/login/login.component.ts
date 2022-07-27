import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from 'src/app/Model/Email';
import { UserById } from 'src/app/Model/User';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { EventService } from 'src/app/Services/event.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthenticationService,private router:Router,
    private http:HttpClient,private userservice:UserService,private eventService:EventService) { }

  ngOnInit(): void {
  }

  login(forms){
//     this.auth.login(
// forms
//     )
//     .subscribe(success => {
//       if (success) {
//         this.router.navigate(['/home']);
//         this.reloadPage();
//       }
//     });
 this.eventService.getevent().subscribe((data)=>{console.log(data)})

  }

    reloadPage() {
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    }



}
