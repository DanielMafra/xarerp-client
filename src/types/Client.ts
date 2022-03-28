export type Client = {
  id: string;
  name: string;
  email: string;
  tel: string;
  cep: string;
  city: string;
  state: string;
  user_id: string;
  user: string;
  unity_id: string;
  unity: string;
}

export type CreateClient = {
  name: string;
  email: string;
  tel: string;
  cep: string;
  city: string;
  state: string;
  unity: string;
}

export type UpdateClient = {
  name?: string;
  email?: string;
  tel?: string;
  cep?: string;
  city?: string;
  state?: string;
  user?: string;
  unity?: string;
}
