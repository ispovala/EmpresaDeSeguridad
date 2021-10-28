import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GuardiaPage } from '../servicios/guardia/guardia.page';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  
  constructor(private navCtrl: NavController){
    
  }
  irPaginaChofer(){
    this.navCtrl.navigateForward("/servicios/n/chofer");
  }
  irPaginaGuardia(){
    this.navCtrl.navigateForward("/servicios/n/guardia");
  }
  irPaginaCustodia(){
    this.navCtrl.navigateForward("/servicios/n/custodia");
  }

  
  irPaginaTransporte(){
    this.navCtrl.navigateForward("/servicios/n/transporte");
  }
  ngOnInit() {
  }

}
