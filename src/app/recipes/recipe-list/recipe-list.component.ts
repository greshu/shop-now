import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //@Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Array<Recipe>=[];
  subscription = new Subscription();
  constructor(private recipeService: RecipeService,
  private router: Router) { }

  ngOnInit() {
   this.subscription = this.recipeService.recipeChanged.subscribe((recipes)=>{
    this.recipes = recipes;
   })
   this.recipes = this.recipeService.getRecipeList();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onSelectItem(selectedItem : Recipe){
    //this.selectedRecipe.emit(selectedItem);
    //this.recipeService.selectedRecipe.emit(selectedItem);
    this.router.navigate(['Recipes/details' , selectedItem.id]);
  }
}
