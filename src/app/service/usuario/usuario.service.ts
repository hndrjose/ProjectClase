import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuarios.model';
import { URL_SERVICIO } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-Archivo/subir-archivo.service';



@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor( public http: HttpClient, public router: Router, public _subirArchivoService: SubirArchivoService ) {
    this.cargarStorage();
    console.log('Servicio del Usuario Listo');
   }

   estaLogeado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }


   guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;

   }

   logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

   login( usuario: Usuario, recordar: boolean = false) {
    if ( recordar ) {
      localStorage.setItem('email', usuario.email );
    } else {
      localStorage.removeItem('email');
    }
    const url = URL_SERVICIO + '/login';
    return this.http.post(url, usuario)
          .map( (resp: any) => {
          //  localStorage.setItem('id', resp.id);
          //  localStorage.setItem('token', resp.token);
          //  localStorage.setItem('usuario', JSON.stringify(resp.usuario));

          console.log(resp);
         this.guardarStorage( resp.id, resp.token, resp.Usuario);
          return true;
        });
  }


   crearUsuario ( usuario: Usuario ) {

    const url = URL_SERVICIO + '/usuario';

   return this.http.post( url, usuario )
       .map( (resp: any) => {
      //   swal('Usuario Creado', usuario.email, 'success');
        return resp.usuario;
       });
  }

  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
          .then( (resp: any) => {

            this.usuario.img = resp.usuario.img;
            swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            this.guardarStorage( id, this.token, this.usuario );

          })
          .catch( resp => {
            console.log( resp );
          }) ;

  }

}
