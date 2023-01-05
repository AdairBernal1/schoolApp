import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoRegisterComponent } from './grupo-register.component';

describe('GrupoRegisterComponent', () => {
  let component: GrupoRegisterComponent;
  let fixture: ComponentFixture<GrupoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
