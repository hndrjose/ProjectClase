import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PruebadbComponent } from './pruebadb/pruebadb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    NopagesfoundComponent
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    AccountSettingComponent,
    NopagesfoundComponent,
    PruebadbComponent
  ]
})
export class PagesModule { }
