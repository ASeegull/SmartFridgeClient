export class Product {
  name: string;
  shelfLife: number;
  units: number;

  constructor(obj?: any) {
    this.name = obj && obj.name;
  }
}
