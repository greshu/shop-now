import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";

const authRoutes = [

    { path: 'Signup', component: SignupComponent },
    { path: 'Signin', component: SigninComponent }
]
@NgModule({
    imports:[
        RouterModule.forChild(authRoutes)
    ],
    exports:[
        RouterModule
    ]

})
export class AuthRoutingModule {

}