import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  ingredient: any = {};
  subscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editedItem: Ingredient = {};
  @ViewChild('f') slForm: NgForm;

  //@Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {

    this.subscription = this.shoppingListService.startEditing.subscribe(
      (itemIndex: number) => {
        this.editMode = true;
        this.editItemIndex = itemIndex;
        this.editedItem = this.shoppingListService.getIngidentsByIndex(itemIndex);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // addItem(){
  //  // this.addedIngredient.emit(this.ingredient);
  //   this.shoppingListService.addIngrident(this.ingredient);
  // }

  addItem(form: NgForm) {
    let value = form.value;
    let ingrident = {
      name: form.value.name,
      amount: form.value.amount
    }
   if(!this.editMode){
    this.shoppingListService.addIngrident(ingrident);
   }
   else{
    this.shoppingListService.editIngrident(ingrident, this.editItemIndex)
   }
   this.resetForm();
  }

  resetForm(){
    this.slForm.reset();
    this.editMode = false;
  }

  deleteitem(){
    this.shoppingListService.deleteIngrident(this.editItemIndex);
    this.resetForm();
  }
}
