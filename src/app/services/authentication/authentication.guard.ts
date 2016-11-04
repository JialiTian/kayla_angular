import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate() {
    if (this.authService.isUserLogin()) {
      return true;
    };

    window.location.href = 'http://www.google.com/';
    return false;
  }
}