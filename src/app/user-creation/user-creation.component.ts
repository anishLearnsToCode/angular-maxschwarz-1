import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  userName = 'johnDoe';

  constructor() { }

  ngOnInit() {
  }

}
