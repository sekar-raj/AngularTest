import { AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ChangeDetectorRef, AfterViewChecked  } from '@angular/core';
import { fieldComponent } from '../field/field.component';

@Component({
  selector: 'user-form',
  templateUrl: './userform.component.html'
})
export class userformComponent implements OnChanges, OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked{

    constructor(private cdref: ChangeDetectorRef) {
        
    }

    @ViewChild(fieldComponent, {static: false}) viewhild!: fieldComponent;

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Parent ngOnchanges");
    }

    ngOnInit(): void {
        console.log("Parent ngOninit");
    }

    ngDoCheck(): void {
        console.log("Parent ngDoCheck");
    }
    
    ngOnDestroy(): void {
        console.log("Parent ngOnDestroy");
    }

    ngAfterViewInit(): void {
        console.log(this.viewhild);
        this.viewhild.name = "data changed from child component";
        console.log("Parent ngAfterViewInit");
        this.cdref.detectChanges();
    }

    ngAfterViewChecked(): void {
        console.log("Parent ngAfterViewChecked");
    }
    
    
}
