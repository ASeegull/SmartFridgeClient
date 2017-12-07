import { Ingredient } from './ingredient';

export interface Recipe {
  title: string;
  description: string;
  coockingTimeMin: number;
  complexity: string;
  ingredients: Ingredient[];
}
