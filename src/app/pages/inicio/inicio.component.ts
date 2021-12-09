import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.comprador;
  }

}
