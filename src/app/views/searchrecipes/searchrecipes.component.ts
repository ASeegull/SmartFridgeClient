import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-searchrecipes',
  templateUrl: './searchrecipes.component.html',
  styleUrls: ['./searchrecipes.component.css']
})
export class SearchrecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(public mainService: MainService) {}

  ngOnInit() {
    this.mainService.getMyRecipes().subscribe(data => {
      this.recipes = data;
  });
  }

}
