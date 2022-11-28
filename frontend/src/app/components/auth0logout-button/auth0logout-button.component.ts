import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0logout-button',
  templateUrl: './auth0logout-button.component.html',
})
export class Auth0logoutButtonComponent implements OnInit {
  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
