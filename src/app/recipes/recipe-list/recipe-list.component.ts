import { Recipe } from './../recipe.model';
import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit, OnDestroy {
  /* @Output() recipeWasSelected = new EventEmitter<Recipe>(); */
  subscription: Subscription;
  recipes: Recipe[]; /*  = [
    new Recipe('A test recipe', 'Test recipe description.', 'https://static.pexels.com/photos/236798/pexels-photo-236798.jpeg'),
    new Recipe('Another test recipe', 'Test recipe description.', 'https://static.pexels.com/photos/236798/pexels-photo-236798.jpeg')
  ] */

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.
      subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          // console.log(this.recipes);
        }
      );
    this.recipes = this.recipeService.getRecipes();
    // console.log(this.recipes);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  /* onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
