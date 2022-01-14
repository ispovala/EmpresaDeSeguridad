import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-historialservicios',
  templateUrl: './historialservicios.page.html',
  styleUrls: ['./historialservicios.page.scss'],
})
export class HistorialserviciosPage implements OnInit {

  mapaServicios = [ {"estado": "en proceso", "servicio": "guardia", "lugarini": "ceibos", "fechaini": "14/01/2022", "horaini": "21:30", "fechafin": "14/01/2022", "numeroguardias": "2", "monto": "100", "pago": "efectivo", "ruta": "rutaElegida"}, 
			{"estado": "finalizado", "servicio": "guardia", "lugarini": "Espol", "fechaini": "21/03/2021", "horaini": "21:30", "fechafin": "22/03/2021", "numeroguardias": "0", "monto": "50", "pago": "efectivo", "ruta": "rutaElegida"},			
			{"estado": "pendiente", "servicio": "guardia", "lugarini": "Mall del Sol", "fechaini": "21/03/2022", "horaini": "21:30", "fechafin": "22/03/2022", "numeroguardias":"2", "monto": "100", "pago": "efectivo", "ruta": "rutaElegida"} ]
  
  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  ngOnInit() {

  }

  calificar(){
    this.navCtrl.navigateForward("/calificar-servicio")    
  }

}
