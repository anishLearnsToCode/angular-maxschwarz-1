import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServerConnection = false;

  constructor() {
    setTimeout(() => {
      this.allowServerConnection = true;
      console.log(this.allowServerConnection);
    }, 2000);
  }

  ngOnInit() {
  }

}
