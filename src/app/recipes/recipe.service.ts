import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  /* recipeSelected = new EventEmitter<Recipe>(); */
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Super tasty Schnitzel - try it!',
      'http://img.taste.com.au/KQD6zlvx/w643-h428-cfill-q90/taste/2016/11/chicken-schnitzel-with-cheesy-mash-beans-and-peas-107918-1.jpeg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Lemon', 1),
        new Ingredient('Green Peas', 100),
        new Ingredient('Green Chillies', 10),
        new Ingredient('Butter', 100)
      ]),
    new Recipe(
      'Big Fat Burger',
      'My favourite time-pass.',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Lunch-Hamburger-Chicken-Burger-Classic-Burger-Break-2953388.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Chicken', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Chillies', 10),
        new Ingredient('Onions', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();  // here slice() exact copy of the recipes array is returned so that
    // any modifications performed on the array will be done on copy of that array instead of actual.
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    // console.log(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index);
    this.recipesChanged.next(this.recipes.slice());
  }
}
