import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common'

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login.component';
import { FooterComponent } from './footer/footer.component';
import { CompradoresComponent } from './compradores/compradores.component';
import { CompradorService } from './compradores/comprador.service';
import { BonosComponent } from './bonos/bonos.component';
import { AuthService } from './usuarios/auth.service';
import { ProductividadComponent } from './productividad/productividad.component';
import { InicioComponent } from '../app/pages/inicio/inicio.component';
import { HeadersComponent } from '../../src/app/component/headers/headers.component';
//import { routes } from '../app/pages/pages.routing'


const routes: Routes = [
  {path: '', redirectTo: '/compradores', pathMatch: 'full'},
  {path: 'compradores', component: CompradoresComponent},
  {path: 'bonos', component: BonosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productividad', component: ProductividadComponent},
  {path: 'pages/inicio', component: InicioComponent}
  //{path: 'routes', redirectTo: '/pages', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    CompradoresComponent,
    ProductividadComponent,
    InicioComponent,
    HeadersComponent,
    BonosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [CompradorService, AuthService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
