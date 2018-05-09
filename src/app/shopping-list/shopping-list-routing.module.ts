import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RouterModule } from "@angular/router";

const shoppingRoutes = [
    { path: 'Shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(shoppingRoutes)
    ],
    exports: [RouterModule]

})
export class ShoppingListRoutingModule{

}