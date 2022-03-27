export type Ticket = {
  id: string;
  title: string;
  description: string;
  user_id: string;
  user: string;
  unity_id: string;
  unity: string;
  status: string;
}

export type CreateTicket = {
  title: string;
  description: string;
  unity: string;
}

export type UpdateTicket = {
  title?: string;
  description?: string;
  user?: string;
  unity?: string;
  status?: number;
}
