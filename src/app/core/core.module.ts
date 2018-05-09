import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { DirectivesModule } from "../directives/directives.module";
import { AppRouting } from "../app.routing";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../auth/auth.interceptor";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        DirectivesModule,
        AppRouting
    ],
    exports: [
        AppRouting,
        HeaderComponent
    ],

    providers: [
        ShoppingListService,
        RecipeService,
        AuthService,
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})
export class CoreModule {

}