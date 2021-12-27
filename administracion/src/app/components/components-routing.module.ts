import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './team/new-user/new-user.component';
import { TeamComponent } from './team/team.component';
import { DetailUserComponent } from './team/detail-user/detail-user.component';
import { CandadosSatelitalesListComponent } from './recursos/candados-satelitales/list/list.component';
import { VehiculosListComponent } from './recursos/vehiculos/list/list.component';
import { ArmasListComponent } from './recursos/armas/list/list.component';
import { CelularesListComponent } from './recursos/celulares/list/list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/create', component: NewUserComponent },
  { path: 'team/detail/:id', component: DetailUserComponent },
  { path: 'recursos/armas', component: ArmasListComponent },
  { path: 'recursos/candados_satelitales', component: CandadosSatelitalesListComponent },
  { path: 'recursos/celulares', component: CelularesListComponent },
  { path: 'recursos/vehiculos', component: VehiculosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
