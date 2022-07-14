import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Piri Piri Fried Chicken',
      'This crispy South African inspired fried chicken recipe is made with a dry seasoning blend of bird’s eye chili peppers, paprika, salt, lemon peels, oregano, and garlic—it’s finger licking good!',
      '/assets/img/chicken.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Peri-Peri spice mix', 1),
        new Ingredient('Plain Flour', 1),
      ]
    ),
    new Recipe(
      'Piri Piri Chicken',
      'This crispy South African inspired fried chicken recipe is made with a dry seasoning blend of bird’s eye chili peppers, paprika, salt, lemon peels, oregano, and garlic—it’s finger licking good!',
      '/assets/img/chicken.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Peri-Peri spice mix', 1),
        new Ingredient('Plain Flour', 1),
      ]
    ),
  ];

  constructor() {}

  getRecipies() {
    return this.recipes.slice();
  }
}
