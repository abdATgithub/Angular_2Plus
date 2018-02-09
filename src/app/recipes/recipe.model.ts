export class Recipe {
  public recipe_name: string;
  public recipe_description: string;
  public recipe_imagePath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.recipe_name = name;
    this.recipe_description = desc;
    this.recipe_imagePath = imgPath;
  }
}
