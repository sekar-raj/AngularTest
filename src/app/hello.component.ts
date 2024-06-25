import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'hello',
    template: `<h1> Hello {{name}} </h1>
                <h1> Hello {{lastname}} </h1>`
})

export class HelloComponent implements OnInit, OnDestroy, OnChanges {
    @Input() name!: string;
    @Input() lastname!:string;
    timeoutInstance: any;

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    constructor() {

    }

    ngOnInit(): void {
        console.log('load');
        // this.timeoutInstance = setInterval(() => {
        //     console.log(new Date())
        // }, 1000)
    }
    ngOnDestroy(): void {
        console.log("Component destroyed");
        // if(this.timeoutInstance) {
        //     clearInterval(this.timeoutInstance);
        // }
    }
}