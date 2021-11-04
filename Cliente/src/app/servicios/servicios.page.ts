import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GuardiaPage } from '../servicios/guardia/guardia.page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  
  constructor(private navCtrl: NavController, private menu: MenuController){
    
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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
