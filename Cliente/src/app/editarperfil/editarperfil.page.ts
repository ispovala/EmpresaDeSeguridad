import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "";
  maxFecha: string = (new Date().getFullYear()-18).toString();
  minFecha: string = (new Date().getFullYear()-80).toString();
  
  isSubmitted = false;


  constructor(private navCtrl: NavController, public formBuilder: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[0-9]+$') ]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      direccion: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z-0-9\.]*')]],
    })
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('fechanacimiento').setValue(date, {
       onlyself: true
    })
 }

 get errorControl() {
  return this.ionicForm.controls;
}

submitForm() {
  this.isSubmitted = true;
  if (!this.ionicForm.valid) {
    console.log('Please provide all the required values!')

    return false;
  } else {
    console.log(this.ionicForm.value)
    /*Si llena todos los datos, y pone cancelar tambien aparece esto: SOLUCIONAR*/
      this.presentAlertGuardar()
      this.finEdicion()
    
  }
}

  async presentAlertEditar() {
    const alert = await this.alertController.create({
      header: 'Editar datos',
      message: '¿Está seguro de salir?',
      buttons: [
        {
          text: 'Sí',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Salió de editar datos');
            this.finEdicion()
          }
        }, {
          text: 'No',
          handler: () => {
            console.log('Sigue editando');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  
  async presentAlertGuardar() {
    const alert = await this.alertController.create({
      header: 'Editar datos',
      message: 'Sus datos han sido guardados correctamente.',
      buttons: [
        {
          text: 'Sí',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Datos guardados!');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  finEdicion(){
    this.navCtrl.navigateForward("/perfil");
    this.ionicForm.reset()
  }
 
}
