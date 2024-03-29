import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AuthModule } from '@auth0/auth0-angular';
import { Auth0loginButtonComponent } from './components/auth0login-button/auth0login-button.component';
import { Auth0logoutButtonComponent } from './components/auth0logout-button/auth0logout-button.component';
import { GruposComponent } from './grupos/grupos.component';
import { TeachersComponent } from './teachers/teachers.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MatTableComponent,
    RegFormComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    AlumnosComponent,
    Auth0loginButtonComponent,
    Auth0logoutButtonComponent,
    GruposComponent,
    TeachersComponent,
  ],
  imports: [
    ImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-fhyiwtmosifs7eqw.us.auth0.com',
      clientId: '3XPBj5S1n9ckPqYsA7aTLoY0Z6CDor2S'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
