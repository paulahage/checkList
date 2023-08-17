import { Component, Input } from '@angular/core';
import { ChecklistService } from '../../services/checklist.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() item!: string;
  @Input() index!: number;

  constructor(private checklistService: ChecklistService) {}

  deleteItem(itemIndex: number) {
    const currentListItems = this.checklistService.listItems.getValue();

    const newListItems = currentListItems.filter(
      (item, index) => index !== itemIndex
    );

    this.checklistService.listItems.next(newListItems);
  }
}
