import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  constructor(private navCtrl: NavController){
    
  }
  cancelar(){
    this.navCtrl.navigateForward("/servicios");
  }

  ngOnInit() {
  }

}
