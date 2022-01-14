import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-historialservicios',
  templateUrl: './historialservicios.page.html',
  styleUrls: ['./historialservicios.page.scss'],
})
export class HistorialserviciosPage implements OnInit {

  arrayServicios = [ ["en proceso", "guardia", "ceibos", "14/01/2022", "21:30", "14/01/2022", "2", "100", "efectivo", "rutaElegida"], 
			["finalizado", "guardia", "Espol", "21/03/2021", "21:30", "22/03/2021", "0", "50", "efectivo", "rutaElegida"],
			["pendiente", "guardia", "Mall del Sol", "21/03/2022", "21:30", "22/03/2022", "2", "100", "efectivo", "rutaElegida"] ];
  
  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  calificar(){
    this.navCtrl.navigateForward("/calificar-servicio")    
  }

}
