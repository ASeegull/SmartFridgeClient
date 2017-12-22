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
    return this.http.get<Recipe[]>(environment.apiURL + 'client/allRecipes', { withCredentials: true });
  }

  getMyRecipes() {
    return this.http.get<Recipe[]>(environment.apiURL + 'client/searchRecipes', { withCredentials: true });
  }


  getProducts() {
    return this.http.get<Product[]>(environment.apiURL + 'client/fridgeContent', { withCredentials: true });
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
