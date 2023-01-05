import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTeacherComponent } from './modificar-teacher.component';

describe('ModificarTeacherComponent', () => {
  let component: ModificarTeacherComponent;
  let fixture: ComponentFixture<ModificarTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
