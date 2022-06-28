import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() recipeClick = new EventEmitter();
  @Output() shoppingListClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRecipeClick(e) {
    this.recipeClick.emit();
  }

  onShoppingListClick(e) {
    this.shoppingListClick.emit();
  }
}
