import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})
export class AutoFocusDirective {

  constructor(private host: ElementRef) { }

  ngOnInit() {
    this.host.nativeElement.focus();
  }

}
