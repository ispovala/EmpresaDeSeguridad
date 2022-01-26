import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ThrowStmt } from '@angular/compiler';
import * as moment from 'moment';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  condiciones: boolean;
  ionicForm: FormGroup;
  
  defaultDate = "1990-12-16";
  maxFecha: string = (new Date().getFullYear()-18).toString();
  minFecha: string = (new Date().getFullYear()-80).toString();

  isSubmitted = false;
  constructor(private navCtrl: NavController, public formBuilder: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z/.0-9_-]+@[a-z0-9]+[.{1}][a-z]{2,}([.{1}][a-z]{2,})?')]],
      bday: ['', [Validators.required, Validators.pattern('(?:19[0-9]{2}|20[01][0-9]|2020)[-](?:0[1-9]|1[012])[-](?:0[1-9]|[12][0-9]|3[01])')]],
      f2_edudetail : ['', [Validators.required]],
      mobile: ['', [Validators.pattern('^[0-9]{0,7}$') ]],
    })
  }
  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    
    console.log(date);
    this.ionicForm.get('dob').setValue(date, {
        onlyself: true
    })
   
    
 }

 get errorControl() {
  return this.ionicForm.controls;
}

submitForm() {
  var today=moment(new Date());
  var test=moment(new Date(this.ionicForm.value.bday)).format("YYYY-MM-DD");
  var resul = test.toString();
  var difference = today.diff(test,"y") < 18;

  this.isSubmitted = true;
  if (!this.condiciones){
    this.presentTerms();
  }
  if (difference) {
    this.presentUnderAge();
  }
  else if (!this.ionicForm.valid) {
    this.presentFields();
    console.log('Please provide all the required values!')

    return false;
  } else {
    console.log(this.ionicForm.value)
    this.presentSuccess();
      this.redirigir()
    
  }
}

async presentUnderAge() {
  const alert = await this.alertController.create({
    header: 'Menor de edad',
    message: 'Para hacer uso de nuestra aplicación y de nuestros servicios debes ser mayor de 18 años',
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

async presentTerms() {
  const alert = await this.alertController.create({
    header: 'Términos y condiciones',
    message: 'Para hacer uso de nuestra aplicación asegúrate de aceptar los términos y condiciones',
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

async presentFields() {
  const alert = await this.alertController.create({
    header: 'Campos incompletos',
    message: 'Para hacer uso de nuestra aplicación asegúrate de completar todos los campos',
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

async presentSuccess() {
  const alert = await this.alertController.create({
    header: 'Registro exitoso',
    message: 'Felicidades, has completado satisfactoriamente tu registro. Bienvenido, estamos para servirte.',
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

  redirigir(){
    this.navCtrl.navigateForward("/servicios");
    this.ionicForm.reset()
  }

  onClick() {
    this.navCtrl.navigateForward("/item1-modal");
    }

}
