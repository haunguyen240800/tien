import { PopupModule } from './popup/popup.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganicRoutingModule } from './organic-routing.module';
import { OrganicComponent } from './organic.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RightBarComponent } from './layout/right-bar/right-bar.component';

@NgModule({
  declarations: [
    OrganicComponent,
    HeaderComponent,
    FooterComponent,
    RightBarComponent
  ],
  imports: [
    CommonModule,
    OrganicRoutingModule,
    PopupModule
  ]
})
export class OrganicModule { }
