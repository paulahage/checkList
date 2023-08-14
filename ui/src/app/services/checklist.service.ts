import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor() {}

  isLoading: boolean = false;
  listItems = new BehaviorSubject<string[] | []>([]);
}
