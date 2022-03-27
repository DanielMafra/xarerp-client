export type Product = {
  id: string;
  name: string;
  description: string;
  purchase_price: number;
  purchase_price_formatted: string;
  sale_price: number;
  sale_price_formatted: string;
  category_id: string;
  category: string;
  unity_id: string;
  unity: string;
  provider_id: string;
  provider: string;
  user_id: string;
  user: string;
  lot: number;
  validity: string;
  quantity: number;
}

export type CreateProduct = {
  name: string;
  description: string;
  purchase_price: number;
  sale_price: number;
  category: string;
  unity: string;
  provider: string;
  lot: number;
  validity: string;
  quantity: number;
}

export type UpdateProduct = {
  name?: string;
  description?: string;
  purchase_price?: number;
  sale_price?: number;
  category?: string;
  unity?: string;
  provider?: string;
  user?: string;
  lot?: number;
  validity?: string;
  quantity?: number;
}
