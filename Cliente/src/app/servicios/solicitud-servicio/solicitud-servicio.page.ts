import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController,NavParams } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.page.html',
  styleUrls: ['./solicitud-servicio.page.scss'],
})
export class SolicitudServicioPage implements OnInit {
  value: string; 
  datosrecibidos:any;
  fechaInicio:any;
  fechaFinalizacion:any;
  horaInicio:any;
  horaFinalizacion:any;

  constructor(private route: ActivatedRoute, private router: Router, public navCtrl: NavController) {
    
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        console.log(params); // { order: "popular" }

        this.datosrecibidos = params;
        console.log(this.datosrecibidos); // popular
        this.fechaInicio=moment(this.datosrecibidos.datos.fechaInicio).format("DD/MM/YYYY");
        this.fechaFinalizacion=moment(this.datosrecibidos.datos.fechaFinalizacion).format("DD/MM/YYYY");
        this.horaInicio=moment(this.datosrecibidos.datos.horaInicio).format("hh:mma");
        this.horaFinalizacion=moment(this.datosrecibidos.datos.horaFinalizacion).format("hh:mma");
      }
    );
  }
  cancelar(){
    this.navCtrl.navigateForward("/servicios");
  }
  confirmar(){
    this.navCtrl.navigateForward("/servicios");
  }

}
