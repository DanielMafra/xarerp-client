export type Sale = {
  id: string;
  product_id: string;
  product_name: string;
  product_description: string;
  unity_id: string;
  unity: string
  client_id: string;
  client_name: string;
  client_city: string;
  client_state: string;
  seller_id: string;
  seller: string;
  carrier_id: string;
  carrier: string;
  quantity: number;
  status: number;
}

export type CreateSale = {
  product: string;
  quantity: number;
  unity: string;
  client: string;
  seller: string;
  carrier: string;
}

export type UpdateSale = {
  product?: string;
  unity?: string;
  client?: string;
  seller?: string;
  carrier?: string;
  quantity?: number;
  status?: number;
}
