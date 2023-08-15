import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor() {}

  ngOnInit() {}

  isLoading: boolean = false;
  listItems = new BehaviorSubject<string[] | []>([]);
  user = new BehaviorSubject<User | null>(null);

  //userOnStorage = localStorage.getItem('user');

  // checkStorage() {
  //   return this.userOnStorage ? true : false;
  // }

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
