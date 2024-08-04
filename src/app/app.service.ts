import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { users } from "./app.component";

@Injectable()

export class AppService {

    constructor(private http: HttpClient) {

    }
    /**
     * 
     * @returns users type with array of object
     */
    getAllUsers(): Observable<users[]> {
        return this.http.get<users[]>('users');
    }

    public users = [{ id: 1, name: "Gopi", address: "home address" }];
  public count = 2;

  public getUser(id: number) {
    const index = this.users.map(x => x.id).indexOf(id);
    if (index != -1) {
      return { ...this.users[index] };
    } else {
      return { id: 0, name: "", address: "" };
    }
  }

  public addUser(user:any) {
    this.users.push({...user, id: this.count++});
  }

  public updateUser(data:any) {
    const index = this.users.map(x => x.id).indexOf(data.id);
    if (index !== -1) {
      this.users[index] = data;
    }
  }

  public deleteUser(id: number) {
    this.users = this.users.filter(x => x.id !== id);
  }

}