import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule
>>>>>>> 2dbf9c41d3e0e8e9bf89a62d5cf56aeb3dde1c71
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
