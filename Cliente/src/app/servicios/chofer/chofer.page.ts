import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import * as moment from 'moment';


@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})
export class ChoferPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  //maxFecha: string = (new Date().getFullYear() + 1).toString();
  
  //minFecha: string = (this.hoy.getFullYear()).toString() + "-" + (this.hoy.getMonth() + 1).toString() + "-" + (this.hoy.getDate()).toString();
  maxFecha: string = (new Date().getFullYear() + 1).toString();
  maxiFecha2 = addDaysToDate(new Date(), 1);
  minFecha2: string = (this.maxiFecha2.getFullYear()).toString() + "-" + (this.maxiFecha2.getMonth() + 1).toString() + "-" + (this.maxiFecha2.getDate()).toString();
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

  dirOrigen:any;
  dirDestino:any;

  constructor(private navCtrl: NavController, private modalController: ModalController,
    public formBuilder: FormBuilder, public alertController: AlertController) {
  }
  cancelar() {
    this.navCtrl.navigateForward("/servicios");
  }
  async presentAlert() {
    //console.log(this.minFecha2);
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
    var h=new Date();
    var hoy = moment(h).format("DD/MM/YYYY");
    var horahoy=moment(h).format("hh/mm/A");
    var finicio=this.ionicForm.value.fechaInicio;
    var ffin=this.ionicForm.value.fechaFinalizacion;
    var hinicio=this.ionicForm.value.horaInicio;
    var hfin=this.ionicForm.value.horaFinalizacion;
    var listahorainicio=(moment(this.ionicForm.value.horaInicio).format("hh/mm/A")).split("/", 3);
    var listahorafin=(moment(this.ionicForm.value.horaFinalizacion).format("hh/mm/A")).split("/", 3);
    
    var finiciolista=(moment(this.ionicForm.value.fechaInicio).format("DD/MM/YYYY")).split("/", 3);
    var ffinlista=(moment(this.ionicForm.value.fechaFinalizacion).format("DD/MM/YYYY")).split("/", 3);
    var listahoy=hoy.split("/", 3)
    var meshoy=parseInt(listahoy[1]); 
    var diahoy=parseInt(listahoy[0]); 
    var anohoy=parseInt(listahoy[2]); 
    var horaini=parseInt(listahorainicio[0]); 
    var minutoini=parseInt(listahorainicio[1]); 
    var dianocheini=listahorainicio[2]; 
    var horafin=parseInt(listahorafin[0]); ; 
    var minutofin=parseInt(listahorafin[1]); 
    var dianochefin=listahorafin[2]; 

    var listahorahoy=(horahoy).split("/", 3);
    //var anohoy=(this.hoy.getFullYear());
    //var diahoy=(this.hoy.getDate());
    //console.log(meshoy);
    console.log(diahoy);
    //console.log(anohoy);
    //console.log(this.horahoy);//04/56/PM
    //console.log(listahorahoy);
    //console.log(listahorainicio);
    console.log(finiciolista);
    if (finicio== "" || ffin== "" || hinicio== "" || hfin== "") { //si hay campos vacios
      this.presentAlert();
    }else{
      parseInt(listahorahoy[0]) 
      var fechainicioigualhoy=parseInt(finiciolista[0]) == diahoy && parseInt(finiciolista[1]) ==meshoy && parseInt(finiciolista[2]) ==anohoy ;
      var fechaifinigualhoy=parseInt(ffinlista[0]) ==diahoy && parseInt(ffinlista[1]) ==meshoy && parseInt(ffinlista[2]) ==anohoy;
      var horainicioigualhoraactual= parseInt(listahorahoy[0]) ==horaini && parseInt(listahorahoy[1]) ==minutoini && listahorahoy[2] ==dianocheini;
      var horafinigualhoraactual= parseInt(listahorahoy[0]) ==horafin && parseInt(listahorahoy[1]) ==minutofin && listahorahoy[2] ==dianochefin;
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
      var minutosmas1horafin=false;
      if (!minutosmas1horafin){
        if(minutofin==minutoini){
          minutosmas1horafin=true;
        }
        else if(minutofin>minutoini){
          minutosmas1horafin=true;
        }else{
          minutosmas1horafin=false;
        }
    }

      var horainiciodespues1horaactual=(horaini>(parseInt(listahorahoy[0]) ) && minutosmas1hora && listahorahoy[2] ==dianocheini) ||(horaini>(parseInt(listahorahoy[0]) +1));
      console.log(horainiciodespues1horaactual);
      console.log(listahorahoy[0]+1);
      var horainiciodespues1horafin=((horafin>(horaini)) && minutosmas1horafin && dianochefin==dianocheini)||(horafin>(horaini+1));
      console.log(horaini+1);
      if(finicio==ffin){ 
        console.log("fecha inicio y fin iguales");
        if(fechainicioigualhoy){
          console.log("fecha inicio igual a fecha actual");
          if(horainicioigualhoraactual || horafinigualhoraactual || !horainiciodespues1horaactual){
            console.log("la hora de inicio o fin es la actual o la hora de inicio no es mayor a una hora de la hora actual");
            this.presentAlertFechas();
          }else if(!horainiciodespues1horafin){
            console.log("la hora de fin no es despues de una hora de la de inicio");
            this.presentAlertFechas();

          }else{
            this.solicitando();
          }
        }else if(!horainiciodespues1horafin){
          console.log("la hora de fin no es despues de una hora de la de inicio");
          this.presentAlertFechas();
        }else{
          this.solicitando();
        }
      }else if(parseInt(finiciolista[2])==parseInt(ffinlista[2])){ 
        if(parseInt(finiciolista[1])==parseInt(ffinlista[1])){
          if(parseInt(finiciolista[0])<parseInt(ffinlista[0])){
            this.presentAlertFechas();
          }else{
            this.solicitando();
          }

        }else if(parseInt(finiciolista[1])<parseInt(ffinlista[1])){
          this.presentAlertFechas();
        }else{
          this.solicitando();
        }
        
      }else{
        this.solicitando();
      }

    } /*else if (this.ionicForm.value.fechaInicio != "" || this.ionicForm.value.fechaFinalizacion != "") {
      var ini = this.ionicForm.value.fechaInicio.split("-", 3);
      console.log(ini);
      
      //var fechahoy= this.hoy.split("-", 3);
      var diaini = ini[2].substring(0, 2);
      var fin = this.ionicForm.value.fechaFinalizacion.split("-", 3);
      var diafin = fin[2].substring(0, 2);

      if (ini[0] == fin[0]) { //se verifican años
        if (ini[1] == fin[1]) { //en caso de que el mes sea igual
          if (diaini <= diafin) {
            console.log("fechas elegidas validas");
            
            this.solicitando();
          } else {
            this.presentAlertFechas();
          }
        } else if (ini[1] < fin[1]) { // en caso de que el mes de inicio sea menor al mes de fin
          console.log("fechas elegidas validas");
          this.solicitando();
        } else {
          this.presentAlertFechas();
        }
      } else if (ini[0] < fin[0]) {
        console.log("fechas elegidas validas");
        this.solicitando();
      } else {
        this.presentAlertFechas();
      }
  
    } */
  }
  solicitando(){
    this.navCtrl.navigateForward("/servicios/n/solicitud/hola", {
      queryParams: {
        servicio: "Chofer seguro", datos: this.ionicForm.value, valorvehiculo: this.vehiculo,
        valorguardaespaldas: this.guardaespalda, origen: this.origen, destino: this.destino
      }
    });
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

function addDaysToDate(date, days) {
  var res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}