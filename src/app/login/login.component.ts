import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/service.index';
import { Usuario } from '../models/usuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    this.email =  localStorage.getItem('email') || '';
    if( this.email.length > 1 ) {
      this.recuerdame = true;
    }

  }

  ingresar( forma: NgForm ) {

    // if ( forma.invalid ) {
    //   return;
    // }

    const usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
            // .subscribe( resp => {
            //   console.log(resp);
            // } );
             .subscribe( correto =>  this.router.navigate(['/dashboard']) );

  //  console.log(forma.value);

  }

}
