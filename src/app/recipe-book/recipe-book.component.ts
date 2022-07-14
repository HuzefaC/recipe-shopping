import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  seletedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.seletedRecipe = recipe;
    });
  }
}
