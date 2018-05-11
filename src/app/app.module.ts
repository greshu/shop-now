import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { PracticeComponent } from './practice/practice.component';
import { AppRouting } from './app.routing';
import { ReversePipe } from './pipes/reverse.pipe';
import { DirectivesModule } from './directives/directives.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { Authmodule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { PracticeAnimationComponent } from './practice-animation/practice-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    ReversePipe,
    PracticeAnimationComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AppRouting,
    Authmodule,
    ShoppingListModule,
    DirectivesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
