import { Component, OnInit } from '@angular/core';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css']
})
export class InfoContainerComponent implements OnInit {

  buttonText = 'Show Details';
  informationShow = false;
  counter = 0;
  counterArray = [];

  buttonClick() {
    this.informationShow = !this.informationShow;
    this.buttonText = this.informationShow ? 'Hide Details' : 'Show Details';
    this.counter++;
    // this.counterArray.push(this.counter);
    this.counterArray.push(new Date());
    console.log(this.counter);
  }

  getColor() {
    return this.counter >= 5 ? 'blue' : 'white';
  }

  isCounterGreaterThan(number) {
    return this.counter >= number;
  }

  constructor() { }

  ngOnInit() {
  }

}
