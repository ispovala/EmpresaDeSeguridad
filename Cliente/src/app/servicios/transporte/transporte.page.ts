import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProviderService} from "src/app/provider.service";
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {
  item="transporte"
 
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
