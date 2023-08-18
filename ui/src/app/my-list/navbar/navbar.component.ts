import { Component } from '@angular/core';
import { ChecklistService } from '../../services/checklist.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userOnStorage!: User;
  user$!: Observable<User | null>;

  constructor(
    private checklistService: ChecklistService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userOnStorage = this.checklistService.checkStorage();
    this.user$ = this.checklistService.user;
  }

  logout() {
    localStorage.removeItem('user');
    this.checklistService.user.next(null);

    this.router.navigate(['/checkTicket']);
  }
}
