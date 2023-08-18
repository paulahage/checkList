import { Component } from '@angular/core';
import { ticketMock } from '../ui-mock-data/ticket-mock';
import { Ticket } from '../models/ticket.model';
import { TicketStatus } from '../models/ticket-status.model';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss'],
})
export class TravelsComponent {
  ticketList: Ticket[] = ticketMock;

  getTicketStatus(status: TicketStatus) {
    switch (status) {
      case TicketStatus.OPERATIONAL:
        return 'operational';
      case TicketStatus.MAINTENANCE:
        return 'maintenance';
      case TicketStatus.SHUTDOWN:
        return 'shutdown';
      default:
        return '';
    }
  }
}
