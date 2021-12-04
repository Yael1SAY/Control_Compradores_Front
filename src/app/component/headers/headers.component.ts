import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/login/auth.service';
import swal from 'sweetalert2';
import {LoginComponent} from '../../pages/login/login.component'

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  title: string = "Home"
  constructor(public authService: AuthService, private router: Router) {}

  showFiller = false;

  ngOnInit(): void {
  }

  logout():void{
  let nombre = this.authService.comprador.nombre;
  this.authService.logout();
  swal.fire('Logout', 'Hola ' + nombre + ' has cerrado sesión con éxito', 'success');
  this.router.navigate(['/pages/login']);
  }

}
