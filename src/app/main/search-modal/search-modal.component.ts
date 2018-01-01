import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {
  recipes: Recipe[];

  @Input() productName: string;

  @ViewChild('searchresults') searchresults;

  constructor(public mainService: MainService) { }

  ngOnInit() {
  }

  search() {
    this.mainService.getRecipesByProduct(this.productName).subscribe(
      data => { this.recipes = data; },
      err => { console.log(err); }
    );
    this.searchresults.open();
  }

}
