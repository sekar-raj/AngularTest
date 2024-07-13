import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { users } from "./app.component";

@Injectable()

export class AppService {

    constructor(private http: HttpClient) {

    }

    getAllUsers(): Observable<users[]> {
        return this.http.get<users[]>('users');
    }

}