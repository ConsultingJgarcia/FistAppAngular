import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://thekitchencommunity.org/wp-content/uploads/2022/01/seafood-recipe.jpg'),
    new Recipe('A Test Recipe', 'This is a simple test', 'https://thekitchencommunity.org/wp-content/uploads/2022/01/seafood-recipe.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
