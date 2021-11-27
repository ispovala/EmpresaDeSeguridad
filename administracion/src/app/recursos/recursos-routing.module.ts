import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandadoSatelitalDetailsComponent } from './candados-satelitales/details/details.component';
import { CandadosSatelitalesListComponent } from './candados-satelitales/list/list.component';
import { VehiculoDetailsComponent } from './vehiculos/details/details.component';
import { VehiculosListComponent } from './vehiculos/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehiculos', pathMatch: 'full' },
  { path: 'vehiculos', component: VehiculosListComponent },
  { path: 'vehiculos/:id', component: VehiculoDetailsComponent },
  { path: 'candados_satelitales', component: CandadosSatelitalesListComponent },
  { path: 'candados_satelitales/:id', component: CandadoSatelitalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosRoutingModule { }
