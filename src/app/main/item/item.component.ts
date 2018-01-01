import { Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() product: Ingredient;

  constructor(public mainService: MainService) { }

  updateProduct() {
    this.mainService.updateProductList(this.product).subscribe(data => console.log(data));
  }

  deleteProduct() {
    this.mainService.deleteProduct(this.product.ID).subscribe(
      data => { console.log(data); },
      err => { console.log(err); }
    );
  }
}
