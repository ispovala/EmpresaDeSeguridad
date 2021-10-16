import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    IonicModule,
    RegistroPageRoutingModule,
    ReactiveFormsModule,
=======
    ReactiveFormsModule,
    IonicModule,
    RegistroPageRoutingModule
>>>>>>> 2dbf9c41d3e0e8e9bf89a62d5cf56aeb3dde1c71
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
