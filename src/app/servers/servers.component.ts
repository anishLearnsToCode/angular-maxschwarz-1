import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServerConnection = false;
  serverCreationStatus = 'No server created !';

  createServer() {
    this.serverCreationStatus = 'Server was created ';
  }

  onUpdateServerName(event: Event) {
    console.log(event.target.value);
    this.serverCreationStatus = event.target.value;
  }

  constructor() {
    setTimeout(() => {
      this.allowServerConnection = true;
      console.log(this.allowServerConnection);
    }, 2000);
  }

  ngOnInit() {
  }

}
