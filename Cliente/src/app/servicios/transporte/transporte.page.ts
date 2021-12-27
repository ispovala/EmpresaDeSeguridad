import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  fechaInicio: any;
  horaInicio: any;
  fechaFinalizacion: any;
  horaFinalizacion: any;
  hoy= new Date();
  //minFecha: string= (this.hoy.getDate()).toString()+"/"+(this.hoy.getMonth()).toString()+"/"+(this.hoy.getFullYear()).toString() ;
  minFecha: string= (this.hoy.getFullYear()).toString()+"-"+(this.hoy.getMonth()+1).toString()+"-"+(this.hoy.getDate()).toString() ;
  maxFecha: string = (new Date().getFullYear()+2).toString();



  origen = {
    lat: -2.1676746,
    lng: -79.8956897
  };
  destino = {
    lat: -2.1676746,
    lng: -79.8956897
  };
  item = "transporte"

  constructor(public alertController: AlertController, private navCtrl: NavController, private modalController: ModalController, public formBuilder: FormBuilder) {

  }
  cancelar() {
    this.navCtrl.navigateForward("/servicios");
  }
  async presentAlert() {
    //console.log(this.minFecha);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Campos vacíos',
      //subHeader: 'Subtitle',
      message: 'Existen campos sin completar en la solicitud',
      buttons: ['OK']
      
    });

    await alert.present();

  }
  solicitud() {
    if (this.ionicForm.value.fechaInicio == "" ||   this.ionicForm.value.horaInicio=="") {
      this.presentAlert();
      
      
    }else{
      this.navCtrl.navigateForward("/servicios/n/solicitud/hola",{ queryParams: {
        servicio: "Transportar Mercadería", datos:this.ionicForm.value, origen: this.origen, destino: this.destino
      }});
      console.log(this.ionicForm.value);

    }


  }


  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      fechaInicio: [""],
      horaInicio: [""],
      fechaFinalizacion: [""],
      horaFinalizacion: [""],

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
