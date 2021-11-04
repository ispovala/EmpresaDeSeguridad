import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.page.html',
  styleUrls: ['./solicitud-servicio.page.scss'],
})
export class SolicitudServicioPage implements OnInit {
  value: string; 

  constructor(public navCtrl: NavController) {
    
  }
  ngOnInit() {
  }
  cancelar(){
    this.navCtrl.navigateForward("/servicios");
  }
  confirmar(){
    this.navCtrl.navigateForward("/servicios");
  }

}
