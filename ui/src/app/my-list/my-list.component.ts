import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChecklistService } from '../services/checklist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent {
  @ViewChild('f', { static: false }) myListForm = NgForm;

  listItems$!: Observable<string[] | []>;

  constructor(private checklistService: ChecklistService) { }

  ngOnInit() {
    this.listItems$ = this.checklistService.listItems
  }

  addItem(form: NgForm) {
    const value = form.value;

    const currentListItems = this.checklistService.listItems.getValue();

    const newListItems = [...currentListItems, value.listItem];

    this.checklistService.listItems.next(newListItems);

    form.reset();
  }
}
