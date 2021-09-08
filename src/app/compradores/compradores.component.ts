import { Component, OnInit } from '@angular/core';
import { Comprador } from '../model/comprador';
import { CompradorService } from './comprador.service';
import { AuthService } from '../usuarios/auth.service';

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html'
})
export class CompradoresComponent implements OnInit {

  compradores: Comprador[] = [];
  first = 0;
  rows = 10;

  constructor(private compradorService: CompradorService, private authService: AuthService) { }

  ngOnInit(): void {
    //roles: this.authService.comprador.roles
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
