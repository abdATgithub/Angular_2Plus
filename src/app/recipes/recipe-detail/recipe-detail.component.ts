import { Recipe } from './../recipe.model';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
