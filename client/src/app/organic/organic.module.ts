import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganicRoutingModule } from './organic-routing.module';
import { OrganicComponent } from './organic.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RightBarComponent } from './layout/right-bar/right-bar.component';
import { PopupCartComponent } from './popup/popup-cart/popup-cart.component';
import { PopupProductComponent } from './popup/popup-product/popup-product.component';


@NgModule({
  declarations: [
    OrganicComponent,
    HeaderComponent,
    FooterComponent,
    RightBarComponent,
    PopupCartComponent,
    PopupProductComponent
  ],
  imports: [
    CommonModule,
    OrganicRoutingModule
  ],
  exports: [
    PopupCartComponent,
    PopupProductComponent
  ]
})
export class OrganicModule { }
