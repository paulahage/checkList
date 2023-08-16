import { TicketStatus } from '../models/ticket-status.model';
import { Ticket } from '../models/ticket.model';

export const ticketMock: Ticket[] = [
  {
    id: '01',
    destination: 'Italy',
    destinationId: 'D01',
    price: 300,
    status: TicketStatus.OPERATIONAL,
  },
  {
    id: '02',
    destination: 'Germany',
    destinationId: 'D02',
    price: 50,
    status: TicketStatus.MAINTENANCE,
  },
  {
    id: '03',
    destination: 'Paris',
    destinationId: 'D03',
    price: 150,
    status: TicketStatus.SHUTDOWN,
  },
];
