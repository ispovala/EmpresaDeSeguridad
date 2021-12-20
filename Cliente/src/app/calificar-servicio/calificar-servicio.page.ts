import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calificar-servicio',
  templateUrl: './calificar-servicio.page.html',
  styleUrls: ['./calificar-servicio.page.scss'],
})
export class CalificarServicioPage implements OnInit {

  currentRate=5;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  regresar() {
      this.navCtrl.navigateForward("/servicios/n/chofer");
  }

}
