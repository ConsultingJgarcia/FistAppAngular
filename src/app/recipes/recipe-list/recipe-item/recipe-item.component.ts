import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from './../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit 
{
  @Input() recipe: Recipe;

  constructor(private recipeServi: RecipeService) { }

  ngOnInit() 
  {

  }

  OnSelected()
  {
    this.recipeServi.recipeSelected.emit(this.recipe);
  }
}
