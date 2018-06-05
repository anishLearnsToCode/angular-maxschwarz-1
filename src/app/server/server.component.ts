import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  startServer() {
    this.serverStatus = 'online';
  }
  stopServer() {
    this.serverStatus = 'offline';
  }

  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }

  ngOnInit() {
  }

  getServerStatus(serverId: number) {
    return serverId > 10 ? 'running' : 'offline' ;
  }

}
