import { OrganicComponent } from './organic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:OrganicComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: ()=> import("./home/home.module").then(m=>m.HomeModule)
      },
      {
        path: 'cart',
        loadChildren: ()=> import("./cart/cart.module").then(m=>m.CartModule)
      },
      {
        path: 'shop',
        loadChildren: ()=> import("./shop/shop.module").then(m=>m.ShopModule)
      },
      {
        path: 'service',
        loadChildren: ()=> import("./service/service.module").then(m=>m.ServiceModule)
      },
      {
        path: 'contact',
        loadChildren: ()=> import("./contact/contact.module").then(m=>m.ContactModule)
      },
      {
        path: 'checkout',
        loadChildren: ()=> import("./checkout/checkout.module").then(m=>m.CheckoutModule)
      },
      {
        path: 'about',
        loadChildren: ()=> import("./about/about.module").then(m=>m.AboutModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganicRoutingModule { }
