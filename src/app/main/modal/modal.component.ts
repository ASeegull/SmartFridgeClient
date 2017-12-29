import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Agent } from '../../models/agent';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() agent: Agent;
  success = false;
  failed = false;

  @ViewChild('editAgent')
  editAgent;
  constructor(
    public mainService: MainService
  ) { }

  openModal() {
    this.editAgent.open();
  }

  onSubmit() {
    this.mainService.updateAgent(this.agent)
    .subscribe(
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
