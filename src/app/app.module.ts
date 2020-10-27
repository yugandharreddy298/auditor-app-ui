import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {Router,RouterMo}
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AuditorpageComponent } from './auditorpage/auditorpage.component'; // <-- import the module
import { AuthGuard } from './_guards/auth.guard'

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user', component: MainmenuComponent,
    children:
      [
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: 'auditor', component: AuditorpageComponent, canActivate: [AuthGuard] }
      ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    DashboardComponent,
    AuditorpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
