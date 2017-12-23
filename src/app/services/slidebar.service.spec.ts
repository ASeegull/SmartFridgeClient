import { TestBed, inject } from '@angular/core/testing';

import { SlidebarService } from './slidebar.service';

describe('SlidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidebarService]
    });
  });

  it('should be created', inject([SlidebarService], (service: SlidebarService) => {
    expect(service).toBeTruthy();
  }));
});
