import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if ('jwt' in route.queryParams) {
    const token = JSON.stringify(route.queryParams);
    localStorage.setItem('jwtToken', token);
    authService.login();

    return true;
  }

  router.navigate(['/checkTicket']);
  return false;
};
