import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ModalModule } from 'ngx-modal';
import { MainService } from '../../services/main.service';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Agent[];

  noAgents = false;
  success = false;
  failed = false;

  constructor(
    public mainService: MainService,
    public router: Router
  ) { }

  ngOnInit() {
    this.mainService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
      if (this.products.length === 0) {
        this.noAgents = true;
      }
    });
  }

  newAgentRedirect() {
    this.router.navigate(['/newAgent']);
  }

}
