import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPhonePageRoutingModule } from './log-in-phone-routing.module';

import { LogInPhonePage } from './log-in-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInPhonePageRoutingModule
  ],
  declarations: [LogInPhonePage]
})
export class LogInPhonePageModule {}
