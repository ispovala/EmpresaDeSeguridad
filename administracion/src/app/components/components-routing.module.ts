import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './team/new-user/new-user.component';
import { TeamComponent } from './team/team.component';
import { DetailUserComponent } from './team/detail-user/detail-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'team', component: TeamComponent},
  { path: 'team/create', component: NewUserComponent},
  { path: 'team/detail/:id', component: DetailUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
