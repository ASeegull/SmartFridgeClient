import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable()
export class MainService {
  recipes: Recipe[];
  myRecipes: Recipe[];
  products: Product[];

  constructor(private http: HttpClient) { }

  getRecipes() {
    this.http.get<Recipe[]>(environment.apiURL + 'client/allRecipes', { withCredentials: true }).subscribe(data => {
      console.log(data);
      this.recipes = data;
    });
  }

  getMyRecipes() {
    this.http.get<Recipe[]>(environment.apiURL + 'client/searchRecipes', { withCredentials: true }).subscribe(data => {
      console.log(data);
      this.myRecipes = data;
    });
  }


  getProducts() {
    this.http.get<Product[]>(environment.apiURL + 'client/fridgeContent', { withCredentials: true }).subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  showProducts(): Product[] {
    return this.products;
  }

  showRecipes(): Recipe[] {
    return this.recipes;
  }

  showMyRecipes(): Recipe[] {
    return this.myRecipes;
  }
}
