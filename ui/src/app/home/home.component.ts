import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { ChecklistService } from '../services/checklist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userOnStorage!: User;

  constructor(
    private router: Router,
    private checklistService: ChecklistService
  ) {}

  ngOnInit() {
    this.userOnStorage = this.checklistService.checkStorage();
  }

  signInCheckList() {
    if (this.userOnStorage) {
      this.router.navigate(['checklist/my-list']);
    } else {
      this.router.navigate(['checklist/signin']);
    }
  }
}
