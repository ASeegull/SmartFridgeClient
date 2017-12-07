import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Product } from '../models/product';

@Injectable()
export class MainService {
  recipes: Recipe[];
  products: Product[];

  constructor(private http: HttpClient) { }

  getRecipes() {
    this.http.get<Recipe[]>('/client/recipes').subscribe(data => {
      this.recipes = data;
    });
  }

  getProducts() {
    this.http.get<Product[]>('/client/products').subscribe(data => {
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
