import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChecklistService } from '../services/checklist.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm!: FormGroup;

  constructor(
    private router: Router,
    private checkListService: ChecklistService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.checkListService.isLoading = true;

    setTimeout(() => {
      this.checkListService.isLoading = false;
      this.apiService.registerUser(this.signInForm.value);
      this.checkListService.addUserInStorage();

      this.router.navigate(['checklist/my-list']);
    }, 1500);
  }

  get isLoading() {
    return this.checkListService.isLoading;
  }
}
