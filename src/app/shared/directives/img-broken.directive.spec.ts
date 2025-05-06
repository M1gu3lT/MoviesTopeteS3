import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('debería crearse la directiva', () => {
    // Simula un elemento HTML, por ejemplo un <img>
    const mockElement = new ElementRef(document.createElement('img'));
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
