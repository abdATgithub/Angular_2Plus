import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
  public recipe_name: string;
  public recipe_description: string;
  public recipe_imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imgPath: string, ingredients: Ingredient[]) {
    this.recipe_name = name;
    this.recipe_description = desc;
    this.recipe_imagePath = imgPath;
    this.ingredients = ingredients;
  }
}
