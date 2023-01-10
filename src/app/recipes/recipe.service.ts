import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes.model";

@Injectable()

export class RecipeService
{
  recipeSelected = new EventEmitter<Recipe>();

   private recipes : Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simple test',
                   'https://thekitchencommunity.org/wp-content/uploads/2022/01/seafood-recipe.jpg',
                   [ 
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20) 
                  ]),
        new Recipe('Another Test Recipe', 'This is a simple test', 
                   'https://thekitchencommunity.org/wp-content/uploads/2022/01/seafood-recipe.jpg',
                   [
                    new Ingredient('Buns', 2),
                    new Ingredient('Meat', 1) 

                   ])
      ];

      constructor(private slService: ShoppingListService) {};

      getRecipe()
      {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[])
      {
        this.slService.addIngredients(ingredients);
      }
}