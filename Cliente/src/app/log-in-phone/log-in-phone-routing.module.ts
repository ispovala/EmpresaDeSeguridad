import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInPhonePage } from './log-in-phone.page';

const routes: Routes = [
  {
    path: '',
    component: LogInPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInPhonePageRoutingModule {}
