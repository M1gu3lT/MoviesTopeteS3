import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPagesComponent } from './media-pages.component';

describe('MediaPagesComponent', () => {
  let component: MediaPagesComponent;
  let fixture: ComponentFixture<MediaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
