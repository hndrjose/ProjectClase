import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { AccountSettingComponent } from './pages/account-setting/account-setting.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from './service/service.module';
import { PagesModule } from './pages/pages.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
