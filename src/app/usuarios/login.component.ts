import { Component, OnInit } from '@angular/core';
import { Comprador } from '../model/comprador'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  titulo: string = 'Iniciar sesion';
  comprador: Comprador | undefined;

  constructor(private authService: AuthService, private router: Router) {
      this.comprador = new Comprador;
   }

  ngOnInit(): void {
    if(this.authService.isAuthtenticated()){
      swal.fire('Login', 'Hola ' + this.authService.comprador.clave + ' ya estas autenticado!' , 'info');
      this.router.navigate(['/clientes']);
    }
  }

  login(): void{
      //valida que el usuario y password no esten vacias
      if(this.comprador!.clave == null || this.comprador!.password == null){
        swal.fire('Error Login', 'Username o Password vacios!', 'error');
      }
      //llama al metodo login del service para autenticarse
      this.authService.login(this.comprador!).subscribe(response => {
        //el token se conpone de tres secciones 1. el algoritmo y tipo, 2.datos y payload 3.La fima para verificar
        //let objetoPayload = JSON.parse(atob(response.access_token.split('.')[1]))
        //console.log(objetoPayload);//Split convierte a un arreglo y separa cada secion despues de un '.'

        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);

        let comprador = this.authService.comprador;//es el metodo getter del service y se maneja como atributo
        this.router.navigate(['/inicio']);
        swal.fire('Login', 'Hola ' + comprador.nombre + ', has iniciado sesión con éxito!', 'success');
        },error => {
          if(error.status == 400){
            swal.fire('Error Login', 'Usuario o contraseña incorrecta!!!', 'error');
          }
          if(error.status == 0){
            swal.fire("Servicio fuera de linea", 'No es posible conectar al servicio, contacte al administrador','error');
          }
        }
    );
    }

}
