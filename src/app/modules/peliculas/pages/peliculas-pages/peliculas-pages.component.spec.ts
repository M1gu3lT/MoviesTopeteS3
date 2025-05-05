import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPagesComponent } from './peliculas-pages.component';

describe('PeliculasPagesComponent', () => {
  let component: PeliculasPagesComponent;
  let fixture: ComponentFixture<PeliculasPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
