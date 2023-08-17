import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.isLoggedIn = false;
  }
}
