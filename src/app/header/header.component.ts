import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title: string = "Home"
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  logout():void{
  let clave = this.authService.comprador.clave;
  this.authService.logout();
  swal.fire('Logout', 'Hola ' + clave + ' has cerrado sesión con éxito', 'success');
  this.router.navigate(['/login']);
  }

}
