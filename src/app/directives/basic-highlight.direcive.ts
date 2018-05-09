import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHiglight]'
})
export class BasicHighLightDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}