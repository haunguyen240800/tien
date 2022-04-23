import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SettingComponent } from './setting/setting.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    DashboardComponent,
    OrderHistoryComponent,
    SettingComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    ShareModule
  ]
})
export class UserDashboardModule { }
