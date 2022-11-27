import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0logout-button',
  templateUrl: './auth0logout-button.component.html',
})
export class Auth0logoutButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout({ returnTo: 'http://localhost:4200' });
  }
}
