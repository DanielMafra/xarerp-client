export type Store = {
  id: string;
  name: string;
  type: string;
}

export type CreateStore = {
  name: string;
  type: string;
}

export type UpdateStore = {
  name?: string;
  type?: string;
}
