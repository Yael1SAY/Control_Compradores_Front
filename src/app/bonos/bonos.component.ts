import { Component, OnInit } from '@angular/core';
import { CompradoresComponent } from '../compradores/compradores.component';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-bonos',
  templateUrl: './bonos.component.html',
  styleUrls: ['./bonos.component.css']
})
export class BonosComponent implements OnInit {

  compradores: Usuario [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
