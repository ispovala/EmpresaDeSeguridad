import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialserviciosPageRoutingModule } from './historialservicios-routing.module';

import { HistorialserviciosPage } from './historialservicios.page';
import { CalificarServicioComponent } from '../calificar-servicio/calificar-servicio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialserviciosPageRoutingModule
  ],
  declarations: [HistorialserviciosPage, CalificarServicioComponent],
  entryComponents: [CalificarServicioComponent]
})
export class HistorialserviciosPageModule {}
