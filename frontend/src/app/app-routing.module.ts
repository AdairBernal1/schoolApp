import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GruposComponent } from './grupos/grupos.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'alumnos', component: AlumnosComponent, canActivate: [AuthGuard]},
      { path: 'grupos', component: GruposComponent, canActivate: [AuthGuard]},
      { path: 'teachers', component: TeachersComponent, canActivate: [AuthGuard]},
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
