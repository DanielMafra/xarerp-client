export type Carrier = {
  id: string;
  name: string;
  states: string;
}

export type CreateCarrier = {
  name: string;
  states: string;
}

export type UpdateCarrier = {
  name?: string;
  states?: string;
}
