import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CategoryComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
