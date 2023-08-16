import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userOnStorage!: User;

  constructor(private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('user');

    if (user) {
      this.userOnStorage = JSON.parse(user);
      console.log(this.userOnStorage);
    }
  }

  signInCheckList() {
    if (this.userOnStorage) {
      this.router.navigate(['checklist/my-list']);
    } else {
      this.router.navigate(['checklist/signin']);
    }
  }
}
