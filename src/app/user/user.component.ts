import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {id:0, name:"", address: ""}
  constructor(private router: Router, private route: ActivatedRoute, private api: AppService) {
    
    console.log("route", this.route);
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.user = this.api.getUser(id);
    });
  }

  ngOnInit(): void {
  }
  onCancel() {
    this.router.navigateByUrl('/users')
  }
  onDelete() {
    this.api.deleteUser(this.user.id);
    this.router.navigateByUrl("/users");
  }
  onSave() {
    if (this.user.id > 0) {
      this.api.updateUser(this.user);
    } else {
      this.api.addUser(this.user);
    }
    this.router.navigateByUrl("/users");
  }

}
