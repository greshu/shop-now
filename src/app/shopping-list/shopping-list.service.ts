import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    addedItem = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();
//    addedItem = new EventEmitter<Ingredient[]>();


   private ingridents: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 5)
      ];

    getIngidents(){
        return this.ingridents.slice();
    }

    addIngrident(ingredient: Ingredient){
        this.ingridents.push(ingredient);
        // this.addedItem.emit(this.ingridents.slice())
        this.addedItem.next(this.ingridents.slice())
    }

    addIngridents(ingridents: Ingredient[]){
        this.ingridents.push(...ingridents);
        this.addedItem.next(this.ingridents.slice()) 
    }

    getIngidentsByIndex(index: number){
        return this.ingridents[index];
    }

    editIngrident(ingredient: Ingredient, index){
        this.ingridents[index] = ingredient;
        this.addedItem.next(this.ingridents.slice())
    }

    deleteIngrident(index){
        this.ingridents.splice(index, 1);
        this.addedItem.next(this.ingridents.slice())
    }
}