import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('appHighlightImportantData') hoverClass:any; 
  @Input() colour;  


  
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

  @HostListener('click') onMouseClick() {
    this.elementRef.nativeElement.style.backgroundColor = (this.colour);
    
 }

}
