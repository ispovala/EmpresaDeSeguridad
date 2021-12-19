import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as validarcedula from 'src/scripts/validarcedula.js';
import {validarCedulaAlg} from 'src/app/editarperfil/cedula.validator';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  public validador=true;
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  maxFecha: string = (new Date().getFullYear()-18).toString();
  minFecha: string = (new Date().getFullYear()-80).toString();
  
  isSubmitted = false;


  constructor(private navCtrl: NavController, public formBuilder: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
      this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9_-]+@[a-z0-9]+[.{1}][a-z]+([.{1}][a-z]+)?')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^09[0-9]+$') ]],
      cedula: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      direccion: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z0-9- .#]*')]],
    },
    {
      validators: validarCedulaAlg
    });
  }

  ingresoCedula(){
    return this.ionicForm.hasError('CedulaNoValida') && this.ionicForm.get('cedula').dirty;
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

  validacionCed(){
    let cedula = this.ionicForm.get("cedula").value;
    //console.log(cedula);
    if (typeof(cedula) == 'string' && cedula.length == 10 && /^\d+$/.test(cedula)) {
      var digitos = cedula.split('').map(Number);
      var codigo_provincia = digitos[0] * 10 + digitos[1];
  
      //if (codigo_provincia >= 1 && (codigo_provincia <= 24 || codigo_provincia == 30) && digitos[2] < 6) {
  
      if (codigo_provincia >= 1 && (codigo_provincia <= 24 || codigo_provincia == 30)) {
        var digito_verificador = digitos.pop();
  
        var digito_calculado = digitos.reduce(
          function (valorPrevio, valorActual, indice) {
            //console.log(typeof valorPrevio);
            return valorPrevio - (valorActual * (2 - indice % 2)) % 9 - +(valorActual == 9) * 9;
          }, 1000) % 10;
        //console.log(digito_calculado === digito_verificador);
        return digito_calculado === digito_verificador;
    }else{
      alert("Ingrese una cédula válida");
      return false;
    }
  }
   
  
  }
  
  


}

