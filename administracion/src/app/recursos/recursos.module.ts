import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosRoutingModule } from './recursos-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoDetailsComponent } from './vehiculos/details/details.component';
import { VehiculosListComponent } from './vehiculos/list/list.component';
import { CandadosSatelitalesListComponent } from './candados-satelitales/list/list.component';
import { CandadoSatelitalDetailsComponent } from './candados-satelitales/details/details.component';
import { RouterRecursosComponent } from './router-recursos/router-recursos.component';


@NgModule({
  declarations: [
    VehiculoDetailsComponent,
    VehiculosListComponent,
    CandadosSatelitalesListComponent,
    CandadoSatelitalDetailsComponent,
    RouterRecursosComponent
  ],
  imports: [
    CommonModule,
    RecursosRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class RecursosModule { }
