import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  recibido: any;
  nombreur: any;
  apellidour: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  myDate: String = new Date().toISOString();
  
  openPage(){
    this.navCtrl.navigateForward("/homeperfil");
  }

  
  ngOnInit() {

  
  }

  
}
