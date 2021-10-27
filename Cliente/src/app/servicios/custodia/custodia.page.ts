import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custodia',
  templateUrl: './custodia.page.html',
  styleUrls: ['./custodia.page.scss'],
})
export class CustodiaPage implements OnInit {
  currentNumber = 0;

  increment() {
    this.currentNumber++;
 }
 
 decrement() {
    if (this.currentNumber > 0) {
       this.currentNumber--;
    }
 }

  constructor() { }

  ngOnInit() {
  }

}
