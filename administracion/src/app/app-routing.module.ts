import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '[login]', pathMatch: 'full' },
  {
    path: 'recursos',
    loadChildren: () =>
      import('./recursos/recursos.module').then((m) => m.RecursosModule),
    // canActivate: [AppAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
