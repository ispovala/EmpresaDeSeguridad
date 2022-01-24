import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';

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
  ho=(moment(new Date).format("YYYY-MM-DD")).toString();
  minFecha=this.ho;
  //minFecha: string= (this.hoy.getDate()).toString()+"/"+(this.hoy.getMonth()).toString()+"/"+(this.hoy.getFullYear()).toString() ;
  //minFecha: string= (this.hoy.getFullYear()).toString()+"-"+(this.hoy.getMonth()+1).toString()+"-"+(this.hoy.getDate()).toString() ;
  maxFecha: string = (new Date().getFullYear()+2).toString();
  mensaje: any;


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
  async presentAlertFechas() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Fechas no válidas',
      //subHeader: 'Subtitle',
      message: this.mensaje,
      buttons: ['OK']
    });

    await alert.present();
    
  }
  solicitud() {
    var h=new Date();
    var hoy = moment(h).format("DD/MM/YYYY");
    var horahoy=moment(h).format("hh/mm/A");
    var finicio=this.ionicForm.value.fechaInicio;
    var hinicio=this.ionicForm.value.horaInicio;
    var listahorainicio=(moment(this.ionicForm.value.horaInicio).format("hh/mm/A")).split("/", 3);   
    var finiciolista=(moment(this.ionicForm.value.fechaInicio).format("DD/MM/YYYY")).split("/", 3);
    var listahoy=hoy.split("/", 3)
    var meshoy=parseInt(listahoy[1]); 
    var diahoy=parseInt(listahoy[0]); 
    var anohoy=parseInt(listahoy[2]); 
    var horaini=parseInt(listahorainicio[0]); 
    var minutoini=parseInt(listahorainicio[1]); 
    var dianocheini=listahorainicio[2];  
    var listahorahoy=(horahoy).split("/", 3);
    console.log(diahoy);
    console.log(finiciolista);
    if (finicio== "" || hinicio== "") { //si hay campos vacios
      this.presentAlert();
    }else{
      var fechainicioigualhoy=parseInt(finiciolista[0]) == diahoy && parseInt(finiciolista[1]) ==meshoy && parseInt(finiciolista[2]) ==anohoy ;
      var horainicioigualhoraactual= parseInt(listahorahoy[0]) ==horaini && parseInt(listahorahoy[1]) ==minutoini && listahorahoy[2] ==dianocheini;
      var minutosmas1hora=false;
      if (!minutosmas1hora){
          if(parseInt(listahorahoy[1]) ==minutoini){
            minutosmas1hora=true;
          }
          else if(minutoini>parseInt(listahorahoy[1]) ){
            console.log(minutoini);
            console.log(listahorahoy[1]);
            minutosmas1hora=true;
          }else{
            console.log(minutoini);
            console.log(listahorahoy[1]);
            console.log(false);
            minutosmas1hora=false;
          }
      }

      var horainiciodespues1horaactual=(horaini>(parseInt(listahorahoy[0]) ) && minutosmas1hora && listahorahoy[2] ==dianocheini) ||(horaini>(parseInt(listahorahoy[0]) +1));
      console.log(horainiciodespues1horaactual);
      console.log(listahorahoy[0]+1);
      console.log(horaini+1);
        if(fechainicioigualhoy){
          console.log("fecha inicio igual a fecha actual");
          if(!horainiciodespues1horaactual){
            console.log("la hora de inicio o fin es la actual o la hora de inicio no es mayor a una hora de la hora actual");
            this.mensaje="La hora de Inicio del servicio debe ser mínimo 1 hora después de la hora actual";
            this.presentAlertFechas();
          }else{
            this.solicitando();
          }
        }else if(parseInt(finiciolista[0])<diahoy && parseInt(finiciolista[1]) ==meshoy && parseInt(finiciolista[2]) ==anohoy){
          console.log("dia de inicio es menor a la fecha actual");
          this.mensaje="La fecha de inicio no puede ser menor a la fecha actual.";
          this.presentAlertFechas();
        }else{
          this.solicitando();
        }
    } 

  }
  solicitando(){
    this.navCtrl.navigateForward("/servicios/n/solicitud/hola",{ queryParams: {
      servicio: "Transporte", datos:this.ionicForm.value, origen: this.origen, destino: this.destino
    }});
    console.log(this.ionicForm.value);
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
      header: 'Ubicación de Origen',
      message: 'Seleccione con el puntero su ubicación de origen y luego de click en el botón de Aceptar. También puede usar el buscador de lugares o activar su ubicación mediante GPS',
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

  async presentAlertDestino() {
    const alert = await this.alertController.create({
      header: 'Ubicación de Destino',
      message: 'Seleccione con el puntero su ubicación de destino y luego de click en el botón de Aceptar. También puede usar el buscador de lugares o activar su ubicación mediante GPS',
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

  async presentAlertDirDestino() {
    const alert = await this.alertController.create({
      header: 'Ubicación de Destino',
      message: 'Su servicio termina en: '+ this.dirDestino,
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
      this.presentAlertDestino();
      const { data } = await modalAdd.onWillDismiss();
      if (data) {
        this.destino = data.pos;
        this.dirDestino = data.dir;
        console.log('Destino -> ', this.destino);
        this.presentAlertDirDestino();
      }
    }
  }

}
