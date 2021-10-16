// registro.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  // eslint-disable-next-line @typescript-eslint/naming-convention
  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';
  btnDisabled = true;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  validation_messages = {
    email: [
      { type: 'required', message: 'Campo Obligatorio.' },
      { type: 'pattern', message: 'Ingrese un email válido' }
    ],
    password: [
      { type: 'required', message: 'Campo Obligatorio.' },
      { type: 'minlength', message: 'La contraseña debe contener mínimo 5 caracteres' }
    ],
    phone: [
      { type: 'required', message: 'Campo Obligatorio.' },
      { type: 'minlength', message: 'Ingrese un número de celular válido.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+\\s*$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    },);
  }
  public checkCheckbox(c: AbstractControl){
    if(c.get('termsAndConditions').value === false){
      return false;
    }else {
      return true;}
  }

  tryRegistro(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Se ha creado su cuenta, ingrese ahora!';
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }

  /*isChecked(event) {
    if ( event.checked ) {
      this.btnDisabled = false;
   }
  }*/
}
