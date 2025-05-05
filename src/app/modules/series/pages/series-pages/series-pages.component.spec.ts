import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPagesComponent } from './series-pages.component';

describe('SeriesPagesComponent', () => {
  let component: SeriesPagesComponent;
  let fixture: ComponentFixture<SeriesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
