export type Financial = {
  id: string;
  type: string;
  user_id: string;
  user: string;
  unity_id: string;
  unity: string;
  value: number;
  value_formatted: string;
}

export type CreateFinancial = {
  type: number;
  unity: string;
  value: number;
}

export type UpdateFinancial = {
  type?: number;
  user?: string;
  unity?: string;
  value?: number;
}
