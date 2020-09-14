import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(public element:ElementRef) { 
this.element.nativeElement.innerText="has been changed"

  }
}
