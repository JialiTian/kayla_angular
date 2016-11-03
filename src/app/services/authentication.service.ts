import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {}

  getCurrentUser() {
    let headers = new Headers( {
          'X-USER-ACCESS-TOKEN': 'NRSbUadcbnnEr_mejVxe', 
          'X-USER-ID': 149165
        });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('api/v1/user', options).map(response => <User>response.json());
  }

}
