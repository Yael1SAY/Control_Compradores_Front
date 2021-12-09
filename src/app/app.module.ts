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
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';
import { UsarioService } from './services/usuario.service';
import { BonosComponent } from './pages/bonos/bonos.component';
import { AuthService } from './login/auth.service';
import { ProductividadComponent } from './pages/productividad/productividad.component';
import { InicioComponent } from '../app/pages/inicio/inicio.component';
import { HeadersComponent } from '../../src/app/component/headers/headers.component';
import { UsuariosComponent } from '../app/pages/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from '../app/pages/nuevo-usuario/nuevo-usuario.component';


const routes: Routes = [
  {path: '', redirectTo: 'pages/compradores', pathMatch: 'full'},
  {path: 'pages/trabajadores', component: TrabajadoresComponent},
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
    TrabajadoresComponent,
    ProductividadComponent,
    InicioComponent,
    HeadersComponent,
    BonosComponent,
    UsuariosComponent,
    NuevoUsuarioComponent
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
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    SidebarModule,
    MenubarModule
  ],
  providers: [UsarioService, AuthService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
