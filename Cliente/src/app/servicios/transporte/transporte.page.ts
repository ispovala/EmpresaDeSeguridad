import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';


@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {
  item="transporte"
 
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
