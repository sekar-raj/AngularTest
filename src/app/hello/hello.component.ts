import {Component } from '@angular/core';

@Component({
  selector: 'hello-form',
  template: `
  <router-outlet></router-outlet>Hello Component`
})
export class HelloFormComponent {
    constructor() {

    }
}

@Component({
    selector: 'hi-form',
    template: `Hi Component
                `
  })
  export class HiComponent {
      constructor() {
  
      }
  }

  @Component({
    selector: 'test-form',
    template: `Test Component`
  })
  export class TestComponent {
      constructor() {
  
      }
  }