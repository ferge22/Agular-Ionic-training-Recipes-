import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})

export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(private actvatedRoute: ActivatedRoute, private recipesSrv: RecipesService, private router: Router) { }

  ngOnInit() {
    // Observable thats why subscribe
    this.actvatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('recipeId')) {
          // recirect
          return;
        } else {
          const recipeId = paramMap.get('recipeId');
          this.loadedRecipe = this.recipesSrv.getRecipe(recipeId);
        }
      }
    );
  }

  onDelete() {
    this.recipesSrv.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

}
