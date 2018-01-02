export class Ingredient {
  ID: string;
  name: string;
  shelfLife: number;
  units: string;
  imageURL: string;

  constructor(obj?: any) {
    this.ID = obj && obj.ID || null;
    this.name = obj && obj.name || null;
    this.shelfLife = obj && Number(obj.shelfLife) || null;
    this.units = obj && obj.units || null;
    this.imageURL = obj && obj.imageURL || null;
  }
}
