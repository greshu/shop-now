import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

import { PracticeComponent } from "./practice/practice.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";


const appRoutes: Routes = [{
    // path: '', redirectTo: '/Recipes', pathMatch: 'full'
    path: '', component: HomeComponent
},
{path: 'Recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
{ path: 'Practice', component: PracticeComponent, canActivate: [AuthGuard] }]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        //To preload lazy loading
        //RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRouting {

}