import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  attemptUserLogin(): void {
    const data = {
      username: this.username,
      password: this.password
    }

    let token!: string;

    fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      this.userService.setUserToken(data.token);
      this.userService.setUserSession(data.user);
    });
  }

}
