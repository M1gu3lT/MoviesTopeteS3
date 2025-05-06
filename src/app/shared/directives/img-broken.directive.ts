import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    //console.log('🛑🛑 Esta imagen revento -->',this.elHost);
    elNative.src = 'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1536x768.png'
    
  }

  constructor(private elHost:ElementRef) { 
    //console.log(this.elHost);
    
  }

}
