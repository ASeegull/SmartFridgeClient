import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable()
export class MainService {
  recipes: Recipe[];
  products: Product[];

  constructor(private http: HttpClient) { }

  getRecipes() {
    this.http.get<Recipe[]>(environment.apiURL + 'client/allRecipes').subscribe(data => {
      this.recipes = data;
    });
  }

  getProducts() {
    this.http.get<Product[]>(environment.apiURL + 'client/fridgeContent').subscribe(data => {
      this.products = data;
    });
  }

  showProducts(): Product[] {
    return this.products;
  }

  showRecipes(): Recipe[] {
    return this.recipes;
  }

}
