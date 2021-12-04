import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { InicioComponent } from './inicio/inicio.component';
import { ComponentModule } from '../component/component.module';
import { HeadersComponent } from '../../../src/app/component/headers/headers.component'
import { RouterModule } from '@angular/router';
import { routes } from './pages.routing';



@NgModule({
  declarations: [
    InicioComponent,
    HeadersComponent
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
