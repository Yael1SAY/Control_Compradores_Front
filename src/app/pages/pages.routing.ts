import { Routes } from "@angular/router";
import { BonosComponent } from "./bonos/bonos.component";
import { TrabajadoresComponent } from "./trabajadores/trabajadores.component";
import { ProductividadComponent } from "./productividad/productividad.component";
import { LoginComponent } from "../login/login.component";
import { InicioComponent } from "./inicio/inicio.component";

export const routes: Routes = [
    {path: '', redirectTo: '/compradores', pathMatch: 'full'},
    {path: 'pages/compradores', component: TrabajadoresComponent},
    {path: 'bonos', component: BonosComponent},
    {path: 'page/login', component: LoginComponent},
    {path: 'page/productividad', component: ProductividadComponent},
    {path: 'pages/inicio', component: InicioComponent}
  ]