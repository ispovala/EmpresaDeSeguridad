import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.page.html',
  styleUrls: ['./guardia.page.scss'],
})




export class GuardiaPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  //maxFecha: string = (new Date().getFullYear() + 1).toString();
  hoy= new Date();
  minFecha: string= (this.hoy.getFullYear()).toString()+"-"+(this.hoy.getMonth()+1).toString()+"-"+(this.hoy.getDate()).toString() ;
  maxFecha: string = (new Date().getFullYear()+2).toString();
  maxiFecha2= addDaysToDate(new Date(), 1);
  minFecha2: string= (this.maxiFecha2.getFullYear()).toString()+"-"+(this.maxiFecha2.getMonth()+1).toString()+"-"+(this.maxiFecha2.getDate()).toString() ;
  maxFecha2: string = (new Date().getFullYear() + 2).toString();
  fechaInicio: any;
  horaInicio: any;
  fechaFinalizacion: any;
  horaFinalizacion: any;

  origen = {
    lat: -2.1676746,
    lng: -79.8956897
  };
  destino = {
    lat: -2.1676746,
    lng: -79.8956897
  };

  dirOrigen:any;
  dirDestino:any;
  currentNumber = 1;

  increment() {
    this.currentNumber++;
  }

  decrement() {
    if (this.currentNumber > 1) {
      this.currentNumber--;
    }
  }

  constructor(public alertController: AlertController, private navCtrl: NavController,
    private modalController: ModalController, public formBuilder: FormBuilder) {

  }
  cancelar() {
    this.navCtrl.navigateForward("/servicios");
  }
  async presentAlert() {
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
      //var fin= this.ionicForm.value.fechaFinalizacion;
      //var inicio= 
      //(this.maxiFecha2.getFullYear()).toString()+"-"+(this.maxiFecha2.getMonth()+1).toString()+"-"+(this.maxiFecha2.getDate()).toString()
      //console.log(this.ionicForm.value.fechaInicio);
      //console.log(this.ionicForm.value.fechaFinalizacion);
     // console.log(ini);
     // console.log(diaini);

    }else {
      this.navCtrl.navigateForward("/servicios/n/solicitud/hola", {
        queryParams: {
          servicio: "Guardia", datos: this.ionicForm.value, cantGuardia: this.currentNumber,
          origen: this.origen, destino: this.destino
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

  async presentAlertOrigen() {
    const alert = await this.alertController.create({
      header: 'Ubicación',
      message: 'Seleccione con el puntero la ubicación donde necesita el servicio y luego de click en el botón de Aceptar. También puede usar el buscador de lugares o activar su ubicación mediante GPS',
      buttons: [
        {
          text: 'ACEPTAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('ORIGEN');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


  async presentAlertDirOrigen() {
    const alert = await this.alertController.create({
      header: 'Ubicación de Origen',
      message: 'Su servicio inicia en: ' + this.dirOrigen,
      buttons: [
        {
          text: 'ACEPTAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('ORIGEN');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
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
      this.presentAlertOrigen();
      const { data } = await modalAdd.onWillDismiss();
      if (data) {
        this.origen = data.pos;
        this.dirOrigen = data.dir;
        console.log('Origen -> ', this.origen);
        this.presentAlertDirOrigen();
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