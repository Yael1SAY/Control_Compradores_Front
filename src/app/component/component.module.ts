import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [HeadersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
  ],
  exports: [
    HeadersComponent
  ]
})
export class ComponentModule { }
