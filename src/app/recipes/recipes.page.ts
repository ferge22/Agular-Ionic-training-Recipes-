import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
