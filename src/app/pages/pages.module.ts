import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    AccountSettingComponent,
    NopagesfoundComponent
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    AccountSettingComponent,
    NopagesfoundComponent
  ]
})
export class PagesModule { }
