import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private recipeService: RecipeService,
  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param["id"];
        this.editMode = param["id"] != null;
        this.initForm()
      }
    )
  }

  onAddIngrident(){
    (<FormArray>this.recipeForm.get('ingridents')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, 
          Validators.pattern(/^[0-9]+[0-9]*$/)])
      })
    )
  }

  onSubmit(){
    // const newRecipe = new Recipe(
    //   null,
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingridents']
    // )
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  deleteIngirident(index){
    (<FormArray>this.recipeForm.get("ingridents")).removeAt(index)
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = ''
    let recipeDescription = ''
    let recipeIngridents = new FormArray([]);

    if(this.editMode){
      let recipeDetails = this.recipeService.getRecipeById(this.id);
      recipeName = recipeDetails.name;
      recipeImagePath = recipeDetails.imagePath;
      recipeDescription = recipeDetails.description;

      if(recipeDetails['ingridents']){
        for(let ingredient of recipeDetails.ingridents){
          recipeIngridents.push(new FormGroup(
            {
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, 
                Validators.pattern(/^[0-9]+[0-9]*$/)])
            }
          ))
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingridents': recipeIngridents
    })
  }

}
