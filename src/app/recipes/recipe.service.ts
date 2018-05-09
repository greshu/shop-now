import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import * as _ from 'lodash'
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) {

    }
    recipeChanged = new Subject<Array<Recipe>>()
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Array<Recipe> = [
        new Recipe(1, 'Recipe1',
            'desc1',
            'https://images.media-allrecipes.com/images/75131.jpg',
            [new Ingredient('burger', 1),
            new Ingredient('test1', 1)]),
        new Recipe(2, 'Recipe2',
            'desc2',
            'https://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [new Ingredient('buns', 2)]),
        new Recipe(3, 'Recipe3',
            'desc3',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQGhTpPjJ0d0ox2gHFtdSouytmYMSP-ht7FLzyT41c0M-ES-X',
            [new Ingredient('pizza', 3)])
    ];

    getRecipeList() {
        return this.recipes.slice(); //return new copy of array 
    }

    addIngridentToShoopingList(ingridents: Ingredient[]) {
        this.shoppingListService.addIngridents(ingridents);
    }

    getRecipeById(id) {
        let data: Recipe = new Recipe();
        Object.assign(data, _.find(this.recipes, (recipe: Recipe) => {
            return recipe.id == id;
        }))

        return (data);
    }

    addRecipe(recipe: Recipe) {
        let maxIdobj = _.maxBy(this.recipes, function (o) { return o.id })
        recipe.id = maxIdobj.id + 1
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice())
    }

    updateRecipe(id, recipe: Recipe) {
        var index =  _.findIndex(this.recipes, (recipe: Recipe) => {
            return recipe.id == id;
        })
        recipe.id= id;
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice())
    }

    deleteRecipe(id:number){
        var index =  _.findIndex(this.recipes, (recipe: Recipe) => {
            return recipe.id == id;
        });
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice())
    }

    
}