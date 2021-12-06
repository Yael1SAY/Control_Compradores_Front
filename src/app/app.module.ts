import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { CompradoresComponent } from './pages/compradores/compradores.component';
import { CompradorService } from './services/empleado.service';
import { BonosComponent } from './pages/bonos/bonos.component';
import { AuthService } from './login/auth.service';
import { ProductividadComponent } from './pages/productividad/productividad.component';
import { InicioComponent } from '../app/pages/inicio/inicio.component';
import { HeadersComponent } from '../../src/app/component/headers/headers.component';
import { UsuariosComponent } from '../app/pages/usuarios/usuarios.component';


const routes: Routes = [
  {path: '', redirectTo: 'pages/compradores', pathMatch: 'full'},
  {path: 'pages/compradores', component: CompradoresComponent},
  {path: 'pages/bonos', component: BonosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pages/productividad', component: ProductividadComponent},
  {path: 'pages/inicio', component: InicioComponent},
  {path: 'pages/usuarios', component: UsuariosComponent}
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
    BonosComponent,
    UsuariosComponent
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
    CommonModule,
    TooltipModule,
    ToastModule,
    RippleModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [CompradorService, AuthService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
