import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-historialservicios',
  templateUrl: './historialservicios.page.html',
  styleUrls: ['./historialservicios.page.scss'],
})
export class HistorialserviciosPage implements OnInit {

  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  calificar(){
    this.navCtrl.navigateForward("/calificar-servicio")    
  }

}
