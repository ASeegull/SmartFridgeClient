import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})

export class AddProductModalComponent implements OnInit {
  product = new Ingredient();
  @ViewChild('addProduct')
  addProduct;

  success = false;
  failed = false;

  constructor(public mainService: MainService) { }

  ngOnInit() {
    console.log('#########');
    console.log(this.product);
  }

  showModal() {
    this.addProduct.open();
  }

  onSubmit() {
    console.log(this.product);
    this.mainService.addToProductList(this.product).subscribe(
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
  console.log(this.success, this.failed);
  }
}
