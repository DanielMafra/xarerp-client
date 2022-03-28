export type Seller = {
  id: string;
  user_id: string;
  user: string;
  commission: number;
  commission_formatted: string;
}

export type CreateSeller = {
  user: string;
  commission: number;
}

export type UpdateSeller = {
  user?: string;
  commission?: number;
}
