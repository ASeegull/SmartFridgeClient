import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Agent } from '../models/agent';
import { Ingredient } from '../models/ingredient';
import { environment } from '../../environments/environment';

@Injectable()
export class MainService {
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<Recipe[]>(environment.apiURL + 'client/allRecipes', { withCredentials: true });
  }

  getMyRecipes() {
    return this.http.get<Recipe[]>(environment.apiURL + 'client/searchRecipes', { withCredentials: true });
  }

  getRecipesByProduct(name: string) {
    return this.http.get<Recipe[]>(environment.apiURL + `client/recipes/getByProductName/${name}`, {withCredentials: true});
  }

  getProducts() {
    return this.http.get<Agent[]>(environment.apiURL + 'client/fridgeContent', { withCredentials: true });
  }

  addAgent(agent: Agent) {
      const body = JSON.stringify(agent);
      return this.http
        .post(environment.apiURL + 'client/addAgent', body, { observe: 'response', withCredentials: true });
  }

  updateAgent(agent: Agent) {
    const body = JSON.stringify(agent);
    return this.http
      .post(environment.apiURL + 'client/updateAgent', body, { observe: 'response', withCredentials: true });
  }

  deleteAgent(id: string) {
    return this.http
      .delete(environment.apiURL + `client/removeAgent/${id}`, { observe: 'response', withCredentials: true });
  }

  getProductList() {
    return this.http.get<Ingredient[]>(environment.apiURL + 'client/getProducts', { withCredentials: true });
  }

  addToProductList(ingredient: Ingredient) {
    const body = JSON.stringify(ingredient);
    return this.http
      .post(environment.apiURL + 'client/addProduct', body, { observe: 'response', withCredentials: true });
  }

  updateProductList(ingredient: Ingredient) {
    const body = JSON.stringify(ingredient);
    return this.http
      .put(environment.apiURL + 'client/updateProduct', body, { observe: 'response', withCredentials: true });
  }

  deleteProduct(id: string) {
    return this.http
      .delete(environment.apiURL + `client/products/remove/${id}`, { observe: 'response', withCredentials: true });
  }
}
