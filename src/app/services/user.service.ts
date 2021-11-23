import { Injectable } from '@angular/core';
import User from "../classes/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setUserToken(token: string) {
    localStorage.setItem("token", token);
  }

  setUserSession(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserFromSession() : User {
    const user : User = JSON.parse(<string>localStorage.getItem("user"));

    return user;
  }

  clearUserSession() {
    localStorage.clear();
  }
}
