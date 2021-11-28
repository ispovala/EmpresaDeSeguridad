import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './team/new-user/new-user.component';
import { TeamComponent } from './team/team.component';
import { DetailUserComponent } from './team/detail-user/detail-user.component';
import { CandadoSatelitalDetailsComponent } from './recursos/candados-satelitales/details/details.component';
import { CandadosSatelitalesListComponent } from './recursos/candados-satelitales/list/list.component';
import { VehiculoDetailsComponent } from './recursos/vehiculos/details/details.component';
import { VehiculosListComponent } from './recursos/vehiculos/list/list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'team', component: TeamComponent},
  { path: 'team/create', component: NewUserComponent},
  { path: 'team/detail/:id', component: DetailUserComponent},
  { path: 'recursos/vehiculos', component: VehiculosListComponent },
  { path: 'recursos/vehiculos/:id', component: VehiculoDetailsComponent },
  { path: 'recursos/candados_satelitales', component: CandadosSatelitalesListComponent },
  { path: 'recursos/candados_satelitales/:id', component: CandadoSatelitalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
