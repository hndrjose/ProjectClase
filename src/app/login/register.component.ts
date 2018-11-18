import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';
import { UsuarioService } from '../service/service.index';
import { Usuario } from '../models/usuarios.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor( public _usuarioService: UsuarioService,
    public router: Router
    ) { }


  sonIguales( campo1: string, campo2: string ) {

    return ( group: FormGroup ) => {

     let pass1 = group.controls[campo1].value;
     let pass2 = group.controls[campo2].value;

     if ( pass1 === pass2 ) {
       return null;
     }

     return {
       sonIguales: true
     };
    };
 }



  ngOnInit() {

    this.forma = new FormGroup({

      nombre: new FormControl( null, Validators.required ),
      correo: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl(null, Validators.required ),
      password2: new FormControl(null, Validators.required ),
      condiciones: new FormControl( false )

    }, { validators: this.sonIguales('password', 'password2') });

      // Esta instancia del odjeto solo llena los campos autmaticamente con el funcion setValue({})
      this.forma.setValue({
        nombre: 'jose',
        correo: 'test@test.com',
        password: '123456',
        password2: '123456',
        condiciones: true
   });
  }

  registrarUsuario() {

    if ( this.forma.invalid ) {
      return;
   }

   if ( !this.forma.value.condiciones ) {
     // console.log('Debe de aceptar las Condiciones');
    // swal('Importante', 'Debe de aceptar las condiciones', 'warning');
     return;
   }

      let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password,
      );

      this._usuarioService.crearUsuario( usuario )
           .subscribe( resp => {

           console.log( resp );

           this.router.navigate(['/login']);

           });

   console.log( 'forma validad', this.forma.valid );
   console.log( this.forma.value );
  }


}
