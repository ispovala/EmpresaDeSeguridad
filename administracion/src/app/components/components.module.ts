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
import { CandadosSatelitalesListComponent } from './recursos/candados-satelitales/list/list.component';
import { RouterRecursosComponent } from './recursos/router-recursos/router-recursos.component';
import { VehiculosListComponent } from './recursos/vehiculos/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { YearPickerComponent } from './utilities/year-picker/year-picker.component';
import { CreateOrEditVehiculoModalComponent } from './recursos/vehiculos/ce-modal/create-or-edit-vehiculo-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CelularesListComponent } from './recursos/celulares/list/list.component';
import { ArmasListComponent } from './recursos/armas/list/list.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    NewUserComponent,
    DetailUserComponent,
    VehiculosListComponent,
    CandadosSatelitalesListComponent,
    RouterRecursosComponent,
    CelularesListComponent,
    ArmasListComponent,
    /*YearPickerComponent,
    CreateOrEditVehiculoModalComponent,*/
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  bootstrap: [/*YearPickerComponent*/],
})
export class ComponentsModule {}
