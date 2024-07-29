import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // users: any;
  constructor(public appService: AppService) { }

  ngOnInit(): void {
    // this.users = [
    //   {"name": "sekar",
    //   "age": 33
    //   },
    //   {"name": "raj",
    //   "age": 34
    //   }
    // ]
    // this.appService.users().subscribe((data: any)=> {
    //   this.users = data;
    //   console.log(this.users);
    // });
    // console.log(this.users);
  }

}
