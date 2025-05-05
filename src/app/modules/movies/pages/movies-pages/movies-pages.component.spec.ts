import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPagesComponent } from './movies-pages.component';

describe('MoviesPagesComponent', () => {
  let component: MoviesPagesComponent;
  let fixture: ComponentFixture<MoviesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
