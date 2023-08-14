import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent {
  @ViewChild('f', { static: false }) myListForm = NgForm;

  addItem(form: NgForm) {
    const value = form.value;
    console.log('form value: ', value);

    form.reset();
  }
}
