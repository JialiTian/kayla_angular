import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client/index'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  currentUser: {}

  constructor(private httpClient: HttpClientService) {}

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = this.httpClient.get('api/v1/user').map(response => response.json()).subscribe(data => this.currentUser = data);
    }
    return this.currentUser;
  }

  isUserLogin() {
    if(this.httpClient.userID())
      return true
    else
      return false
  }

}
