import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";


const recipeRoutes: Routes = [
    {
        path: '', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'details/:id', component: RecipeDetailComponent, canActivate: [AuthGuard] },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: 'edit/:id', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [RouterModule]
})
export class RecipeRoutingModule{

}