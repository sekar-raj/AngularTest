import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interviewTest';
  name= "angular";
  lastname = "react";
  show = false;
  Toggle() {
    this.show = !this.show;
  }
}
