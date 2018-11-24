import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { UsuarioService, LoginGuardGuard, SubirArchivoService} from './service.index';






@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [
          UsuarioService,
          SubirArchivoService,
          LoginGuardGuard
      ],
      declarations: [
      ]
})

export class ServiceModule { }
