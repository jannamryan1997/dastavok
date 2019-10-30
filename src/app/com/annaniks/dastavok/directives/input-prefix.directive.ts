import { Directive, Input, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
    selector: '[input-prefix]'
})
export class InputPrefixDirective implements AfterContentInit {
    private _value: string = ''
    constructor(private _element: ElementRef) { }

    @Input('prefix') private _prefix: string;

    @Input('val')
    set value($event: string) {
        this._value = $event;
        this._setValue($event);
    }

    ngAfterContentInit() {
        this._setValue(this._value);
    }

    private _setValue($event): void {
        if ($event) {
            $event = $event.toString().replace(this._prefix, '')
            this._element.nativeElement.value = '+' + $event;
        }
    }
}