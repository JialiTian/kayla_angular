import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class HttpClientService {
  constructor(private http: Http, private cookieService: CookieService) {}

  createAuthHeader(headers: Headers) {
    headers.append('X-USER-ACCESS-TOKEN', this.accessToken()); 
    headers.append('X-USER-ID', this.userID());
  }

  userID() {
    return this.cookieService.get('userID');
  }

  accessToken() {
    return this.cookieService.get('accessToken').replace(/"/g, "");
  }

  get(url) {
    let headers = new Headers();
    this.createAuthHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}