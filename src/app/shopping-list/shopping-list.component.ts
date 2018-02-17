import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]; /* = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatoes', 10)
  ]; */

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  /* onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  } */

}
