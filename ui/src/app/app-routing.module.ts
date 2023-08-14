import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyListComponent } from './my-list/my-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/checklist', pathMatch: 'full' },
  { path: 'checklist', component: HomeComponent },
  { path: 'checklist/signin', component: SignInComponent },
  { path: 'checklist/my-list', component: MyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
