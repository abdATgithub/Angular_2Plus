import { RecipeService } from './../../recipe.service';
import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  /* @Output() recipeSelected = new EventEmitter<void>(); */
  /* constructor(private recipeSelector: RecipeService) { } */

  ngOnInit() {
  }

  /* onSelected() {
    this.recipeSelected.emit();
    this.recipeSelector.recipeSelected.emit(this.recipe);
  } */

}
