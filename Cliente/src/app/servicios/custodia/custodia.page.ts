import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

 constructor(private navCtrl: NavController){
    
}
solicitud(){
  this.navCtrl.navigateForward("/servicios/n/solicitud");
  
}
cancelar(){
  this.navCtrl.navigateForward("/servicios");
}
  ngOnInit() {
  }

}
