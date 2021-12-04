import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ComponentPage } from './component.pages'

const routes: Routes = [
    {
        path: "",
        component: ComponentPage
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ComponentPagesRouterModule {
    
}