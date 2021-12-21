import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})
export class ChoferPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  //maxFecha: string = (new Date().getFullYear() + 1).toString();
  hoy= new Date();
  minFecha: string= (this.hoy.getFullYear()).toString()+"-"+(this.hoy.getMonth()+1).toString()+"-"+(this.hoy.getDate()).toString() ;
  maxFecha: string = (new Date().getFullYear()+1).toString();
  maxiFecha2= addDaysToDate(new Date(), 1);
  minFecha2: string= (this.maxiFecha2.getFullYear()).toString()+"-"+(this.maxiFecha2.getMonth()+1).toString()+"-"+(this.maxiFecha2.getDate()).toString() ;
  maxFecha2: string = (new Date().getFullYear() + 2).toString();
  minhour: String = new Date().toISOString();
  fechaInicio: null;
  horaInicio: any;
  fechaFinalizacion: any;
  horaFinalizacion: any;
  vehiculo: boolean;

  

 
  update() {
    console.log('Esta habilitado' + this.vehiculo);
  }
  guardaespalda: boolean;
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

  constructor(private navCtrl: NavController, private modalController: ModalController,
    public formBuilder: FormBuilder, public alertController: AlertController) {
  }
  cancelar() {
    this.navCtrl.navigateForward("/servicios");
  }
  async presentAlert() {
    console.log(this.minFecha2);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Campos vacíos',
      //subHeader: 'Subtitle',
      message: 'Existen campos sin completar en la solicitud',
      buttons: ['OK']
    });

    await alert.present();

  }


  async presentAlertFechas() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Fechas no válidas',
      //subHeader: 'Subtitle',
      message: 'Ingrese las fechas correctamente.',
      buttons: ['OK']
    });

    await alert.present();

  }

  solicitud() {
    if (this.ionicForm.value.fechaInicio == "" || this.ionicForm.value.fechaFinalizacion == ""
      || this.ionicForm.value.horaFinalizacion == "" || this.ionicForm.value.horaInicio == "") {
      this.presentAlert();
    }else if (this.ionicForm.value.fechaInicio != "" || this.ionicForm.value.fechaFinalizacion != ""){
      var ini= this.ionicForm.value.fechaInicio.split("-", 3);
      var diaini= ini[2].substring(0,2);
      var fin= this.ionicForm.value.fechaFinalizacion.split("-", 3);
      var diafin= fin[2].substring(0,2);

      if(ini[0]== fin[0]){ //se verifican años
        if (ini[1] == fin[1]){ //en caso de que el mes sea igual
          if(diaini <= diafin){
            console.log("fechas elegidas validas");
          }else{
            this.presentAlertFechas();
          }
        }else if (ini[1] < fin[1]){
          console.log("fechas elegidas validas");
        }else{
          this.presentAlertFechas();
        }
      }else if (ini[0] < fin[0]){
        console.log("fechas elegidas validas");
      }else{
        this.presentAlertFechas();
      }
    }else {
      this.navCtrl.navigateForward("/servicios/n/solicitud/hola", {
        queryParams: {
          servicio: "Chofer seguro", datos: this.ionicForm.value, valorvehiculo: this.vehiculo,
          valorguardaespaldas: this.guardaespalda, origen: this.origen, destino: this.destino
        }
      });
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

function addDaysToDate(date, days){
  var res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}