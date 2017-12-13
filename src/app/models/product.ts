export class Product {
  Product: string;
  Weight: number;

  constructor(obj?: any) {
    this.Product = obj && obj.Product;
  }
}
