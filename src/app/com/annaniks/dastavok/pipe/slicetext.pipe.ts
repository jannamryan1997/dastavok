import { Pipe, PipeTransform, ViewChildren, ElementRef } from "@angular/core";

@Pipe({
    name: "slicetextPipe"
})

export class SlicetextPipe implements PipeTransform {

    transform(text: string) {

        if (text.length > 200) {
            return text.slice(0, 200) + '...';
        }
        else {
            return text;
        }

    }
}