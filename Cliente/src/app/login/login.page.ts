<<<<<<< HEAD
// login.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

=======
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
>>>>>>> 2dbf9c41d3e0e8e9bf89a62d5cf56aeb3dde1c71
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

<<<<<<< HEAD
  // eslint-disable-next-line @typescript-eslint/naming-convention
  validations_form: FormGroup;
  errorMessage = '';

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
      ]))
    });
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  validationMessages = {
    email: [
      { type: 'required', message: 'Campo Obligatorio.' },
      { type: 'pattern', message: 'Ingrese un email válido' }
    ],
    password: [
      { type: 'required', message: 'Campo Obligatorio.' },
      { type: 'minlength', message: 'La contraseña debe contener mínimo 5 caracteres' }
    ]
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.navCtrl.navigateForward('/perfil');
      }, err => {
        this.errorMessage = err.message;
      });
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/registro');
  }

}

=======

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.formularioLogin = this.fb.group({
      'celular': new FormControl("",Validators.required)
    })
  }
  ngOnInit() {
  }

}
>>>>>>> 2dbf9c41d3e0e8e9bf89a62d5cf56aeb3dde1c71
