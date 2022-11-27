import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0loginButtonComponent } from './auth0login-button.component';

describe('Auth0loginButtonComponent', () => {
  let component: Auth0loginButtonComponent;
  let fixture: ComponentFixture<Auth0loginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0loginButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auth0loginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
