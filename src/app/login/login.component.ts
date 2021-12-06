import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  titulo: string = 'Iniciar sesion';
  usuario: Usuario | undefined;

  hide = true;

  constructor(private authService: AuthService, private router: Router,
    private messageService: MessageService, private primengConfig: PrimeNGConfig) {
      this.usuario = new Usuario;
   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if(this.authService.isAuthtenticated()){
      //swal.fire('Login', 'Hola ' + this.authService.comprador.nombreUsuario + ' ya estas autenticado!' , 'info');
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
      this.router.navigate(['/clientes']);
    }
  }

  login(): void{
    console.log("nombreUsuario: ", JSON.stringify(this.usuario));
    console.log();
      //valida que el usuario y password no esten vacias
      if(this.usuario!.nombreUsuario == null || this.usuario!.password == null){
        swal.fire('Error Login', 'Username o Password vacios!', 'error');
      }
      this.authService.login(this.usuario!).subscribe(response => {

        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);

        let comprador = this.authService.comprador;
        this.router.navigate(['/pages/inicio']);
          this.messageService.add({severity:'success', summary: 'Exito', detail: 'Hola ' + comprador.nombre + ', has iniciado sesión con éxito!'});
        //swal.fire('Login', 'Hola ' + comprador.nombre + ', has iniciado sesión con éxito!', 'success');
        },error => {
          if(error.status == 400){
            //this.toast.showError('Usuario o contraseña incorrecta!!!');
            //swal.fire('Error Login', 'Usuario o contraseña incorrecta!!!', 'error');
          }
          if(error.status == 0){
            swal.fire("Servicio fuera de linea", 'No es posible conectar al servicio, contacte al administrador','error');
          }
        }
    );
    }

}
