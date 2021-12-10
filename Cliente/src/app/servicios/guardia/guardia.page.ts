import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
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
  maxFecha: string = (new Date().getFullYear()+1).toString();
  minFecha: string = (new Date().getFullYear()).toString();

  origen = {
    lat: -2.1676746,
    lng: -79.8956897
  };
  destino = {
    lat: -2.1676746,
    lng: -79.8956897
  };
  currentNumber = 1;

  increment() {
    this.currentNumber++;
  }

  decrement() {
    if (this.currentNumber > 1) {
      this.currentNumber--;
    }
  }

  constructor(private navCtrl: NavController, private modalController: ModalController,public formBuilder: FormBuilder) {

  }
  cancelar() {
    this.navCtrl.navigateForward("/servicios");
  }
  solicitud() {
    this.navCtrl.navigateForward("/servicios/n/solicitud");

  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      
      inicioDate: [this.defaultDate],
      
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
