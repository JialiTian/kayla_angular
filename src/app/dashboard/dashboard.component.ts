import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {
  currentUser: {};

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getCurrentUser();
  }

}

