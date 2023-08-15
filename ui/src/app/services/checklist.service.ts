import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor() {}

  isLoading: boolean = false;
  listItems = new BehaviorSubject<string[] | []>([]);
  user = new BehaviorSubject<User | null>(null);

  addUserInStorage() {
    if (this.user) {
      this.user.subscribe((user) => {
        const loggedUser = JSON.stringify(user);
        localStorage.setItem('user', loggedUser);
      });
    } else {
      console.log('Theres no User to save in storage!');
    }
  }
}
