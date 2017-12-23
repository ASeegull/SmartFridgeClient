import { Injectable } from '@angular/core';

@Injectable()
export class SlidebarService {
  state = 'hidden';
  constructor() { }

  toggle() {
    this.state = this.state === 'hidden' ? 'open' : 'hidden';
  }
}
