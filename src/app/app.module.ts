import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {InicioComponent} from './inicio/inicio.component';
import { LoginComponent } from './usuarios/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompradoresComponent } from './compradores/compradores.component';
import { CompradorService } from './compradores/comprador.service';
import { BonosComponent } from './bonos/bonos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './usuarios/auth.service';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductividadComponent } from './productividad/productividad.component';

const routes: Routes = [
  {path: '', redirectTo: '/compradores', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'compradores', component: CompradoresComponent},
  {path: 'bonos', component: BonosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productividad', component: ProductividadComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CompradoresComponent,
    ProductividadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [CompradorService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
