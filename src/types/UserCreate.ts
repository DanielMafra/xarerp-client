export type User = {
  id: string;
  name: string;
  email: string;
  unity_id: string;
  unity: string;
  position: string;
  permissions: string;
  active: boolean;
}

export type CreateUser = {
  id: string;
  name: string;
  email: string;
  password?: string;
  unity_id: string;
  position: string;
  permissions: string;
}

export type NewCreateUser = {
  name: string;
  email: string;
  unity: string;
  position: string;
}

export type UpdateUser = {
  name?: string;
  email?: string;
  password?: string;
  unity?: string;
  position?: string;
  permissions?: string;
  active?: boolean;
}
