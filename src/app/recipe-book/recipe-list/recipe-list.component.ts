import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Piri Piri Fried Chicken',
      'This crispy South African inspired fried chicken recipe is made with a dry seasoning blend of bird’s eye chili peppers, paprika, salt, lemon peels, oregano, and garlic—it’s finger licking good!',
      '#'
    ),
    new Recipe(
      'Piri Piri Fried Chicken',
      'This crispy South African inspired fried chicken recipe is made with a dry seasoning blend of bird’s eye chili peppers, paprika, salt, lemon peels, oregano, and garlic—it’s finger licking good!',
      '#'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
