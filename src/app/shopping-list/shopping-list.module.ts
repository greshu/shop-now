import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { CommonModule } from "@angular/common";
import { DirectivesModule } from "../directives/directives.module";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        CommonModule,
        DirectivesModule,
        ShoppingListRoutingModule,
        FormsModule
    ]
})
export class ShoppingListModule {

}