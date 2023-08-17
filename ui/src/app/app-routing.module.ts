import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/checkTicket', pathMatch: 'full' },
  { path: 'checkTicket', component: HomeComponent },
  { path: 'checkTicket/travels', component: TravelsComponent, canActivate:[authGuard] },

  // { path: 'checklist/signin', component: SignInComponent },
  // {
  //   path: 'checklist/my-list',
  //   component: MyListComponent,
  //   canActivate: [checklistGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
