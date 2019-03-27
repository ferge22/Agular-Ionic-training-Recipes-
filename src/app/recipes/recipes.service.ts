import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Burger',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/08/04/11/35/burger-2579902_960_720.jpg',
      ingredients: ['Meat', 'Salad', 'Buns']
    },
    {
      id: '2',
      title: 'Shrimps',
      imageUrl: 'https://www.cc-vire.fr/wp-content/uploads/2019/01/salad-1199720_960_720.jpg',
      ingredients: ['Shrimps', 'Cucumber', 'Sauce']
    }
  ];

  constructor() { }

  getAllRecipes() {
    // pulls out all recipes and adds it to new array
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
        ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    // if true keeps element if not deletes
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
