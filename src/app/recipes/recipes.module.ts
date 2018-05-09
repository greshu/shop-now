import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { CommonModule } from "@angular/common";
import { RecipeRoutingModule } from "./recipes-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DirectivesModule } from "../directives/directives.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        DirectivesModule
    ]
})
export class RecipesModule {

}