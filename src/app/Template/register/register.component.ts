import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  addUser(user) {
    user.client_type = "Individual";
    this.userService.addUser(user).subscribe();
    console.log(user);
    this.route.navigate(["login"])
  }


}
