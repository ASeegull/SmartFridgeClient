import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrecipesComponent } from './searchrecipes.component';

describe('SearchrecipesComponent', () => {
  let component: SearchrecipesComponent;
  let fixture: ComponentFixture<SearchrecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
