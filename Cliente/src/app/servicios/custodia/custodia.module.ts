import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustodiaPageRoutingModule } from './custodia-routing.module';

import { CustodiaPage } from './custodia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustodiaPageRoutingModule
  ],
  declarations: [CustodiaPage]
})
export class CustodiaPageModule {}
