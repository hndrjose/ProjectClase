import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuarioServise: UsuarioService, public router: Router ) { }

  canActivate( ) {

    if ( this._usuarioServise.estaLogeado() ) {
      console.log('paso por el login Guards');
      return true;
    } else {
      console.log('Bloqueado por el Guard');
      this.router.navigate(['/login']);
      return false;
    }

    // console.log('El archivo paso por el Guards');
   // return true;
  }
}
