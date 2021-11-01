import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'phone-login',
    loadChildren: () => import('./phone-login/phone-login.module').then( m => m.PhoneLoginPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule),

  },
  {
    path: 'servicios/n',
    children: [
      {
        path: 'chofer', 
        loadChildren: () => import('./servicios/chofer/chofer.module').then( m => m.ChoferPageModule)
      },
      {
        path: 'custodia', 
        loadChildren: () => import('./servicios/custodia/custodia.module').then( m => m.CustodiaPageModule)
      },
      {
        path: 'guardia', 
        loadChildren: () => import('./servicios/guardia/guardia.module').then( m => m.GuardiaPageModule)
      },
      {
        path: 'transporte', 
        loadChildren: () => import('./servicios/transporte/transporte.module').then( m => m.TransportePageModule)
      },
    ]
  },  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'metododepago',
    loadChildren: () => import('./metododepago/metododepago.module').then( m => m.MetododepagoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
