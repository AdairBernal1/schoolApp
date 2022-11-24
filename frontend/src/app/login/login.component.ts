import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000);
  }

}
