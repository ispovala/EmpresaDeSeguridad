import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})
export class ChoferPage implements OnInit {

  constructor(private navCtrl: NavController){
    
  }
  cancelar(){
    this.navCtrl.navigateForward("/servicios");
  }
  solicitud(){
    this.navCtrl.navigateForward("/servicios/n/solicitud");
    
  }

  ngOnInit() {
  }

}
