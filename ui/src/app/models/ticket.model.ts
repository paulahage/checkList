import { BasicTicket } from "./basic-ticket.model";
import { TicketStatus } from "./ticket-status.model";

export interface Ticket extends BasicTicket{
  price: number;
  status: TicketStatus;
}