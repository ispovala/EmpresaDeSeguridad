import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { NewUserComponent } from './team/new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { DetailUserComponent } from './team/detail-user/detail-user.component';
import { CandadoSatelitalDetailsComponent } from './recursos/candados-satelitales/details/details.component';
import { CandadosSatelitalesListComponent } from './recursos/candados-satelitales/list/list.component';
import { RouterRecursosComponent } from './recursos/router-recursos/router-recursos.component';
import { VehiculoDetailsComponent } from './recursos/vehiculos/details/details.component';
import { VehiculosListComponent } from './recursos/vehiculos/list/list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    NewUserComponent,
    DetailUserComponent,
    VehiculoDetailsComponent,
    VehiculosListComponent,
    CandadosSatelitalesListComponent,
    CandadoSatelitalDetailsComponent,
    RouterRecursosComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class ComponentsModule {}
