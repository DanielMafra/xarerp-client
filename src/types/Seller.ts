export type Seller = {
  id: string;
  user_id: string;
  user: string;
  comission: number;
  comission_formatted: string;
}

export type CreateSeller = {
  user: string;
  comission: number;
}

export type UpdateSeller = {
  user?: string;
  comission?: number;
}
