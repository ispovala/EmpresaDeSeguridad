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
  public validador=true;
  ionicForm: FormGroup;
  defaultDate = "1970-12-16";
  maxFecha: string = (new Date().getFullYear()-18).toString();
  minFecha: string = (new Date().getFullYear()-80).toString();
  
  isSubmitted = false;


  constructor(private navCtrl: NavController, public formBuilder: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9_-]+@[a-z0-9]+[.{1}][a-z]+([.{1}][a-z]+)?')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^09[0-9]+$') ]],
      cedula: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      direccion: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z0-9- .#]*')]],
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
  /*
  validadorDeCedula() {
    let cedulaCorrecta = false;
    console.log("entró al validador")
    let cedula=this.ionicForm.controls['cedula'].value
    console.log(cedula.length)
    if (cedula.length == 10)
    {   
        console.log("igual a 10")
        let tercerDigito = parseInt(cedula.substring(2, 3));
        if (tercerDigito < 6) {
          console.log("menor a 6")
        
            // El ultimo digito se lo considera dígito verificador
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
            let verificador = parseInt(cedula.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (cedula.length - 1); i++) {
                digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
                suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
          //      console.log(suma+" suma"+coefValCedula[i]); 
            }
            
            suma= Math.round(suma);
          
          //  console.log(verificador);
          //  console.log(suma);
          //  console.log(digito);
  
            if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
                cedulaCorrecta = true;
            } else if ((10 - (Math.round(suma % 10))) == verificador) {
                cedulaCorrecta = true;
            } else {
                cedulaCorrecta = false;
            }
        } else {
            cedulaCorrecta = false;
        }
    } else {
        cedulaCorrecta = false;
    }
  
  
  this.validador= cedulaCorrecta;
  
    
  }
 */
}
