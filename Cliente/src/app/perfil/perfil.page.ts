import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private navCtrl: NavController){
    
  }
  editar(){
    this.navCtrl.navigateForward("/editarperfil");
  }

  ngOnInit() {
  }

}



