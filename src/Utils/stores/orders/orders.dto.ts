export interface IProductOrderDto {
  product_id: string;
  price: number;
  quantity: number;
  img_url?: string;
  product_name?: string;
}
export enum OrderStatus {
  in_order = 'in_order',
  waiting_accept = 'waiting_accept',
  refused = 'refused',
  accepted = 'accepted',
  delivered = 'delivered',
}
export type OrderTypes =
  | 'in_order'
  | 'waiting_accept'
  | 'refused'
  | 'accepted'
  | 'delivered';
export interface IOrderDto {
  customer?: {
    user_id?: string;
    phone: string;
    name: string;
    address: string;
    note?: string;
  };
  products: Array<IProductOrderDto>;
  status?: OrderTypes;
}
export interface IOrderState {
  loading?: boolean;
  error?: any;
  message?: string;
}
