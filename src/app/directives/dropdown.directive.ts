import { Directive, Input, HostListener, HostBinding, OnInit } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{
    //My solutiom
    // @Input() isOpen: boolean = false;
    
    // @HostBinding('class') classes: string
    // constructor(){

    // }

    // ngOnInit() {
    //    this.classes = this.isOpen == false? '':'open'
    // }

    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    //     if(this.isOpen)
    //     this.classes = 'open';
    //     else
    //     this.classes = '';
    // }

    //Solution
    // @Input() isOpen: boolean = false;
    @HostBinding('class.open') isOpen: boolean = false;

    ngOnInit() {
       
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

}