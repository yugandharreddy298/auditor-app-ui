import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, public auth: UserService){}
  isActiveuser: any;

  canActivate(): boolean {
    this.isActiveuser = this.auth.isAuthenticated();
    console.log(this.isActiveuser)
    if (this.isActiveuser == null) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  }
  

