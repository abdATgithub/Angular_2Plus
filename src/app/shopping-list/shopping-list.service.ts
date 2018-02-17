import { OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /* for (let ingredient of ingredients){
      this.addIngredient(ingredient);
    }
    will cause lot of unnecessary event emmisions. */
    this.ingredients.push(...ingredients);
    // spread (...) operator used for spreading ingredients array into list single ingredients
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
