import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'nav' , component : NavComponent},
  { path: 'table' , component: MatTableComponent},
  { path: 'regform' , component: RegFormComponent},
  { path: 'login' , component: LoginComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
