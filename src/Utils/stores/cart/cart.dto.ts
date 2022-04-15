import {IOrderDto} from '../orders/orders.dto';

export interface ICartState {
  message?: string;
  error?: string;
  loading?: boolean;
  cart: IOrderDto;
}
