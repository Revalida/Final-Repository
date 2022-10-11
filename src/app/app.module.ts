import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RouterModule } from '@angular/router';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { StudentHeaderComponent } from './student/studentheader/studentheader.component';

@NgModule({
  declarations: [
    StudentHeaderComponent,
    StudentdashboardComponent,
    AppComponent,
    AdmindashboardComponent,
    StudentListComponent,
    HeaderComponent,
    LoginComponent,
    WelcomepageComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
