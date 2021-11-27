import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalificarServicioComponent } from '../calificar-servicio/calificar-servicio.component';

@Component({
  selector: 'app-historialservicios',
  templateUrl: './historialservicios.page.html',
  styleUrls: ['./historialservicios.page.scss'],
})
export class HistorialserviciosPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

async openModal(){
  const modal = await this.modalController.create({
    component: CalificarServicioComponent
  })
  await modal.present();
}

}
