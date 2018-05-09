import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
// import * as _ from "lodash";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe;
 
  constructor(private recipeService: RecipeService){
   
  }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe)=>{
       this.selectedRecipe = recipe;
      }
    )
  }

  setSelectedRecipe(selectedItem: Recipe){
   // this.selectedRecipe = selectedItem;
  
  }
}
