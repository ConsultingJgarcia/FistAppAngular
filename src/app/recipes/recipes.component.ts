import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe;
  constructor(private recipeSer: RecipeService) { }

  ngOnInit()
  {
    this.recipeSer.recipeSelected.subscribe(
      (recipe: Recipe) => { 
        this.selectedRecipe = recipe;
      }
    );
  }

}
