import { NgModule } from "@angular/core";
import { BasicHighLightDirective } from "./basic-highlight.direcive";
import { BetterHighlightDirective } from "./better-highlight.directive";
import { DropdownDirective } from "./dropdown.directive";
import { UnlessDirective } from "./unless.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        BasicHighLightDirective,
        BetterHighlightDirective,
        DropdownDirective,
        UnlessDirective
    ],
    exports: [
        CommonModule,
        BasicHighLightDirective,
        BetterHighlightDirective,
        DropdownDirective,
        UnlessDirective
    ]
})
export class DirectivesModule {

}