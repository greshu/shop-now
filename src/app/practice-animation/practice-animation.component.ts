import { Component, OnInit} from '@angular/core';

import {
    transition, animate,
    trigger,
    state,
    style,
} from '@angular/animations'

@Component({
    selector: 'app-practice-animation',
    templateUrl: './practice-animation.component.html',
    styleUrls: ['./practice-animation.component.css'],
    animations: [
        trigger('divState', [
            state("normal", style({
                'background-color': 'red',
                transform: 'translateX(0)'
            })),
            state("highlighted", style({
                'background-color': 'green',
                transform: 'translateX(100px)'
            })),
            transition("normal <=> highlighted", animate(300)),
            // transition("highlighted => normal", animate(800))
        ]),
        trigger('wildState', [
            state("normal", style({
                'background-color': 'red',
                transform: 'translateX(0)'
            })),
            state("highlighted", style({
                'background-color': 'green',
                transform: 'translateX(100px)'
            })),
            state("shrunken", style({
                'background-color': 'blue',
                transform: 'translateX(0) scale(0.5)'
            })),
            transition("normal => highlighted", animate(300)),
            transition("highlighted => normal", animate(800)),
            transition("shrunken <=> *",[
                style({
                    'background-color': "orange"
                }),
                animate(1000, style({
                    'border-radius': '50px'
                })),
                animate(500)
            ])
        ])

    ]
})

/*
Important Notes: void state, group, offset, callback method
<div [@state]
(@state.start) = "meth1($event)"
(@state.end) = "meth2($event)"></div>
*/

export class PracticeAnimationComponent implements OnInit {
    //animations
    state = "normal";
    wildState = "normal";
    
    constructor() { }

    ngOnInit() {
    }

    animateDiv() {
        this.state == "normal"? this.state = "highlighted": this.state = "normal";
        this.wildState == "normal"? this.wildState = "highlighted": this.wildState = "normal";
        // if (this.state == "normal") {
        //     this.state = "highlighted"
        // } else {
        //     this.state = "normal"
        // }
    }

    shrunk(){
        this.wildState = "shrunken"
    }

}
