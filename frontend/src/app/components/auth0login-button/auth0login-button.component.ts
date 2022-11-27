import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0login-button',
  templateUrl: './auth0login-button.component.html',
})
export class Auth0loginButtonComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

  login($redirect_uri: string, $appState: string): void {
    this.auth.loginWithRedirect({redirect_uri: $redirect_uri, appState: { target: $appState }});
  }

}
