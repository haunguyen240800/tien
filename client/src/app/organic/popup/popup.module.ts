import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupCartComponent } from './popup-cart/popup-cart.component';
import { PopupProductComponent } from './popup-product/popup-product.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PopupProductComponent,
    PopupCartComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule
  ],
  exports: [
    PopupCartComponent,
    PopupProductComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }

  ]
})
export class PopupModule { }
