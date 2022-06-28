import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RecipeAndShopping';
  showRecipe = true;
  showShoppingList = false;

  handleShoppingListClick() {
    this.showShoppingList = true;
    this.showRecipe = false;
  }

  handleRecipeClick() {
    this.showRecipe = true;
    this.showShoppingList = false;
  }
}
