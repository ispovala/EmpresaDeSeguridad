import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  condiciones: boolean;
  ionicForm: FormGroup;
  
  item1Details = "lorem ipsum";
  defaultDate = "1990-12-16";
  maxFecha: string = (new Date().getFullYear()-18).toString();
  minFecha: string = (new Date().getFullYear()-80).toString();

  isSubmitted = false;
  constructor(private navCtrl: NavController, public formBuilder: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      convencional: ['', [Validators.required, Validators.pattern('\d*') ]],
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
  if (!this.ionicForm.valid || !this.condiciones) {
    console.log('Please provide all the required values!')

    return false;
  } else {
    console.log(this.ionicForm.value)
      this.redirigir()
    
  }
}


  redirigir(){
    this.navCtrl.navigateForward("/servicios");
    this.ionicForm.reset()
  }

  onClick() {
    this.navCtrl.navigateForward("/item1-modal");
    }

}
