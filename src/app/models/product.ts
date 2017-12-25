export class Product {
  Product: string;
  Weight: number;
  StateExpires: string;
  Condition: string;

  constructor(obj?: any) {
    this.Product = obj && obj.Product;
  }
}
