import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from 'src/app/Model/Email';
import { UserById } from 'src/app/Model/User';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user:UserById=new UserById();
  // email:Email=new Email();
  // id:string;
  constructor(private auth:AuthenticationService,private router:Router,private http:HttpClient,private userservice:UserService) { }

  ngOnInit(): void {
  }

  login(forms){
    this.auth.login(
forms
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
        this.reloadPage();
      }
    });
    // this.id=localStorage.getItem("id");
    // this.userservice.getUserById(this.id).subscribe((data:any)=>{
    //   this.user=data;
    // })
    // this.email.content="Welcome";
    // this.email.receiver=this.user.email;
    // this.http.post("http://localhost:8000/email",this.email);

  }

    reloadPage() {
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    }



}
