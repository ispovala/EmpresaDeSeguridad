import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController} from '@ionic/angular';
import { TrackServicioComponent } from '../track-servicio/track-servicio.component';
import { modalController } from '@ionic/core';
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

  origen = {
    lat: -2.1676746,
    lng: -79.8956897
  };
  destino = {
    lat: -2.1676746,
    lng: -79.8956897
  };

  constructor(private route: ActivatedRoute, private router: Router, public navCtrl: NavController, private modalController: ModalController) {
    
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

  async dibujarRuta() {

      const modalAdd = await this.modalController.create({
        component: TrackServicioComponent,
        mode: 'ios',
        swipeToClose: true,
        componentProps: { position: this.origen }
      });
      modalAdd.setAttribute('style','--background: transparent; --backdrop-opacity: 0.0');


      await modalAdd.present();
      const { data } = await modalAdd.onWillDismiss();
      if (data) {
        this.origen = data.pos;
        this.destino = data.pos
        console.log('Origen -> ', this.origen);
      }
  }
}