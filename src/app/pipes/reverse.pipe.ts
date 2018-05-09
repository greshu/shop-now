import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
name:'reverse'
})
export class ReversePipe implements PipeTransform{
    transform(value: string){
        if(value.length == 0){
            return value;
        }
        let splitstring = value.split("");
        return splitstring.reverse().join('');
    }
}