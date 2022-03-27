export type Provider = {
  id: string;
  name: string;
  email: string;
  tel: string;
}

export type CreateProvider = {
  name: string;
  email: string;
  tel: string;
}

export type UpdateProvider = {
  name?: string;
  email?: string;
  tel?: string;
}
