import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { UbicacionComponent } from 'src/app/ubicacion/ubicacion.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.page.html',
  styleUrls: ['./guardia.page.scss'],
})




export class GuardiaPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  //maxFecha: string = (new Date().getFullYear() + 1).toString();
  min=new Date().toJSON().split('T')[0];
  ho=(moment(new Date).format("YYYY-MM-DD")).toString();
  minFecha=this.ho;
  maxFecha: string = (new Date().getFullYear()+1).toString();
  maxiFecha2= addDaysToDate(new Date(), 1);
  minFecha2: string= (this.maxiFecha2.getFullYear()).toString()+"-"+(this.maxiFecha2.getMonth()+1).toString()+"-"+(this.maxiFecha2.getDate()).toString() ;
  maxFecha2: string = (new Date().getFullYear() + 2).toString();
  fechaInicio: any;
  horaInicio: any;
  fechaFinalizacion: any;
  horaFinalizacion: any;
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
    console.log(diahoy);
    console.log(finiciolista);
    if (finicio== "" || ffin== "" || hinicio== "" || hfin== "") { //si hay campos vacios
      this.presentAlert();
    }else{
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
    var horaini3despues=false;
    if(horaini==12){
      console.log("ini igual a 12");
      if(horafin>=3){
        console.log("fin mayor a 3");
        horaini3despues=true;
      }
      
    }else{
      if((horafin>(horaini)+2) ){
        horaini3despues=true;
      }else{
        horaini3despues=false;
      }
    }

      var horainiciodespues1horaactual=(horaini>(parseInt(listahorahoy[0]) ) && minutosmas1hora && listahorahoy[2] ==dianocheini) ||(horaini>(parseInt(listahorahoy[0]) +1));
      console.log(horainiciodespues1horaactual);
      console.log(listahorahoy[0]+1);
      var horainiciodespues1horafin=(horaini3despues && minutosmas1horafin);
      console.log(horaini+1);
      var fechainicioyfiniguales=finiciolista[0]==ffinlista[0] && finiciolista[1]==ffinlista[1] && finiciolista[2]==ffinlista[2];
      if(fechainicioyfiniguales){ 
        console.log("fecha inicio y fin iguales");
        if(fechainicioigualhoy){
          console.log("fecha inicio igual a fecha actual");
          if(horainicioigualhoraactual || horafinigualhoraactual || !horainiciodespues1horaactual){
            console.log("la hora de inicio o fin es la actual o la hora de inicio no es mayor a una hora de la hora actual");
            this.mensaje="La hora de Inicio del servicio debe ser mínimo 1 hora después de la hora actual";
            this.presentAlertFechas();
          }else if(!horainiciodespues1horafin){
            console.log("la hora de fin no es despues de una hora de la de inicio");
            this.mensaje="El servicio debe durar mínimo 3 horas, es decir, la hora de fin del servicio debe ser mínimo 3 horas después de la hora de inicio.";
            this.presentAlertFechas();
          }else{
            this.solicitando();
          }
        }else if(parseInt(finiciolista[0])<diahoy){
          console.log("dia de inicio es menor a la fecha actual");
          this.mensaje="La fecha de inicio no puede ser menor a la fecha actual.";
          this.presentAlertFechas();
        }else if(!horainiciodespues1horafin){
          console.log("la hora de fin no es despues de una hora de la de inicio");
          this.mensaje="El servicio debe durar mínimo 1 hora, es decir, la hora de fin del servicio debe ser mínimo 1 hora después de la hora de inicio.";
          this.presentAlertFechas();
        }else{
          this.solicitando();
        }
      }else if(parseInt(finiciolista[2])==parseInt(ffinlista[2])){ 
        console.log("mismo año");
        if(parseInt(finiciolista[1])==parseInt(ffinlista[1])){
          console.log("mismo mes");
          if(parseInt(finiciolista[0])>parseInt(ffinlista[0])){
            console.log("dia de inicio es mayor a la de fin");
            this.mensaje="La fecha de inicio no puede ser mayor a la fecha de finalización del servicio.";
            this.presentAlertFechas();
          }else if(parseInt(finiciolista[0])<diahoy){
            console.log("dia de inicio es menor a la fecha actual");
            this.mensaje="La fecha de inicio no puede ser menor a la fecha actual.";
            this.presentAlertFechas();
          }else if(!horainiciodespues1horaactual){
            this.mensaje="La hora de Inicio del servicio debe ser mínimo 1 hora despúes de la hora actual";
            this.presentAlertFechas();
          }else{
            this.solicitando();
          }

        }else if(parseInt(finiciolista[1])>parseInt(ffinlista[1])){
          console.log("mes de inicio es mayor al mes de fin");
          this.mensaje="La fecha de inicio no puede ser mayor a la fecha de finalización del servicio.";
          this.presentAlertFechas();
        }else{
          this.solicitando();
        }
        
      }else{
        this.solicitando();
      }

    }


  }
  solicitando(){
    this.navCtrl.navigateForward("/servicios/n/solicitud/hola", {
      queryParams: {
        servicio: "Guardia", datos: this.ionicForm.value, cantGuardia: this.currentNumber,
        origen: this.origen, destino: this.destino
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

function addDaysToDate(date, days){
  var res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}