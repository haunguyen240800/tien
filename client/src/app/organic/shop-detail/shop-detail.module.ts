import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopDetailRoutingModule } from './shop-detail-routing.module';
import { ShopDetailComponent } from './shop-detail.component';


@NgModule({
  declarations: [
    ShopDetailComponent
  ],
  imports: [
    CommonModule,
    ShopDetailRoutingModule
  ]
})
export class ShopDetailModule { }
