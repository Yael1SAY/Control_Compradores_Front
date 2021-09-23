import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { CompradorService } from './comprador.service';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html'
})
export class CompradoresComponent implements OnInit {

  compradores: Usuario[] = [];
  first = 0;
  rows = 10;

  constructor(private compradorService: CompradorService, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuthtenticated()){
      this.router.navigate(['/login']);
    }
    
    this.compradorService.obtenerCompradores(this.authService.getRol()).subscribe(
      compradores => this.compradores = compradores
    );
    
  }
    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.compradores ? this.first === (this.compradores.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.compradores ? this.first === 0 : true;
    }

}
