// login.page.ts
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  
  isSubmitted = false;
  constructor(private navCtrl: NavController, public formBuilder: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$') ]],
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
        this.presentAlertIngresar()
        this.redirigir()
      
    }
    
  }
  async presentAlertIngresar() {
    const alert = await this.alertController.create({
      header: 'Pin',
      message: 'Se ha enviado un pin de 4 digitos',
      buttons: [
        {
          text: 'Ok',
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

  redirigir(){
    this.navCtrl.navigateForward("/pin-login");
    this.ionicForm.reset()
  }

}

