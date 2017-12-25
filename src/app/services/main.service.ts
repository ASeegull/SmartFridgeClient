import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Agent } from '../models/agent';
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

  getProducts() {
    return this.http.get<Agent[]>(environment.apiURL + 'client/fridgeContent', { withCredentials: true });
  }

  addAgent(agent: Agent) {
      const body = JSON.stringify(agent);
      console.log(body);
      return this.http
        .post(environment.apiURL + 'client/addAgent', body, { observe: 'response', withCredentials: true });
  }
}
