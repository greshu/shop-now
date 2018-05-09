import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() selectedRecipe: Recipe;
  selectedRecipe: Recipe;
  recipeId: number;
  constructor(private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    // let id =  +this.route.snapshot.params["id"]; //+ is used to cast string to number
    // this.selectedRecipe = this.recipeService.getRecipeById(id);
    this.route.params.subscribe((param: Params)=> {
      this.selectedRecipe = this.recipeService.getRecipeById(param["id"]);
      this.recipeId= param["id"];
    })    
  }

  onAddToShoppigList(){
    this.recipeService.addIngridentToShoopingList(this.selectedRecipe.ingridents);
  }

  editRecipe(){
    this.router.navigate(['Recipes/edit', this.selectedRecipe.id ])
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/Recipes'])
  }
}
