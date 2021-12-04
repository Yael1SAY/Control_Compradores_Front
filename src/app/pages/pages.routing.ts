import { Routes } from "@angular/router";
import { BonosComponent } from "../bonos/bonos.component";
import { CompradoresComponent } from "../compradores/compradores.component";
import { ProductividadComponent } from "../productividad/productividad.component";
import { LoginComponent } from "../usuarios/login.component";
import { InicioComponent } from "./inicio/inicio.component";

export const routes: Routes = [
    {path: '', redirectTo: '/compradores', pathMatch: 'full'},
    {path: 'compradores', component: CompradoresComponent},
    {path: 'bonos', component: BonosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'productividad', component: ProductividadComponent},
    {path: 'pages/inicio', component: InicioComponent}
  ]