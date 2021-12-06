import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
import swal from 'sweetalert2';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
  providers: [MessageService]
})
export class HeadersComponent implements OnInit {
  title: string = "Home";
  usuario: any;
  constructor(public authService: AuthService, private router: Router,
    private messageService: MessageService, private primengConfig: PrimeNGConfig) {}

  showFiller = false;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.usuario = this.authService.comprador;
    console.log("usuario: ", this.usuario);
  }

  showToast(){
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'}); 
  }

  logout():void{
  let nombre = this.authService.comprador.nombre;
  this.authService.logout();
  //this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'}); 
  swal.fire('Logout', 'Hola ' + nombre + ' has cerrado sesión con éxito', 'success');
  this.router.navigate(['/login']);
  }

}
