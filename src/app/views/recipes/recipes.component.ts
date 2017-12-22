import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(public mainService: MainService) {}

  ngOnInit() {
    this.mainService.getRecipes().subscribe(data => {
      this.recipes = data;
  });
 }
}
