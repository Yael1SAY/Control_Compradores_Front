import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { InicioComponent } from './inicio/inicio.component';
import { ComponentModule } from '../component/component.module';
import { HeadersComponent } from '../../../src/app/component/headers/headers.component'
import { RouterModule } from '@angular/router';
import { routes } from './pages.routing';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    InicioComponent,
    HeadersComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
