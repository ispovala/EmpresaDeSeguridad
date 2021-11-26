import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';

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

 constructor(private navCtrl: NavController,private modalController: ModalController){
    
}
solicitud(){
  this.navCtrl.navigateForward("/servicios/n/solicitud");
  
}
cancelar(){
  this.navCtrl.navigateForward("/servicios");
}
  ngOnInit() {

  }

  async addDirection() {

    let positionInput = {  
      lat: -2.1676746,
      lng: -79.8956897
    };

    const modalAdd  = await this.modalController.create({
      component: UbicacionComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {position: positionInput}
    });
    await modalAdd.present();

    const {data} = await modalAdd.onWillDismiss();
    if (data) {
      console.log('data -> ', data);
    }

  }

}
