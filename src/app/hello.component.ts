import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'hello',
    template: `<h1> Hello {{name}} </h1>
                <h1> Hello {{lastname}} </h1>`
})

export class HelloComponent implements OnInit, OnDestroy, OnChanges {
    // Input property from capture value from parent component using @Input decorators
    @Input() name!: string; 
    @Input() lastname!:string;
    timeoutInstance: any;

    constructor() {}

    // Life cycle hook start
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
    ngOnInit(): void {
        console.log('load');
        this.timeoutInstance = setInterval(() => {
            console.log(new Date())
        }, 1000)
    }
    ngOnDestroy(): void {
        console.log("Component destroyed");
        if(this.timeoutInstance) {
            clearInterval(this.timeoutInstance);
        }
    }
    // Life cycle hook end
}