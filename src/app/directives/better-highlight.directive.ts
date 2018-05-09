import { Directive, 
    ElementRef, 
    OnInit, 
    Renderer2, 
    HostListener, 
    HostBinding, 
    style, 
    Input } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input() defaultColor: string= 'transparent';
    @Input() highlightColor: string= 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;
    constructor(private elemRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover() {
        //using renderer
        //this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        //using renderer
        //this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}