import { Recipe } from './../recipe.model';
import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  /* @Output() recipeWasSelected = new EventEmitter<Recipe>(); */
  recipes: Recipe[]; /*  = [
    new Recipe('A test recipe', 'Test recipe description.', 'https://static.pexels.com/photos/236798/pexels-photo-236798.jpeg'),
    new Recipe('Another test recipe', 'Test recipe description.', 'https://static.pexels.com/photos/236798/pexels-photo-236798.jpeg')
  ] */

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  /* onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */

}
