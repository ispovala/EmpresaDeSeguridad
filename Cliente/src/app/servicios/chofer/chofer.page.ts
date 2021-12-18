import { Component, OnInit} from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})
export class ChoferPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  maxFecha: string = (new Date().getFullYear()+1).toString();
  minFecha: string = (new Date().getFullYear()).toString();
  maxFecha2: string = (new Date().getFullYear()+1).toString();
  minFecha2: string = (new Date().getFullYear()).toString();
  minhour: String = new Date().toISOString();
  fechaInicio:any;
  horaInicio:any;
  fechaFinalizacion:any;
  horaFinalizacion:any;
  vehiculo:boolean;
  update() {
    console.log('Esta habilitado' + this.vehiculo);
  }
  guardaespalda:boolean;
  update2() {
    console.log('Esta habilitado' + this.vehiculo);
  }
  origen = {
    lat: -2.1676746,
    lng: -79.8956897
  };
  destino = {
    lat: -2.1676746,
    lng: -79.8956897
  };

  constructor(private navCtrl: NavController, private modalController: ModalController,public formBuilder: FormBuilder) {
  }
  cancelar() {
    this.navCtrl.navigateForward("/servicios");
  }
  solicitud() {
 
    this.fechaInicio = moment(this.fechaInicio, "DD-MM-YYYY").toDate()
    this.navCtrl.navigateForward("/servicios/n/solicitud/hola",{ queryParams: {
      servicio: "Chofer seguro", datos:this.ionicForm.value, valorvehiculo:this.vehiculo, valorguardaespaldas:this.guardaespalda
    }});
    console.log(this.ionicForm.value);


  }
  

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      fechaInicio:[""],
      horaInicio:[""],
      fechaFinalizacion:[""],
      horaFinalizacion:[""],
      
   })
    
  
  }

  async addDirection(tipo: number) {

    if (tipo === 0) {
      const modalAdd = await this.modalController.create({
        component: UbicacionComponent,
        mode: 'ios',
        swipeToClose: true,
        componentProps: { position: this.origen }
      });

      await modalAdd.present();
      const { data } = await modalAdd.onWillDismiss();
      if (data) {
        this.origen = data.pos;
        console.log('Origen -> ', this.origen);
      }

    }
    else if (tipo === 1) {
      const modalAdd = await this.modalController.create({
        component: UbicacionComponent,
        mode: 'ios',
        swipeToClose: true,
        componentProps: { position: this.destino }
      });

      await modalAdd.present();
      const { data } = await modalAdd.onWillDismiss();
      if (data) {
        this.destino = data.pos;
        console.log('Destino -> ', this.destino);
      }
    }
  }

}
