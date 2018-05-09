import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridents: Ingredient[] = [];
  private subs = new Subscription; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingridents = this.shoppingListService.getIngidents()
    this.subs = this.shoppingListService.addedItem.subscribe(
      (ingrident: Ingredient[]) => {
        this.ingridents = ingrident;
      }
    )
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  onEditItem(index){
    this.shoppingListService.startEditing.next(index);
  }

}
