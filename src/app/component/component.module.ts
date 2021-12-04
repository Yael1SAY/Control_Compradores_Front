import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'



@NgModule({
  declarations: [HeadersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeadersComponent
  ]
})
export class ComponentModule { }
