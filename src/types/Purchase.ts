export type Purchase = {
  id: string;
  user_id: string;
  user: string;
  unity_id: string;
  unity: string;
  provider_id: string;
  provider: string;
  product_id: string;
  product_name: string;
  product_description: string;
  quantity: number;
  unit_price: number;
  unit_price_formatted: string;
  status: number;
}

export type CreatePurchase = {
  unity: string;
  provider: string;
  product: string;
  quantity: number;
  unit_price: number;
}

export type UpdatePurchase = {
  user?: string;
  unity?: string;
  provider?: string;
  product?: string;
  quantity?: number;
  unit_price?: number;
  status?: number;
}
