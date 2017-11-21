import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  // 不支持驼峰 high-light
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('#ff3300')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null)
  }
  highlight(color:string){
    this.el.nativeElement.style.background = color
  }
}
