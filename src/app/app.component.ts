import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world app';
  name = 'anish sachdeva';
  allowNewServer = false;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
