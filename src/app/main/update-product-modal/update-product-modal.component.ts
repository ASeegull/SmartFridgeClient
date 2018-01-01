import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.css']
})
export class UpdateProductModalComponent implements OnInit {
  @Input() product: Ingredient;

  @ViewChild('updateProduct')
  updateProduct;


  success = false;
  failed = false;

  constructor(public mainService: MainService) { }

  ngOnInit() {
  }

  openModal() {
    this.updateProduct.open();
  }

  onSubmit() {
    console.log(this.product);
    this.mainService.updateProductList(this.product).subscribe(
      (res) => {
      console.log(res);
        if (res.status === 200) {
        console.log('Your agent is successfully registered');
        this.success = true;
    }
  },
    (err) => {
      console.log(err);
      this.failed = true;
    }
  );
  }
}
