import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';

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
 
 constructor(private navCtrl: NavController, private modalController: ModalController){
    
}
cancelar(){
  this.navCtrl.navigateForward("/servicios");
}
solicitud(){
  this.navCtrl.navigateForward("/servicios/n/solicitud");
  
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
