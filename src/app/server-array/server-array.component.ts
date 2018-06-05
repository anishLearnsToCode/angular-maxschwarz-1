import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-array',
  templateUrl: './server-array.component.html',
  styleUrls: ['./server-array.component.css']
})
export class ServerArrayComponent implements OnInit {

  servers = ['test server', 'default server', 'rollback server', 'internal testing serever'];

  addServer(serverName: string) {
    this.servers.push(serverName);
  }

  constructor() { }

  ngOnInit() {
  }

}
