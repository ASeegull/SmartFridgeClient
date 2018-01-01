import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { MainService } from '../../services/main.service';
import { AddProductModalComponent } from '../../main/add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  products: Ingredient[];

  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.mainService.getProductList().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

}
