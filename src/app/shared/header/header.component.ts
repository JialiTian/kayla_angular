import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  currentUser: {};

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getCurrentUser();
  }

}
