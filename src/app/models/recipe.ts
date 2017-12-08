import { Ingredient } from './ingredient';

export class Recipe {
  title: string;
  description: string;
  coockingTimeMin: number;
  complexity: string;
  constructor(obj?: any) {
    this.title = obj && obj.title;
  }
}
