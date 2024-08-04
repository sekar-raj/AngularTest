import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
export interface users {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  address?: address,
  phone?: string,
  website?: string,
  company?: company
}

export interface address {
  street?: string,
  suite?: string,
  city?: string,
  zipcode?: string,
  geo?: geo
}

export interface geo{
  lat?: string,
  lng?: string
}
export interface company {
  name?: string,
  catchPhrase?: string,
  bs?: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users: users[];
  constructor(private service:AppService) {

  }
  ngOnInit() {
    //
    this.service.getAllUsers().subscribe((data: users[])=> {
      this.users = data;
      // console.log(this.users);
    });
    
  }

  title = 'interviewTest';
  name= "angular";
  lastname = "react";
  show = false;
  Toggle() {
    this.show = !this.show;
  }
}
