import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCzerwonyTekst]'
})
export class CzerwonyTekstDirective {

  @HostBinding('style.color') kolor = "red";

  constructor() { }

}
