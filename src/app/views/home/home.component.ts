import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.mainService.getProducts();
    this.products = this.mainService.showProducts();
  }

}
