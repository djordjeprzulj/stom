import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public _auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this._auth.isAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    }
    
    return true;
  }
}