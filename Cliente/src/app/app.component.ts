import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCtrl: NavController) {}

  myDate: String = new Date().toISOString();
  
  openPage(){
    this.navCtrl.navigateForward("/perfil");
  }
}
