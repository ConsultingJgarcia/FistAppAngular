import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";


export class RecipeService
{
  recipeSelected = new EventEmitter<Recipe>();

   private recipes : Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simple test', 'https://thekitchencommunity.org/wp-content/uploads/2022/01/seafood-recipe.jpg'),
        new Recipe('Another Test Recipe', 'This is a simple test', 'https://thekitchencommunity.org/wp-content/uploads/2022/01/seafood-recipe.jpg')
      ];

      getRecipe()
      {
        return this.recipes.slice();
      }
}