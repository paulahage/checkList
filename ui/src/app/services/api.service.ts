import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { ChecklistService } from './checklist.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiBaseUrl = environment.apiBaseUrl;
  private signInEndpoint: string = 'signin';

  constructor(
    private http: HttpClient,
    private checklistService: ChecklistService
  ) {}

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  registerUser(user: User): void {
    this.http
      .post<User>(`${this.apiBaseUrl}${this.signInEndpoint}`, user)
      .subscribe((user: User) => {
        this.checklistService.user.next(user);
        this.checklistService.addUserInStorage();
      });
  }
}
