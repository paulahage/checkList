import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyListComponent } from './my-list/my-list.component';
import { TravelsComponent } from './travels/travels.component';
import { checklistGuard } from './utils/route-guards';

const routes: Routes = [
  { path: '', redirectTo: '/checklist', pathMatch: 'full' },
  { path: 'checklist', component: HomeComponent },
  { path: 'checklist/signin', component: SignInComponent },
  {
    path: 'checklist/my-list',
    component: MyListComponent,
    canActivate: [checklistGuard],
  },
  { path: 'checklist/travels', component: TravelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
