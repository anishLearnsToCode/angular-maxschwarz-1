import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username = 'johndoe';

  isValidUserName() {
    return this.username.length > 0 ;
  }

  constructor() { }

  ngOnInit() {
  }

}
