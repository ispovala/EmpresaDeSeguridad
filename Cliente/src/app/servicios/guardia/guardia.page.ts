import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.page.html',
  styleUrls: ['./guardia.page.scss'],
})




export class GuardiaPage implements OnInit {
  currentNumber = 0;

  increment() {
    this.currentNumber++;
 }
 
 decrement() {
    if (this.currentNumber > 0) {
       this.currentNumber--;
    }
 }
 
  constructor() {
  
    
  }

  ngOnInit() {
  }

}
