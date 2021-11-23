import { Component, OnInit } from '@angular/core';
import User from "../../classes/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user?: User;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUserFromSession();
    console.log(this.user);
  }

}
