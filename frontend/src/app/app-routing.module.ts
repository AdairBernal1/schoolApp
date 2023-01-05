import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoRegisterComponent } from './alumnos/CrearAlumno copy/alumno-register/alumno-register.component';
import { ModificarAlumnoComponent } from './alumnos/modificar-alumno/modificar-alumno.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrupoRegisterComponent } from './grupos/grupo-register/grupo-register.component';
import { GruposComponent } from './grupos/grupos.component';
import { ModificarGrupoComponent } from './grupos/modificar-grupo/modificar-grupo.component';
import { HomeComponent } from './home/home.component';
import { ModificarTeacherComponent } from './teachers/modificar-teacher/modificar-teacher.component';
import { TeacherRegisterComponent } from './teachers/teacher-register/teacher-register.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'alumnos', component: AlumnosComponent, children:[
        {path: 'crear', component: AlumnoRegisterComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: ModificarAlumnoComponent, canActivate: [AuthGuard]}
      ],
      canActivate: [AuthGuard]},
      { path: 'grupos', component: GruposComponent, children:[
        {path: 'crear', component: GrupoRegisterComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: ModificarGrupoComponent, canActivate: [AuthGuard]}
      ],
      canActivate: [AuthGuard]},
      { path: 'teachers', component: TeachersComponent, children:[
        {path: 'crear', component: TeacherRegisterComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: ModificarTeacherComponent, canActivate: [AuthGuard]}
      ], canActivate: [AuthGuard]},
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
