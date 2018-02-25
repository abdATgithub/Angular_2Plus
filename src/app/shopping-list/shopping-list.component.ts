import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  ingredients: Ingredient[]; /* = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatoes', 10)
  ]; */

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /* onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  } */

}
