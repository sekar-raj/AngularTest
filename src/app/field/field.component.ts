import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'field-form',
  templateUrl: './field.component.html'
})
export class fieldComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked{
    name = "test"
    constructor() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Child ngOnchanges");
    }

    ngOnInit(): void {
        console.log("Child ngOninit");
    }
    ngDoCheck(): void {
        console.log("Child ngDoCheck");
    }
    
    ngOnDestroy(): void {
        console.log("Child ngOnDestroy");
    }

    ngAfterViewInit(): void {
        console.log("Child ngAfterViewInit");
    }

    ngAfterViewChecked(): void {
        console.log("Child ngAfterViewChecked");
    }
}
