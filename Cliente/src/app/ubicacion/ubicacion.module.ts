import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UbicacionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UbicacionComponent]
})
export class UbicacionModule { }
