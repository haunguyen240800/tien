import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import("./auth/login/login.module").then(m=>m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import("./auth/register/register.module").then(m=>m.RegisterModule)
  },
  {
    path: 'origanic',
    loadChildren: () => import("./organic/organic.module").then(m=>m.OrganicModule)
  },
  {
    path: '404',
    loadChildren: () => import("./error/error404/error404.module").then(m=>m.Error404Module)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
