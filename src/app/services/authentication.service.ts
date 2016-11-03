import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {}

  getCurrentUser() {
    return this.http.get('api/v1/user').map(response=>response.json());
  }

}
