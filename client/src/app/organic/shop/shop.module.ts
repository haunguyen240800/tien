import { PopupModule } from './../popup/popup.module';
import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ShareModule,
    PopupModule,
    MatDialogModule
  ]
})
export class ShopModule { }
