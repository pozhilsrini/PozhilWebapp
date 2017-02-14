import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from 'app/model/User'
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private http:Http) {}

    getUser(): Observable<User> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('app/api/user.json', options)
            .map(res => res.json());
    }

}
